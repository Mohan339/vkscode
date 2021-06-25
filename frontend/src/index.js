import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import {ApolloClient,
        ApolloProvider,
        useQuery,
        gql, 
        InMemoryCache
            } from "@apollo/client"
import Login from './pages/Login';

const client = new ApolloClient({
    uri:"https://localhost:7777/graphql",
    cache:new InMemoryCache()
})

const auth = gql`
mutation{
  login{
     email,
     password 
  }
}

`



function Auth({xxx})  {
    const [handler,  setHandler] = useState(null)
    
  const {error, loading, data} =  useQuery(auth);
  
      if (error) return `Error message ${error}`;
      if (loading) return "Loading >>>";
      return(<div>
        <form className="master_login">
        <h1 className="name">Login</h1>
        <div className = "form_control">
        <label >Email</label>
        <input type="name" placeholder ="Enter the email" value={data.auth.email}/>
        </div>

        <div className= "form_control">
        <label>Password</label>
        <input type= "password" placeholder= "Enter the password" value = {data.auth.password}/>
        </div>

        <div className = "button">
        <button  className ="signup" type= "button">sign-up</button>
        <button  className ="submit" type="submit">submit</button>
        </div>
        

      </form>
      </div>
      );
  }
  
  function Ppp(){
  const [emps, setEmp]= useState(null);
  
  function onEmpSelected({target}){
    setEmp(target.value);
  }
}

ReactDOM.render(
  <ApolloProvider>
      <Auth />
      <App /> , document.getElementById('root')
  </ApolloProvider>
    
)
