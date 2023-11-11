import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams, useNavigate } from "react-router-dom";
import { fetchOne } from "../js/db/query";

function PageRecipe() {

    const { id } = useParams();

    const [recipe, setRecipe] = useState({ steps: { steps: [''] }, ingr: { ingr: [''] } });
    const navigate = useNavigate();

    const getRecipe = async () => {
        try {
            const recipeTemp = await fetchOne('recipe', id);
            console.log(recipeTemp)
            if(recipeTemp === undefined) {
                navigate('/404');
            } else {
                setRecipe(recipeTemp);
            }
        } catch(e) {
            navigate('/error');
        }
    }

    useEffect(() => {
        try {
            getRecipe();
        } catch (e) {
            navigate('/error');
        }
    }, []);

    return (
        <div className="pageRecipe">
            <Header />
            <main className="main">
                <div className="wrapper">
                    <div className="recipe_page_content">
                        <div className="recipe_page_title">
                            <h2>{recipe.name}</h2>
                        </div>
                        <div className="recipe_page_desc">
                            <img src={require('../img/salat.jpg')} alt="salat" />
                            <p>{recipe.description}</p>
                        </div>
                        <div className="recipe_page_ingr">
                            <div className="page_ingr_title">
                                <h3>Ингридиенты:</h3>
                            </div>
                            {recipe.ingr.ingr.map((el) => {
                                return (
                                    <div key={el} className="page_ingr_item">
                                        <p>{el}</p>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="recipe_page_steps">
                            <div className="steps_title">
                                <h3>Пошаговый рецепт</h3>
                            </div>
                            <div className="steps_items">
                                {
                                    recipe.steps.steps.map((el, index) => {
                                        return (
                                            <div key={index + 1} className="steps_item">
                                                <div className="steps_number">
                                                    <p>{index + 1}</p>
                                                </div>
                                                <p>{el}</p>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default PageRecipe;