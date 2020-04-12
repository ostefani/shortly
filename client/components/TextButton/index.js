import Button from './style';

export default ({ children, disabled, onClick }) => {
    return (
        <>
            <button type="button" disabled={disabled} onClick={onClick}>{children}</button>
            <style jsx>{Button}</style>
        </>
    );
};
