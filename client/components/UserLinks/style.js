import css from 'styled-jsx/css';

export default css`
    ul {
        list-style: none;
        padding-left: 0;
        margin: 0;
    }
    li {
        padding: 16px;
        border: 1px solid gray;
        margin-bottom: 32px;
        border-radius: 4px;
    }
    li:last-child {
        margin-bottom: 0;
    }
    a {
        color: var(--onbackground);
        text-decoration: none;
        transition: color 0.3s ease;
        border: none;
        padding: 0;
        cursor: pointer;
        display: block;
    }
    a:hover {
        color: var(--primary-v);
        transition: color 0.3s ease;
    }
`;
