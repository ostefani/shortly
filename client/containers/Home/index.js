import React, { useState, useEffect } from 'react';
import Page from '../../components/Page';
import Label from '../../components/Label';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Form from '../Form';
import Snackbar from '../../components/Snackbar';
import postURI from '../../lib/postURI';
import postSubpart from '../../lib/postSubpart';

export default () => {
    const [value, setValue] = useState({ link: '', subpart: '' });
    const [uriError, setUriError] = useState('');
    const [subpartError, setSubpartError] = useState('');
    const [isURLCreated, setIsURLCreated] = useState(false);

    const handleChange = event => {
        if (uriError) {
            setUriError('');
        }

        if (subpartError) {
            setSubpartError('');
        }

        setValue({ ...value, [event.target.name]: event.target.value });
    };

    const handleSubmitURI = async event => {
        event.preventDefault();
        setIsURLCreated(false);
        const result = await postURI({ link: value.link });

        if (result.created) {
            setValue({ ...value, link: result.shortURI });
            setIsURLCreated(true);
        }
        else {
            setUriError(result.error || result.message);
        }
    };

    const handleSubmitSubpart = async event => {
        event.preventDefault();

        const result = await postSubpart({ link: value.link, subpart: value.subpart });
        console.log('result: ', result);
        if (result.created) {
            setIsURLCreated(false);
            setValue({ link: '', subpart: '' });
        }
        else {
            setSubpartError(result.error || result.message);
        }
    };

    return (
        <Page>
            <Form onSubmit={isURLCreated ? handleSubmitSubpart : handleSubmitURI}>
                <Label inputId="link">Enter your link</Label>
                <Input
                    name="link"
                    id="link"
                    placeholder="Paste your link"
                    value={value.link}
                    error={uriError}
                    onChange={handleChange}
                    disabled={isURLCreated}
                />
                {isURLCreated
                    && (
                        <>
                            <Label inputId="link">You can change subpart</Label>
                            <Input
                                name="subpart"
                                id="subpart"
                                placeholder="Your new subpart"
                                value={value.subpart}
                                error={subpartError}
                                onChange={handleChange}
                            />
                        </>
                    )}
                <Button>Send</Button>
            </Form>
        </Page>
    );
};
