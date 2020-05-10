import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Page from '../../components/Page';
import Label from '../../components/Label';
import Input from '../../components/Input';
import Button from '../../components/Button';

import TextButton from '../../components/TextButton';
import Form from '../Form';
import postURI from '../../lib/postURI';
import postSubpart from '../../lib/postSubpart';
import useForm from '../../hooks/useForm';
import stateSchema from './schemas';

export default () => {
    const { state, setState, handleChange, resetForm } = useForm(stateSchema);
    const [isURLCreated, setIsURLCreated] = useState(false);
    const [isSubpartCreated, setIsSubpartCreated] = useState(false);
    const [isSnackbarActive, setIsSnackbarActive] = useState(false);

    const {
        uri: {
            value: uriValue, error: uriError,
        },
        subpart: {
            value: subpartValue, error: subpartError,
        },
    } = state;

    const handleSubmitURI = async event => {
        event.preventDefault();
        setIsURLCreated(false);
        const result = await postURI({ link: uriValue });
        if (result.created) {
            setState({ ...state, uri: { value: result.shortURI, error: '' } });
            setIsURLCreated(true);
        }
        else {
            setState({ ...state, uri: { value: uriValue, error: result.error || result.message } });
        }
    };

    const handleSubmitSubpart = async event => {
        event.preventDefault();
        setIsSubpartCreated(false);
        setIsSnackbarActive(false);
        const result = await postSubpart({ link: uriValue, subpart: subpartValue });
        if (result.created) {
            setState({ ...state, uri: { value: result.shortURI, error: '' } });
            setIsSubpartCreated(true);
        }
        else {
            setState({
                ...state,
                subpart: { value: subpartValue, error: result.error || result.message },
            });
        }
    };

    const handleCancelClick = () => {
        setIsURLCreated(false);
        setIsSubpartCreated(false);
        resetForm();
        setIsSnackbarActive(false);
    };

    useEffect(() => {
        if (isURLCreated) {
            setIsSnackbarActive(true);
        }
    }, [isURLCreated]);

    useEffect(() => {
        if (isSubpartCreated) {
            setIsSnackbarActive(true);
        }
    }, [isSubpartCreated]);

    return (
        <Page>
            <div className="content-container">
                <div className="jumbotron">
                    <div className="header-container">
                        <h1>Create shortened links</h1>
                        <p>Shortly is a tool to shorten links, making it easy to remember and share them everywhere.</p>
                    </div>
                </div>
                <Form onSubmit={isURLCreated ? handleSubmitSubpart : handleSubmitURI}>
                    <Label inputId="uri">{!isURLCreated ? 'Enter your link' : 'Your link is'}</Label>
                    <Input
                        name="uri"
                        id="uri"
                        placeholder="Paste your link"
                        value={uriValue}
                        error={uriError}
                        onChange={handleChange}
                        disabled={isURLCreated}
                        isSnackbarActive={isSnackbarActive}
                        setIsSnackbarActive={setIsSnackbarActive}
                        message="Successfully created"
                    />
                    {isURLCreated
                        && (
                            <>
                                <Label inputId="link">You can change subpart</Label>
                                <Input
                                    name="subpart"
                                    id="subpart"
                                    placeholder="Your new subpart"
                                    value={subpartValue}
                                    error={subpartError}
                                    onChange={handleChange}
                                />
                            </>
                        )}
                    <div className="button-container">
                        <Button>Send</Button>
                        {isURLCreated && <TextButton onClick={handleCancelClick}>Complete</TextButton>}
                    </div>
                </Form>
            </div>
            <style jsx>{`
            .content-container {
                margin-top: 40px;
                margin-bottom: 40px;
            }
            .button-container {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(144px,1fr));
                column-gap: 16px;
                row-gap: 16px;
            }
            h1 {
                font-size: 62px;
                font-family: var(--main);
                margin: 0;
            }
            p {
                font-size: var(--large);
                line-height: 1.5;
                color: #56575b;
            }
            .header-container {
                width: 75%;
                padding-top: 40px;
                padding-bottom: 40px;
            }
            .jumbotron {
                display: flex;
                justify-content: space-between;
                align-items: center;
                min-height: 400px;
            }
            `}
            </style>
        </Page>
    );
};
