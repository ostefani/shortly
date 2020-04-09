export default ({ isActive, message }) => {
    return (
        <>
            <div>{message}</div>
            <style jsx>{`
                div {
                    display: ${isActive ? 'flex' : 'none'};
                    background-color: var(--secondary);
                    color: var(--onsecondary);
                    width: 100%;
                    height: 48px;
                    padding: 16px;
                    justify-content: flex-start;
                    align-items: center;
                    font-size: var(--small);
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
