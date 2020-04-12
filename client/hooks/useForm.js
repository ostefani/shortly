import { useState, useEffect, useCallback } from 'react';

export default (stateSchema, validationSchema = {}, callback) => {
    const [state, setState] = useState(stateSchema);
    const [isDirty, setIsDirty] = useState(false);
    const [isValidated, setIsValidated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

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
