import styles from './style';

export default ({ links }) => {
    return (
        <>
            <ul>
                {links
                    ? links.map(e => (
                        <li key={Math.random()}>
                            <div>
                                <a href={e.shortURI} target="_blank" rel="noopener noreferrer">{e.shortURI}</a>
                                <a href={e.longURI} target="_blank" rel="noopener noreferrer">{e.longURI}</a>
                            </div>
                        </li>
                    ))
                    : 'Loading'}
            </ul>
            <style jsx>{styles}</style>
        </>
    );
};
