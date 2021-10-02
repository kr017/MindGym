import { Button } from "../Common";

export const QuestionCard = props => {
  const { details, currentIndex, handleNextClick } = props;
  const handleOptionClick = option => {
    handleNextClick(option);
  };
  return (
    <div>
      <div>
        <div className="text-xl text-primary py-4">
          {currentIndex} {details?.question}
        </div>
        <div
          className="grid 
            grid-cols-1 
            sm:grid-cols-2 
            gap-4 "
        >
          {details?.options?.map(ele => (
            <div
              className="bg-secondary m-2 p-4 rounded-lg w-80 shadow"
              //   {
              // details?.selectedOption
              //   ?

              //   : "bg-gray-400 m-2 p-4 rounded-lg w-80"
              //   }
              onClick={() => handleOptionClick(ele)}
            >
              {ele}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
