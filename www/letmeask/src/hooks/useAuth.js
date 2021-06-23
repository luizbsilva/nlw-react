import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export function useAuth() {
    const value = useContex(AuthContext);

    return value
}