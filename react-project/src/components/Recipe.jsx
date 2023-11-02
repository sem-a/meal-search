import { useEffect, useState } from "react";
import { ReactComponent as Favourite } from "./../img/favourite.svg";
import { Link } from "react-router-dom";

function Recipe(props) {

    const ingr = JSON.parse(props.recipe.ingr).ingr;


    return (
        <div className="recipe_card">
            <div className="recipe_card_container">
                <div className="recipe_card_header">
                    <div className="recipe_title">
                        <h2>{props.recipe.name}</h2>
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
                        {props.recipe.description}
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
                    <Link to="/">Открыть</Link>
                </div>
            </div>
        </div>
    );
}

export default Recipe;
