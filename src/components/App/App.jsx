import "./App.css";
import Header from "../../components/Header/Header";

function App(){
    return (
        <div className="page">
        <div className="page__content">
            <Header/>
            <Main/>
            <Footer/>
        </div>
        </div>
    )
}

export default App;