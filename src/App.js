import './App.css';
import Navbar from './component/navbar';
import Home from './component/Home';
import {Switch, Route} from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';
import About from './component/About';
import Contact from './component/Contact';
import Checkout from './component/Checkout';
import Success from './component/Success';
import ReactGa from 'react-ga4';

ReactGa.initialize('G-7W50T7N0Q9')


function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/products" component={Products}/>
      <Route exact path="/products/:id" component={Product}/>
      <Route exact path="/cart" component={Cart}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/checkout" component={Checkout}/>
      <Route exact path="/success" component={Success}/>
      </Switch>
    </>
  );
}

export default App;
