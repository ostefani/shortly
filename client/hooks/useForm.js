import { useState, useEffect, useCallback } from 'react';

export default stateSchema => {
    const [state, setState] = useState(stateSchema);
    const [isDirty, setIsDirty] = useState(false);

    const handleChange = useCallback(event => {
        if (!isDirty) {
            setIsDirty(true);
        }
        const { name } = event.target;
        const { value } = event.target;
        setState(prevState => ({ ...prevState, [name]: { value, error: '', isValidated: false } }));
    }, []);

    const resetForm = () => {
        setState({ uri: { value: '', error: '' }, subpart: { value: '', error: '' } });
    };

    return {
        state, handleChange, setState, resetForm,
    };
};
