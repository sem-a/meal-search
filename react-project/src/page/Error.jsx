import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";

function Error() {

    return(
        <div className="page_error">
            <Header />
            <main className="main">
                <div className="container">
                    <div className="page404_center">
                        <div className="error_title">
                            <img src={require('../img/error.png')} alt="" />
                            <h2>
                                Упс... Что-то пошло не так
                            </h2>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Error;