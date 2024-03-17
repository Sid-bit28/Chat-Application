import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// this will load dynamically and not at one go to make it faster loading pages.
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Chat = lazy(() => import('./pages/Chat'));
const Groups = lazy(() => import('./pages/Groups'));

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/chat/:chatid" element={<Chat />} />
                <Route path="/Groups" element={<Groups />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
