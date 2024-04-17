import './App.css';
import{
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from
}from "@apollo/client"
import {onError} from "@apollo/client/link/error"
import DataSet from './pages/DataSet';

// const errorLink = onError(({}) => {
//   if(graphqlErrors){
//     graphqlErrors.map((({}) => ))
//   }
// });

// const link = from([
//   errorLink,
//   new HttpLink({uri: ""}),
// ]);



function App() {
  return (
    <div className='mainDiv'>
      <DataSet pageNumber={42}/>
    </div>
  );
}

export default App;
