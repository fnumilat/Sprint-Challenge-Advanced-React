import { useState} from 'react';
import { json } from 'body-parser';

const UseLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem((key));
        return item ? JSON.parse(item): initialValue;
    })

    const setValue = (value) => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value))
    };

    return [storedValue, setValue]
}

export default UseLocalStorage;