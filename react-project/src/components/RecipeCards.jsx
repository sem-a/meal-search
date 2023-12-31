import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAll } from "../js/db/query";
import { addToRecipes } from "../store/recipes/recipes.slice";

function RecipeCards() {

    const dispatch = useDispatch();
    const recipesStore = useSelector( (state) => state.recipes);
    const navigate = useNavigate();

    const [recipes, setRecipes] = useState([]);

    const getRecipes = async () => {
        try {
            const recipesTemp = await fetchAll('recipe');
            console.log(recipesTemp);
            if(recipesTemp === undefined) {
                navigate('/error');
            } else {
                
                setRecipes([...recipesTemp]);
            }
        } catch(e) {
            navigate('/error');
        }
    }

    const createResultPhrase = (lenght) => {
        let titles = ["рецепт", "рецепта", "рецептов"];
        let cases = [2, 0, 1, 1, 1, 2];
        let find = ["найдено", "найден"];
        if (lenght % 10 === 1) {
            return `${find[1]} ${lenght} ${titles[
                lenght % 100 > 4 && lenght % 100 < 20
                    ? 2
                    : cases[Math.min(lenght % 10, 5)]
                ]
                }`;
        }
        if (lenght === 0) {
            return "ничего не найдено";
        } else {
            return `${find[0]} ${lenght} ${titles[
                lenght % 100 > 4 && lenght % 100 < 20
                    ? 2
                    : cases[Math.min(lenght % 10, 5)]
                ]
                }`;
        }
    };

    const resultPhrase = createResultPhrase(recipes.length);

    useEffect(() => {
        try {
            getRecipes();
        } catch (e) {
            navigate('/error');
        }
    }, [])

    return (
        <div className="recipe_cards">
            <h2 className="recipe_cards_title">
                Результаты поиска: <span>{resultPhrase}</span>
            </h2>
            {
                recipes.map((el) => {
                    return <Recipe recipe={el} key={el.id} />
                })
            }
        </div>
    );
}

export default RecipeCards;
