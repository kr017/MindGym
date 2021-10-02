import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { QuestionCard } from "../../components";
import { addScore, getQuestions } from "../../apis/userService";
import { useQuiz } from "../../context";
import { DialogBox } from "../Common";

export const Quiz = () => {
  const history = useHistory();
  const { quizState, quizDispatch } = useQuiz();
  const selectedCat = useParams();

  const [currentQuestion, setCurrentQuestion] = useState({});

  const [currentIndex, setCurrentIndex] = useState(0);
  //   const [isPrev, setIsPrev] = useState(false);
  const [isNext, setIsNext] = useState(true);
  const [score, setScore] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  useEffect(() => {
    getQuestions(selectedCat.cat).then(res => {
      // setQ(res.data.data)

      quizDispatch({
        type: "SET_QUESTIONS",
        payload: res.data.data,
      });
      setCurrentQuestion(res.data.data[0]);
    });
  }, []);

  const handleNextClick = ans => {
    if (currentIndex === quizState?.questions?.length - 1) {
      setShowWarning(true);
    } else {
      let index = quizState?.questions?.findIndex(
        item => item._id === currentQuestion._id
      );
      if (ans) {
        if (currentQuestion.answer == ans) {
          setScore(prevScore => prevScore + 4);
        } else {
          setScore(prevScore => prevScore - 1);
        }
      }

      if (index != quizState?.questions?.length - 1) {
        setIsNext(true);
      } else {
        setIsNext(false);
      }
      setCurrentIndex(prevIndex => prevIndex + 1);
      setCurrentQuestion(quizState.questions[index + 1]);
    }
  };
  const handlePrevClick = () => {
    let index = quizState?.questions?.findIndex(
      item => item._id === currentQuestion._id
    );

    setCurrentIndex(prevIndex => prevIndex - 1);
    setCurrentQuestion(quizState.questions[index - 1]);
  };

  const handleFinishClick = () => {
    setShowWarning(true);
  };

  const submitQuiz = () => {
    let requestParams = {
      category: "HTML",
      score: score,
    };
    addScore(requestParams)
      .then(res => {
        history.push("/score");
      })
      .catch(err => {});
  };

  return (
    <div className="m-4 ">
      <div className="text-3xl text-center">Score {score}</div>
      <div className="flex justify-between mx-4">
        {currentIndex > 0 ? (
          <span
            className="p-4 bg-gray-100 dark:bg-gray-600 cursor-pointer rounded-md	"
            onClick={handlePrevClick}
          >
            BACK
          </span>
        ) : (
          <span className="p-4 bg-gray-100 dark:bg-gray-600  cursor-not-allowed rounded-md	">
            BACK
          </span>
        )}

        {currentIndex === quizState?.questions?.length - 1 ? (
          <span
            className="p-4 bg-green-600 cursor-pointer rounded-md	"
            onClick={() => {
              handleFinishClick();
            }}
          >
            FINISH
          </span>
        ) : (
          <span
            className="p-4 bg-gray-100 dark:bg-gray-600 cursor-pointer rounded-md	"
            onClick={() => {
              handleNextClick();
            }}
          >
            NEXT
          </span>
        )}
      </div>
      <QuestionCard
        currentIndex={currentIndex + 1}
        details={currentQuestion}
        handleNextClick={handleNextClick}
        handlePrevClick={handlePrevClick}
      />
      {showWarning ? (
        <DialogBox
          message={"Are you sure? "}
          primaryActionLabel="Yes"
          primaryActionHandler={submitQuiz}
          secondaryActionLabel="No"
          secondaryActionHandler={() => setShowWarning(false)}
        />
      ) : null}
    </div>
  );
};
