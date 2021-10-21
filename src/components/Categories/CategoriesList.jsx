import { CategoryTile } from "../../components";
import { JS, HTML, CSS } from "../../svg";
import { useEffect } from "react";
import { getQuestions } from "../../apis/userService";
export const CategoriesList = () => {
  const categoriesList = [
    {
      label: "html",
      bgColor: "#4CAF50",
      image: (
        <div className="text-white dark:text-gray-700	">
          <HTML height="150px" width="150px" color="inherit" />
        </div>
      ),
    },
    {
      label: "css",
      bgColor: "#4CAF50",
      image: (
        <div className="text-white dark:text-gray-700	">
          <CSS height="150px" width="150px" color="inherit" />
        </div>
      ),
    },
    {
      label: "js",
      bgColor: "#4CAF50",
      image: (
        <div className="text-white dark:text-gray-700	">
          <JS height="150px" width="150px" color="inherit" />
        </div>
      ),
    },
  ];

  useEffect(() => {
    getQuestions().then(res => {});
  }, []);
  return (
    <div
      className="grid 
      grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-3  
      gap-4
      sm:gap-8
      ml-5
      sm:ml-10 md:ml-20"
    >
      {categoriesList.map((cat, index) => (
        // <div cl>
        <CategoryTile details={cat} key={cat} />
      ))}
    </div>
  );
};
