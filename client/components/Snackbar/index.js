import React, { useRef, useState,useEffect } from 'react';
import { animated, useTransition } from 'react-spring';

export default ({ config = { tension: 125, friction: 20, precision: 0.1 }, timeout = 3000, children }) => {
    // const messageRef = useRef(null);
    const [refMap] = useState(() => new WeakMap());
    const [items, setItems] = useState([]);
    const transitions = useTransition(items, item => item.key, {
        from: { opacity: 0, height: 0, life: '100%' },
        enter: item => async next => await next({ opacity: 1, height: refMap.get(item).offsetHeight }),
        leave: item => async (next, cancel) => {
            await next({ life: '0%' });
            await next({ opacity: 0 });
            await next({ height: 0 });
        },
        onRest: item => setItems(state => state.filter(i => i.key !== item.key)),
        config: (item, state) => (state === 'leave' ? [{ duration: timeout }, config, config] : config),
    });

    console.log('refMap: ', refMap);
    console.log('children: ', children);

    useEffect(() => children(msg => {
        console.log('msg: ', msg);
        return setItems(state => [...state, { msg }])}), [])

    return (
        <>
            { transitions.map(({ item, key, props }) => (
                item && (
                    <animated.div
                        ref={ref => ref && refMap.set(item, ref)}
                        key={key}
                        style={props}
                        className="snackbar"
                    >{item.msg}
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
                    padding: 16px;
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
