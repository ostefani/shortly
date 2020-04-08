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
        padding: 32px;
        margin: 50px auto 0;
        background: var(--background);
        border-radius: 16px;
        box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    }
    h1 {
        font-family: var(--main);
        margin: 0;
    }
    form {
        display: grid;
        row-gap: 24px;
    }
`;
