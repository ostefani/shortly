export default () => {
    return (
        <footer>
            <a href="https://github.com/ostefani" target="_blank" rel="noopener noreferrer">Olga Stefanishyna</a>
            <style jsx>{`
            footer {
                display: flex;
                justify-content: center;
                align-items: center;
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
        `}
            </style>
        </footer>

    );
};
