import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item/RecipeItem";

const Favorites = () => {
  const { favoritesList, handleAddToFavorite } = useContext(GlobalContext);

  return (
    <div>
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => (
          <>
            <RecipeItem item={item} />
            <button
              onClick={() => handleAddToFavorite(item)}
              className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-cyan-800 text-white"
            >
              Remove Favorite
            </button>
          </>
        ))
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing is added in favorites.
          </p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
