import UseLocalStorage from './UseLocalStorage';
import { useEffect } from 'react';

const UseDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = UseLocalStorage(initialValue);

    useEffect(() => {
        if (darkMode) {
            document.querySelector('body').classList.add('dark-mode');
        } else {
            document.querySelector('body').classList.remove('dark-mode');
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];
};

export default UseDarkMode;