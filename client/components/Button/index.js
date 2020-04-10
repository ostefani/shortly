import Button from './style';

export default ({ children, disabled, onClick }) => {
    return (
        <>
            <button type="submit" disabled={disabled} onClick={onClick}>{children}</button>
            <style jsx>{Button}</style>
            <style jsx>{`
                button {
                    box-shadow: ${disabled ? 'none' : '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)'}
                }
                button:hover {
                    box-shadow: ${disabled ? 'none' : '0px 5px 3px -3px rgba(0,0,0,0.2), 0px 4px 5px 1px rgba(0,0,0,0.14), 0px 3px 8px 2px rgba(0,0,0,0.12)'};
                }
            `}
            </style>
        </>
    );
};
