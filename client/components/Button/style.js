import css from 'styled-jsx/css';

export default css`
button {
    border: 3px solid transparent;
    min-height: 40px;
    display: inline-flex;
    outline: none;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    cursor: pointer;
    text-decoration: none;
    white-space: nowrap;
    min-width: 144px;
    background: var(--primary);
    color: var(--onprimary);
    font-size: var(--small);
    transition: box-shadow 0.5s ease, background-color 0.5s ease;
    border-radius: 4px;
    justify-self: start;
}
button:hover {
    background-color: var(--primary-v);
}
button:focus {
    border-color: var(--primary-l);
}
`;
