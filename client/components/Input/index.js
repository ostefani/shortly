import Error from '../Error';
import input from './style';

export default ({
    type = 'text',
    placeholder = 'Enter your data',
    name,
    value,
    error,
    disabled,
    onChange,
}) => {
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
                    padding-bottom: 24px;
                }
            `}
            </style>
        </>
    );
};
