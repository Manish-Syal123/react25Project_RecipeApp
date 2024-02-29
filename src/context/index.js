import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);

  const naviagte = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // setLoading(true);
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchText}`
      );

      const data = await res.json();

      if (data.data.recipes) {
        setRecipeList(data.data.recipes);
        setLoading(false);
        setSearchText("");

        naviagte("/");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSearchText("");
    }
  };

  console.log(recipeList);
  return (
    <GlobalContext.Provider
      value={{ searchText, setSearchText, handleSubmit, recipeList, loading }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
