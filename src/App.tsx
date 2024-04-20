import './App.css';
import AllCharactersPage from './pages/AllCharactersPage';
import Header from './components/Header';
import Footer from './components/Footer';
import {useParams} from "react-router-dom";
import Container from "@mui/material/Container"

function App() {
  const params = useParams();
  let pageNum:Number;
  
  if( params.id  === undefined){
    pageNum = Number(1);
  }else{
    pageNum = Number(params.id);
  }


  return (
    <Container>
      <Header></Header>

        <AllCharactersPage pageNumber={pageNum}/>  
      <Footer id={pageNum} ></Footer>
    </Container>
  );
}

export default App;