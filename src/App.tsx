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
import Header from './pages/Header';
import Footer from './pages/Footer';
import { useState } from 'react';

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
  const [pageNum, setPageNum] = useState(1);

  const nextPage = () =>{
    if(pageNum != 42){
      setPageNum(pageNum+1)
    }
  }


  const prevPage = () =>{
    if(pageNum != 1){
      setPageNum(pageNum-1)
    }
  }

  return (
    <div className='mainDiv'>
      <Header></Header>
      <DataSet pageNumber={pageNum}/>
      <Footer nextPage={nextPage} prevPage={prevPage}></Footer>
    </div>
  );
}

export default App;
