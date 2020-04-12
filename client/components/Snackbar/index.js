import React, { useState, useEffect } from 'react';
import { animated, useTransition } from 'react-spring';

export default ({
    config = {
        tension: 125, friction: 20, precision: 0.1,
    }, timeout = 3000, children, setIsSnackbarActive,
}) => {
    const [refMap] = useState(() => new WeakMap());
    const [items, setItems] = useState([]);
    const transitions = useTransition(items, item => item.key, {
        from: { opacity: 0, height: 0 },
        enter: item => next => next({ opacity: 1, height: refMap.get(item).offsetHeight }),
        leave: () => async next => {
            await next({ opacity: 0 });
            await next({ height: 0 });
            setIsSnackbarActive(false);
        },
        onRest: item => setItems(state => state.filter(i => i.key !== item.key)),
        config: (item, state) => (state === 'leave' ? [{ duration: timeout }, config, config] : config),
    });

    useEffect(() => {
        children(msg => setItems(state => [...state, { msg }]));
    }, []);

    return (
        <div className="container">
            { transitions.map(({ item, key, props }) => (
                item && (
                    <animated.div
                        key={key}
                        style={props}
                        className="snackbar"
                    >
                        <div className="content" ref={ref => ref && refMap.set(item, ref)}>
                            {item.msg}
                        </div>
                    </animated.div>
                )))}
            <style jsx>{`
                .container {
                    position: absolute;
                    bottom: -20px;
                    left: 0;
                    pointer-events: none;
                    width: 100%;
                    z-index: 10;
                }
                div :global(.snackbar) {
                    position: relative;
                    overflow: hidden;
                }
                .content {
                    display: flex;
                    background-color: var(--secondary);
                    color: var(--onsecondary);
                    min-height: 48px;
                    padding-left: 16px;
                    padding-right: 16px;
                    justify-content: flex-start;
                    align-items: center;
                    font-size: var(--small);
                    border-radius: 4px;
                    overflow: hidden;
                    height: auto;
                }
            `}
            </style>
        </div>
    );
};
