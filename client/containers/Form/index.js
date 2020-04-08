import css from 'styled-jsx/css';
import form, { container } from './style';

export default ({
    title,
    children,
    onSubmit,
    onChange,
    value,
}) => {
    return (
        <>
            <div className="card">
                <div className="container">
                    <form
                        onSubmit={onSubmit}
                        onChange={onChange}
                        value={value}
                    >{children}
                    </form>
                </div>
            </div>
            <style jsx>{form}</style>
        </>
    );
};
