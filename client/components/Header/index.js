import Link from 'next/link';
import header from './style';

export default () => {
    return (
        <>
            <header>
                <Link href="/">
                    <a className="logo">Shortly</a>
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/my-links">
                                <a>My links</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <style jsx>{header}</style>
        </>
    );
};
