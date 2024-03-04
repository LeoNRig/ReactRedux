import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Counter from './Counter';


const initialStates = {count:40,title:'Danki Code'};

function reducer(state = initialStates, action) {
  switch (action.type) {
  case "INCREMENT":
  return { ...state, count: state.count + 1 };
  case "ALTERAR_TITULO":
    axios.get('https://my-json-server.typicode.com/typicode/demo/posts').then((response)=>{
      store.dispatch({type:'ALTERAR_TITULO_FINAL', title:response.data[0].title});
    })
  case "ALTERAR_TITULO":
    return{count:state.count,title:action.title};
  default:
  return state;
  }
  }

const store = createStore(reducer);

//store.dispatch({'type:'INCREMENT','count:':90});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Counter />
    </Provider>
  </React.StrictMode>
);

