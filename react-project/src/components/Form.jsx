import { useEffect, useState } from "react";
import { URL } from "../js/const";

function Form() {
    const [kitchens, setKitchens] = useState([{ id: 0, name: "Все" }]);
    const [types, setTypes] = useState([{ id: 0, name: "Все" }]);

    const fetchData = async(table) => {
        const response = await fetch(URL + `${table}/all`);
        const data = await response.json();

        return data.values;
    }

    const getSelect = async() => {
        const kitchens = await fetchData('kitchen');
        const types = await fetchData('type');
        setKitchens([...kitchens, ...kitchens.values]);
        setTypes([...types, ...types.values]);
    }

    useEffect( () => {
        getSelect();
    }, []);

    return (
        <div className="form_container">
            <form action="#" className="form_search">
                <div className="form_container">
                    <div className="form_item">
                        <label className="form_label" htmlFor="ingr">
                            Желаемые ингредиенты:
                        </label>
                        <input
                            className="form_input"
                            type="text"
                            name="ingr"
                            id="ingr"
                        />
                    </div>
                    <div className="form_items">
                        <div className="form_item m-right">
                            <label className="form_label" htmlFor="kitchens">
                                Кухня:
                            </label>
                            <select
                                className="form_select"
                                name='kitchens'
                                id='kitchens'
                            >
                                {kitchens.map((el) => {
                                    return (
                                        <option
                                            key={el.id}
                                            className="form_option"
                                            value={el.id}
                                        >
                                            {el.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="form_item m-left">
                            <label className="form_label" htmlFor="types">
                                Тип блюда:
                            </label>
                            <select
                                className="form_select"
                                name='types'
                                id='types'
                            >
                                {types.map((el) => {
                                    return (
                                        <option
                                            key={el.id}
                                            className="form_option"
                                            value={el.id}
                                        >
                                            {el.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="form_item">
                        <button className="form_button">Найти рецепты</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form;
