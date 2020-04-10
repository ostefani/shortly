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
    console.log('isSnackbarActive: ', isSnackbarActive);

    const ref = useRef(null);

    const setMessage = m => {
        console.log('m: ', m)
        return ref.current(m);
    }
    useEffect(() => {
        if (isSnackbarActive) {
            setMessage(message);
        }
        // else setMessage(message);
    }, [isSnackbarActive]);
    console.log('ref: ', ref);
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
                <Snackbar children={add => {
                    console.log('add: ', add);
                    return (ref.current = add)}} />
            </div>
            <style jsx>{input}</style>
            <style jsx>{`
                input {
                    border: ${error ? '2px solid var(--error)' : '2px solid #00000040'}
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
