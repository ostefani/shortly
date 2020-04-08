export default ({ children }) => {
    return (
        <>
            <div>{children}</div>
            <style jsx>{`
                position: absolute;
                bottom: 0;
                color: var(--error);
                font-size: var(--small);
                font-family: var(--main);
            `}
            </style>
        </>
    );
};
