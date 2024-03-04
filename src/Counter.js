import React from 'react';
import {createStore} from 'redux';
import {connect} from 'react-redux';
import axios from 'axios';
import './App.css';
/*
  const reducer = function(state,action){
      if(action.type === 'INC'){
          return state + action.payload;
      }else if(action.type === 'DESC'){
          return state - action.payload;
      }else if(action.type === 'INFO'){
        console.log(action.titulo)
      }
      return state;
  }

  const store = createStore(reducer,0);

  store.subscribe(function(){
    console.log("state alterado", store.getState());
  })

  store.dispatch({type:'INC',payload:1});

  axios.get("https://my-json-server.typicode.com/typicode/demo/posts").then((response)=>{
      console.log(response);
      store.dispatch({type:'INFO',titulo:response.data[0].title});
  });
*/
 class Counter extends React.Component{

  increment = ()=>{
    this.props.dispatch({'type':'INCREMENT'});
  }

  alterarTitulo = ()=>{
    this.props.dispatch({'type':'ALTERAR_TITULO'})
  }

    render(){
      return(
        <div>
          <button onClick={this.alterarTitulo}>Alterar titulo</button>
          <button onClick={this.increment}>Mais!</button>
          <h2>{this.props.count}</h2>
          <h3>{this.props.title}</h3>  
        </div>
      )
    }

 }
const mapStateToProps = state => ({count:state.count,title:state.title});
export default connect(mapStateToProps)(Counter);
