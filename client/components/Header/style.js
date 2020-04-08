import css from 'styled-jsx/css';

export default css`
    header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-top: 16px;
        padding-bottom: 16px;
    }
    ul {
        margin: 0;
        list-style: none;
        padding-left: 0;
    }
    li {
        display: inline-block;
        padding-right: 16px;
    }
    ul li:last-child {
        padding-right: 0;
    }
    a {
        text-decoration: none;
        color: var(--onbackground);
        transition: color 0.3s ease;
    }
    a:hover {
        color: var(--primary-v);
        transition: color 0.3s ease;
    }
    .logo {
        font-size: var(--large);
        font-family: var(--compl);
        color: var(--primary);
        transition: color 0.3s ease;
        display: inline-flex;
        border: 1px solid var(--primary);
        border-radius: 4px;
        padding: 8px 16px;
    }
    .logo:hover {
        color: var(--primary-v);
        border: 1px solid var(--primary-v);
        transition: color 0.3s ease, border 0.3s ease;
    }
`;
