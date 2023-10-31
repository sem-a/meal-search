import "./css/style.css";
import "./css/null.css";
import Header from "./components/Header";
import Form from "./components/Form";
import RecipeCards from "./components/RecipeCards";

function App() {

    return (
        <div className="App">
            <Header />
            <main className="main">
                <div className="container">
                    <Form />
                    <RecipeCards />
                </div>
                <div className="bg_items">
                    <img
                        className="broccoli vegetable"
                        src={require("./img/broccoli.png")}
                        alt="broccoli"
                    />
                    <img
                        className="champignon vegetable"
                        src={require("./img/champignon.png")}
                        alt="champignon"
                    />
                    <img
                        className="potatoes vegetable"
                        src={require("./img/potatoes.png")}
                        alt="potatoes"
                    />
                    <img
                        className="redpepper vegetable"
                        src={require("./img/redpepper.png")}
                        alt="redpepper"
                    />
                    <img
                        className="tomatoes vegetable"
                        src={require("./img/tomatoes.png")}
                        alt="tomatoes"
                    />
                </div>
            </main>
        </div>
    );
}

export default App;
