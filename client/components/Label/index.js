import label from './style';

export default ({ children, inputId }) => {
    return (
        <>
            <label htmlFor={inputId}>{children}</label>
            <style jsx>{label}</style>
        </>
    );
};
