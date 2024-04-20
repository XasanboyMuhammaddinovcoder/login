import { Route, Routes, useNavigate } from "react-router-dom"
import ErrorPage from "./pages/ErrorPage"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext();
function App() {
  const navigate = useNavigate();
  const token = useSelector(state => state.token.value);


  const [theme , setTheme] = useState('light')

  useEffect(() => {
    if(!token && location.pathname != '/register') {
      navigate('/login')
    }
  },[navigate, token]);
  useEffect(() => {
    if (localStorage.getItem('theme')) {
      setTheme(localStorage.getItem('theme'))
    }
  } , [])

  {
    theme == 'light' ? document.body.style.background = '#fff' : document.body.style.background = '#000'
  }

  function ProtectedRoute ({
    children,
    isAuthentication,
    redirectTo = '/login',
  }) {
    if (!isAuthentication) {
      navigate(redirectTo)
    }
    return children;
  }
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>

        <Route
          path="/"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Home></Home>
            </ProtectedRoute>
          }
        ></Route>

        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </ThemeContext.Provider>
  )
}

export default App
