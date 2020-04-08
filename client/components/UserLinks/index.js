import styles from './style';

export default ({ links }) => {
    return (
        <>
            <ul>
                {links
                    ? links.map(e => (
                        <li key={Math.random()}>
                            <div>
                                <a href={e.shortURI}>{e.shortURI}</a>
                                <a href={e.longURI}>{e.longURI}</a>
                            </div>
                        </li>
                    ))
                    : 'Loading'}
            </ul>
            <style jsx>{styles}</style>
        </>
    );
};
