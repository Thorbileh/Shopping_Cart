import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer } from './reducers/reducer';
import { listCartItemsReducer } from './reducers/cartReducers';


const Reducer = combineReducers({

    productsList : productListReducer,
    cartItemsList: listCartItemsReducer
});

const initializeState = {};

const middleWare = [thunk];

const store = createStore(
    Reducer,
    initializeState,
    composeWithDevTools(applyMiddleware(...middleWare))
)
export default store;