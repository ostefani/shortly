import { useState, useEffect, useCallback } from 'react';

export default (stateSchema, callback) => {
    const [state, setState] = useState(stateSchema);
}
