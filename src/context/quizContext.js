import { createContext, useContext, useReducer } from "react";

const quizContext = createContext();

const quizReducer = (state, action) => {
  switch (action.type) {
    case "SET_QUESTIONS":
      return {
        questions: action.payload,
      };

    default:
      return;
  }
};

const initalState = {
  questions: [],
};

export const QuizProvider = ({ children }) => {
  const [quizState, quizDispatch] = useReducer(quizReducer, initalState);

  return (
    <quizContext.Provider value={{ quizState, quizDispatch }}>
      {children}
    </quizContext.Provider>
  );
};

export const useQuiz = () => {
  return useContext(quizContext);
};
