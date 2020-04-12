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
    background: var(--background);
    color: var(--primary);
    font-size: var(--small);
    transition: background-color 0.5s ease;
    border-radius: 4px;
    justify-self: center;
}
button:hover {
    background-color: #94137942;
}
button:focus {
    border-color: var(--primary-l);
}
`;
