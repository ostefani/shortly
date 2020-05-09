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
        margin: 40px auto 0;
        background: var(--background);
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
