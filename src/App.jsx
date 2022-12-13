import './globals.scss'
import {createBrowserRouter, Navigate, Outlet, RouterProvider} from 'react-router-dom'
import { Footer, Navbar } from './components'
import { Brands, Cart, Details, Home, LoginSignup, Product, Wishlist } from './pages'
import { useSelector } from 'react-redux'

function App() {
  const {currentUser} = useSelector(state=>state.user)

  const Layout = () => {
    return (
      <>
        <nav>
          <Navbar />
        </nav>
        <main>
          <Outlet/>
        </main>
        <footer>
          <Footer />
        </footer>
      </>
    )
  }

  const ProtectedRoute = ({children})=>{
    if(!currentUser){
      return <Navigate to="/create-account" />
    }
    return children;
  }

  const router = createBrowserRouter([
    { //ProtectedRoute
      element: <ProtectedRoute><Layout/></ProtectedRoute>,
      children: [
        {path:"/cart", element: <Cart/>},
        {path:"/wishlist", element: <Wishlist/>},
      ]
    },
    { //NonProtectedRoute
      element: <Layout/>,
      children: [
        {path:"/", element: <Home/>},
        {path:"/product/:slug", element: <Product/>},
        {path:"/details/:id", element: <Details/>},
        {path:"/brands", element: <Brands/>},
        {path:"/create-account", element: <LoginSignup/>},
      ]
    },
  ])


  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
