import React, { useState } from 'react';
import Page from '../../components/Page';
import Label from '../../components/Label';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Form from '../Form';
import postURI from '../../lib/postURI';
import postSubpart from '../../lib/postSubpart';

export default () => {
    const [value, setValue] = useState({ link: '', subpart: '' });
    const [error, setError] = useState('');
    const [isURLCreated, setIsURLCreated] = useState(false);

    const handleChange = event => {
        if (error) {
            setError('');
        }
        // setLinkValue(event.target.value);
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
            setError(result.error || result.message);
        }
    };

    const handleSubmitSubpart = async event => {
        event.preventDefault();
        console.log('subpart: ', value.subpart);
        const result = await postSubpart({ subpart: value.subpart });
        console.log('result: ', result);
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
                    error={error}
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
                                error={error}
                                onChange={handleChange}
                            />
                        </>
                    )}
                <Button>Send</Button>
            </Form>
            {/* Working on it
            isURLCreated
                    && (
                        <Form onSubmit={handleSubmitSubpart}>
                            <Label inputId="link">You can change subpart</Label>
                            <Input
                                name="subpart"
                                id="subpart"
                                placeholder="Your new subpart"
                                value={value.subpart}
                                error={error}
                                onChange={handleChange}
                            />
                            {isURLCreated && <Button>Send</Button>}
                        </Form>
                    )*/}
        </Page>
    );
};
