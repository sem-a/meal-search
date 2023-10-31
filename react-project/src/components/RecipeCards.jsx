import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import { URL } from "../js/const";

function RecipeCards() {
    const [recipes, setRecipes] = useState([]);

    const fetchAll = async(table) => {
        const response = await fetch(`${URL + table}/all`);
        const data = await response.json();

        return data.values;
    }

    const getRecipes = async() => {
        const recipesTemp = await fetchAll('recipe');
        setRecipes([...recipesTemp]);
    }

    const createResultPhrase = (lenght) => {
        let titles = ["рецепт", "рецепта", "рецептов"];
        let cases = [2, 0, 1, 1, 1, 2];
        let find = ["найдено", "найден"];
        if (lenght % 10 === 1) {
            return `${find[1]} ${lenght} ${
                titles[
                    lenght % 100 > 4 && lenght % 100 < 20
                        ? 2
                        : cases[Math.min(lenght % 10, 5)]
                ]
            }`;
        }
        if (lenght === 0) {
            return "ничего не найдено";
        } else {
            return `${find[0]} ${lenght} ${
                titles[
                    lenght % 100 > 4 && lenght % 100 < 20
                        ? 2
                        : cases[Math.min(lenght % 10, 5)]
                ]
            }`;
        }
    };

    const resultPhrase = createResultPhrase(recipes.length); 

    useEffect(() => {
        getRecipes(); 
    }, [])

    return (
        <div className="recipe_cards">
            <h2 className="recipe_cards_title">
                Результаты поиска: <span>{resultPhrase}</span>
            </h2>
            {
                recipes.map( (el) => {
                    return <Recipe recipe={el} key={el.id} />
                })
            }
        </div>
    );
}

export default RecipeCards;
