import Header from '../Header';

export default ({ children }) => (
    <>
        <div>
            <Header />
            {children}
        </div>
        <style jsx>{`
                div {
                    max-width: 1100px;
                    min-width: 300px;
                    margin: 0 auto;
                    padding-left: 16px;
                    padding-right: 16px;
                }
            `}
        </style>
    </>
);
