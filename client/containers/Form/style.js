import css from 'styled-jsx/css';

export default css`
    .container {
        display: grid;
        row-gap: 32px;
        width: 100%;
        margin: 0 auto;
    }
    .card {
        width: 100%;
        margin: 0 auto 0;
        padding: 40px;
        background: #e0dddd;
        border-radius: 4px;
        box-shadow: 0px 1px 1px -2px rgba(0,0,0,0.2), 0px 1px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    }
    form {
        display: grid;
        row-gap: 24px;
    }
`;
