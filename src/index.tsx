import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client"
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import CharacterDataPage from './pages/CharacterDataPage';
import Footer from './pages/Footer';
import Header from './pages/Header';
const id = 3;

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache()
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/character/:id",
    element: <CharacterDataPage/>
  }

])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      {/* <Header></Header> */}
      {/* <App/> */}
      <RouterProvider router={router}/>
      {/* <Footer></Footer> */}
    </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();