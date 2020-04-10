export default ({ children }) => {
    return (
        <>
            <div>{children}</div>
            <style jsx>{`
                position: absolute;
                bottom: 4px;
                left: 16px;
                color: var(--error);
                font-size: var(--small);
                font-family: var(--main);
            `}
            </style>
        </>
    );
};
