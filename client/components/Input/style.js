import css from 'styled-jsx/css';

export default css`
    input {
        border: 2px solid #00000040;
        padding: 16px;
        outline: none;
        width: 100%;
        background: 0;
        border-radius: 4px;
        transition: border 0.5s ease;
        font-size: var(--med);
        font-family: var(--main);
        display: block;
        width: 100%;
        color: var(--onbackground);
    }
    input:hover {
        border: 2px solid #00000087;
        transition: border 0.3s ease;
    }
    input:focus {
        border: 2px solid var(--primary-v);
        transition: border 0.3s ease;
    }
    input::placeholder {
        font-size: var(--med);
        font-family: var(--main);
    }
`;
