import { useEffect, useState } from "react";
import { ReactComponent as Favourite } from "./../img/favourite.svg";
import { Link, useNavigate } from "react-router-dom";

function Recipe({recipe}) {

    const [ingr, setIngr] = useState([]);
    const navigate = useNavigate();

    useEffect( () => {
        try {
            setIngr(recipe.ingr.ingr);
        } catch(e) {
            navigate('/error')
        }
    }, []);

    return (
        <div className="recipe_card">
            <div className="recipe_card_container">
                <div className="recipe_card_header">
                    <div className="recipe_title">
                        <h2>{recipe.name}</h2>
                    </div>
                    <div className="recipe_card_fav">
                        <Favourite className="fav_icon" />
                    </div>
                </div>
                <div className="recipe_card_content">
                    <p className="recipe_card_desc">
                        <img
                            src={
                                require('../img/salat.jpg')
                            }
                        />
                        {recipe.description}
                    </p>
                </div>
                <div className="recipe_card_ingr">
                    <div className="ingr_title">
                        <h3>Ингридиенты:</h3>
                    </div>
                    {ingr.map((el) => {
                        return (
                            <div key={el} className="ingr_item">
                                <p>{el}</p>
                            </div>
                        );
                    })}
                </div>
                <div className="recipe_card_btn">
                    <Link to={`recipe/${recipe.id}`}>Открыть</Link>
                </div>
            </div>
        </div>
    );
}

export default Recipe;
