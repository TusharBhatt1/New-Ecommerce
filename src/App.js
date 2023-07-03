import { BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Intro from "./Pages/Intro";



function App() {
  return (
  
   <BrowserRouter>
   <Routes>
       <Route index element={<Intro/>}/>
       <Route path="/home"  element={<Home/>}/>
       <Route path="*"  element={<Home/>}/>
       <Route path="/details/:id"  element={<ProductDetails/>}/>
       <Route path="/cart"  element={<Cart/>}/>
       
   </Routes>
   </BrowserRouter>
   )
}

export default App;
