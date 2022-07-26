
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './containers/navbar/Navbar';
import ProductScreen from './containers/products/ProductScreen';
import CartScreen from './containers/cart/CartScreen'

function App() {
  return (
    <Router>  

<div className="App">
     <Navbar/>
    <Switch>
    <Route exact path='/products'>
     <ProductScreen/>
     </Route>
     <Route exact path='/cart'>
     <CartScreen/>
     </Route>

    </Switch>
    

    
 
     
    </div>
    </Router>
 
  );
}

export default App;
