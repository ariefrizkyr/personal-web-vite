import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import PageTitle from './components/PageTitle/PageTitle'
import Main from './layouts/Main'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route index element={<>
        <PageTitle title="Home" />
        <Home />
      </>} />
      <Route path="/about" element={<>
        <PageTitle title="About" />
        <About />
      </>} />
    </Route>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;