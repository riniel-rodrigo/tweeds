// ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebaseConfig.js';

const ProtectedRoute = ({ children }) => {
    const [user, loading] = useAuthState(getAuth(app));

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (!user) {
        return <Navigate to="/Login" />;
    }

    return children;
};

export default ProtectedRoute;