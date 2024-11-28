import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store.config';

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const location = useLocation();
    const isLogged = useSelector((state: RootState) => state.authReducer.isLogged);

    if (!isLogged) {
        return <Navigate to='/login' state={{ from: location }} replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;