import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import NoRoute from './NoRoute';

function RouterApp() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/users" element={<Home />} />
            <Route path="*" element={<NoRoute />} />
        </Routes>
    );
}

export default RouterApp;