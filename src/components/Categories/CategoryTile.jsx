import { useHistory } from "react-router-dom";
// import { useState } from "react";

export const CategoryTile = props => {
  const history = useHistory();
  // const [loading, setLoading] = useState(false);
  const { label, image, bgColor } = props.details;
  return (
    <div
      className="h-60 w-60  mt-10 cursor-pointer"
      onClick={() => {
        history.push(`/quiz/${label}`);
      }}
    >
      <div
        className="rounded-2xl pt-4 mr-10"
        style={{ backgroundColor: bgColor }}
      >
        <div className="px-5 pb-4">
          <div
            className="transform-gpu hover:scale-110 
          transition duration-100 ease-in-out"
          >
            {image}
          </div>{" "}
        </div>
        <div className="rounded-b-2xl pt-4 pb-4 bg-gray-200 text-center	text-lg	font-bold		">
          <span className="p-4">{label}</span>
        </div>
      </div>
    </div>
  );
};
