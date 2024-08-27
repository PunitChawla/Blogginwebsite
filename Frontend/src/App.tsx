import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Signup } from './pages.tsx/Signup'
import { Signin } from './pages.tsx/SignIn'
import { Blogs } from './pages.tsx/blogs'
import { Publish } from './pages.tsx/Publish'
import { Blog } from './pages.tsx/blog'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signup'  element = {<Signup></Signup>}></Route>
      <Route path='/signin' element = {<Signin/>}></Route>
      <Route path='/blog' element=  {< Blogs />}></Route>
      <Route path='/publish' element=  {<Publish/>}></Route>
      <Route path='/blog/:id' element=  {< Blog />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
