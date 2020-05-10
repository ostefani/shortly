import Header from '../Header';
import Footer from '../Footer';

export default ({ children }) => (
    <>
        <div>
            <Header />
            {children}
            <Footer />
        </div>
        <style jsx>{`
                div {
                    max-width: 1100px;
                    min-width: 300px;
                    min-height: 100vh;
                    margin: 0 auto;
                    padding-left: 16px;
                    padding-right: 16px;
                    display: grid;
                    grid-template-rows: 80px 1fr 64px;
                }
            `}
        </style>
    </>
);
