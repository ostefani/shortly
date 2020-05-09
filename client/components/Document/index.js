import { useSpring, animated } from 'react-spring';

export default () => {
    const props = useSpring({ x: 690, from: { x: 0 } });

    return (
        <animated.svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            height="70" width="50"
            fill="none"
            stroke="black"
            xmlSpace="preserve"
            strokeDashoffset={props.x}
            strokeDasharray="320"
            strokeWidth="1"
        >
            <g>
                <polygon
                    points="1 1, 30 1, 49 20, 49 69, 1 69"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path d="M10 20 L35 20" />
                <path d="M10 35 L40 35" />
                <path d="M10 50 L40 50" />
            </g>
        </animated.svg>
    );
};
