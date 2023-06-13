import Home from "./components/home"
import Product from "./components/product"

import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/header";

const App = () => {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/product/:id" element={<Product/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
