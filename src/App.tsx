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
import Header from './components/Header';
import Footer from './components/Footer';
import {useParams} from "react-router-dom"
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
  // const [pageNum, setPageNum] = useState(1);
    const params = useParams();
  // const nextPage = () =>{
  //   if(pageNum != 42){
  //     setPageNum(pageNum+1)
  //   }
  // }
  let pageNum:Number;
  
  if( params.id  === undefined){
    pageNum = Number(1);
  }else{
    pageNum = Number(params.id);
  }

  // const prevPage = () =>{
  //   if(pageNum != 1){
  //     setPageNum(pageNum-1)
  //   }
  // }


  return (
    <div className='mainDiv'>
      <Header></Header>
      <DataSet pageNumber={pageNum}/>
      <Footer id={pageNum} ></Footer>
    </div>
  );
}

export default App;
