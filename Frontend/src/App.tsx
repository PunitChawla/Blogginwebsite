import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Signup } from './pages.tsx/Signup'
import { Signin } from './pages.tsx/SignIn'
import { Blogs } from './pages.tsx/blogs'
import { Publish } from './pages.tsx/Publish'
import { Blog } from './pages.tsx/blog'
import { Update } from './pages.tsx/Update'
import { Home } from './pages.tsx/Home'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='/signup'  element = {<Signup></Signup>}></Route>
      <Route path='/signin' element = {<Signin/>}></Route>
      <Route path='/blog' element=  {< Blogs />}></Route>
      <Route path='/publish' element=  {<Publish/>}></Route>
      <Route path='/blog/:id' element=  {< Blog />}></Route>
      <Route path='/update/:id' element = {<Update></Update>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
