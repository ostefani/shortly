const centerStyles = {
    display: 'flex',
    minHeight: '100vh',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',

};
const Center = ({ children }) => <div style={centerStyles}>{children}</div>;

const wrapperStyles = {
    display: 'grid',
    width: '50%',
    rowGap: '16px',

};
const Wrapper = ({ children }) => <div style={wrapperStyles}>{children}</div>;

export {
    Center,
    Wrapper,
};
