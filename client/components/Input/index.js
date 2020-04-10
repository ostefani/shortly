import Error from '../Error';
import Snackbar from '../Snackbar';
import input from './style';

const BOTTOM = '32px';

export default ({
    type = 'text',
    placeholder = 'Enter your data',
    name,
    value,
    error,
    disabled,
    onChange,
    isSnackbarActive,
    message,
    setIsSnackbarActive,
}) => {
    const messages = {};
    return (
        <>
            <div>
                <input
                    id={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    disabled={disabled}
                    onChange={onChange}
                />
                {error && <Error>{error}</Error>}
                <Snackbar message={message} isSnackbarActive={isSnackbarActive} setIsSnackbarActive={setIsSnackbarActive} />
            </div>
            <style jsx>{input}</style>
            <style jsx>{`
                input {
                    border: ${error ? '2px solid var(--error)' : '2px solid #00000040'}
                }
            `}
            </style>
            <style jsx>{`
                div {
                    position: relative;
                    padding-bottom: ${BOTTOM};
                }
            `}
            </style>
        </>
    );
};
