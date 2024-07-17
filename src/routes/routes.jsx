import {
    Route,
    createBrowserRouter,
    createRoutesFromElements
} from 'react-router-dom';

import DefaultLayout from '../layout/DefaultLayout';
import Home from '../pages/Home/index.jsx';
import Register from '../pages/Register/index.jsx'
import Login from '../pages/Login/index.jsx'

import ProtectedRoute from '../components/ProtectedRoute/protextedRoute.jsx'
//   import NotFound from '../pages/NotFound/index.jsx'

export const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<DefaultLayout />}>
            <Route path="/" element={
                <ProtectedRoute>
                    <Home />
                </ProtectedRoute>
            } />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
        </Route>
    )
);
