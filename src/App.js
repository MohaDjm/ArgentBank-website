import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Homepage from './pages/Homepage/homepage';
import Login from './pages/Login/login';
import Profile from './pages/Profile/profile';
// import NotFound from './pages/notFound/notFound';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ProtectedRoutes from './components/ProtectedRoutes/protectedRoutes';


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* public routes */}
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          {/* protected routes */}
          <Route element={<ProtectedRoutes />}></Route>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
