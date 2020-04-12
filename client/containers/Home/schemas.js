export const stateSchema = {
    uri: { value: '', error: '', isValidated: false },
    subpart: { value: '', error: '', isValidated: false },
};
export const validationSchema = {
    uri: {
        required: true,
        /*validator: {
            regEx: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
            error: 'Invalid email format.',
        },*/
    },
    subpart: {
        required: true,
    },
};
