import React, { useRef, useState,useEffect } from 'react';
import { animated, useTransition } from 'react-spring';

export default ({ message, setIsSnackbarActive, isSnackbarActive }) => {
    const messageRef = useRef(null);
    const [isActive, setIsActive] = useState(isSnackbarActive);
    const transitions = useTransition(isActive, null, {
        from: { opacity: 0, height: 0 },
        enter: { opacity: 1, height: 48 },
        leave: { opacity: 0, height: 0 },
        config: { duration: 500 },
    });

    setTimeout(() => {
        if (setIsSnackbarActive) {
            setIsSnackbarActive(false);
        }
    }, 4000); // 4 sec

    useEffect(() => {
        setIsActive(isSnackbarActive);
    }, [isSnackbarActive]);

    return (
        <>
            { transitions.map(({ item, key, props }) => (
                item && (
                    <animated.div
                        ref={messageRef}
                        key={key}
                        style={props}
                        className="snackbar"
                    >{message}
                    </animated.div>
                )))}
            <style jsx>{`
                :global(.snackbar) {
                    display: flex;
                    background-color: var(--secondary);
                    color: var(--onsecondary);
                    width: 100%;
                    height: 48px;
                    padding-left: 16px;
                    padding-right: 16px;
                    justify-content: flex-start;
                    align-items: center;
                    font-size: var(--small);
                    border-radius: 4px;
                    position: absolute;
                    bottom: -20px;
                    left: 0;
                    overflow: hidden;
                }
                @keyframes apearance {
                    0% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                }
            `}
            </style>
        </>
    );
};
