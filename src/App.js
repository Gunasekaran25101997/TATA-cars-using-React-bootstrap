import 'bootstrap/dist/css/bootstrap.min.css';
// import "../node_modules/bootstrap/dist/css";
import './App.css';
import AppBar from './Components/AppBar';
import Banner from './Components/Banner';
import Brands from './Components/Brands';
import Comments from './Components/Comments';
import Content from './Components/Content';


function App() {
  return (
    <>
    <AppBar />
    <Banner />
    <Brands />
    <Content />
    <Comments />
    <div className="text-center my-3 text-primary small">Copyright 2023-2024</div>

    </>
  );
}

export default App;
