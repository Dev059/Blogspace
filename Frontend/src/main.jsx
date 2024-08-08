import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { useState } from 'react'

export const Context=createContext({
  isAuthenticated:false
})

const AppWrapper=()=>{
  const [isAuthenticated,setIsAuthenticated]=useState(false)
  const [user,setUser]=useState({})
  const [blogs,setBlogs]=useState([])
  const [mode,setMode]=useState("dark")

  return (
    <Context.Provider value={{isAuthenticated,setIsAuthenticated,user,setUser,blogs,setBlogs,mode,setMode}}>
      <App/>
    </Context.Provider>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper/>
  </React.StrictMode>,
)
