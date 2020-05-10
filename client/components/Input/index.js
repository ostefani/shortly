import React, { useState, useEffect, useRef } from 'react';
import Error from '../Error';
import Snackbar from '../Snackbar';
import input from './style';

const BOTTOM = '32px';

export default ({
    type = 'text',
    placeholder = 'Enter your data',
    name,
    value,
    error,
    disabled,
    onChange,
    isSnackbarActive,
    message,
    setIsSnackbarActive,
}) => {
    const ref = useRef(null);

    const setMessage = m => {
        return ref.current(m);
    };

    useEffect(() => {
        if (isSnackbarActive) {
            setMessage(message);
        }
    }, [isSnackbarActive]);

    return (
        <>
            <div>
                <input
                    id={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    disabled={disabled}
                    onChange={onChange}
                />
                {error && <Error>{error}</Error>}
                <Snackbar setIsSnackbarActive={setIsSnackbarActive} children={add => {
                    return (ref.current = add)}} />
            </div>
            <style jsx>{input}</style>
            <style jsx>{`
                input {
                    border: ${error ? '2px solid var(--error)' : '2px solid var(--onbackground)'}
                }
            `}
            </style>
            <style jsx>{`
                div {
                    position: relative;
                    padding-bottom: ${BOTTOM};
                }
            `}
            </style>
        </>
    );
};
