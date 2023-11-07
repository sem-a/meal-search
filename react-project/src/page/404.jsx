import Header from "../components/Header";

function Page404() {
    return (
        <div className="page404">
            <Header />
            <main className="main">
                <div className="container">
                    <div className="page404_center">
                        <div className="page404_title">
                            <h2>404</h2>
                        </div>
                        <div className="page404_subtitle">
                            <h3>Страница не найдена</h3>
                        </div>
                        <div className="page404_text">
                            <p>Проверьте корректность URL адреса или подключение к интернету</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Page404;