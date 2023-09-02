import './App.css'
import Auth from './pages/Auth'
import CreateForm from './pages/CreateForm';
import EditForm from './pages/EditFom';
import Form from './pages/Form';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes, Outlet, Navigate } from 'react-router-dom';

function App() {
  const PrivateRoutes = () => {
    const isAuth = localStorage.getItem("isAuthenticated") === null || localStorage.getItem("isAuthenticated") !== "true" ? false : true;
    return <>{isAuth ? <Outlet /> : <Navigate to='/login' />}</>
  }
  
  const RestrictedRoutes = () => {
    const isAuth = localStorage.getItem("isAuthenticated") === null || localStorage.getItem("isAuthenticated") !== "true" ? false : true;
    return <>{!isAuth ? <Outlet /> : <Navigate to='/' />}</>
  }
  
  return (
      <BrowserRouter>
      <Routes>
        <Route element={<RestrictedRoutes />}>
          <Route path='/login' element={<Auth />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path='/' element={<Home />} />
          <Route path='/createform' element={<CreateForm />} />
          <Route path='/edit/:id' element={<EditForm />} />
          <Route path='/form/:id' element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
