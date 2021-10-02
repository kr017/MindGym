export const DialogBox = props => {
  const {
    message,
    secondaryMessage,
    primaryActionLabel,
    primaryActionHandler,
    secondaryActionLabel,
    secondaryActionHandler,
  } = props;
  return (
    <div
      class="absolute inset-1/3 flex flex-col xs:p-2 p-8 text-primary 
    bg-base shadow-md hover:shodow-lg rounded-2xl "
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-16 h-16 rounded-2xl p-3 border border-gray-200 text-primary bg-base"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <div class="flex flex-col ml-3">
            <div class="font-medium leading-none text-gray-300">{message}</div>
            <p class="text-sm text-gray-500 leading-none mt-1">
              {secondaryMessage}
            </p>
          </div>
        </div>
      </div>
      <div className="text-center xs:m-2 m-8 ">
        <button
          class="flex-no-shrink bg-red-500 px-2 sm:px-5 ml-2 sm:ml-4 py-1 sm:py-2 text-sm shadow-sm hover:shadow-lg
          font-medium tracking-wider border-2 border-red-500 text-primary rounded-full"
          onClick={secondaryActionHandler}
        >
          {secondaryActionLabel}
        </button>
        <button
          class="flex-no-shrink bg-red-500 px-2 sm:px-5 ml-2 sm:ml-4 py-1 sm:py-2 text-sm shadow-sm hover:shadow-lg
          font-medium tracking-wider border-2 border-red-500 text-secondary rounded-full"
          onClick={primaryActionHandler}
        >
          {primaryActionLabel}
        </button>
      </div>
    </div>
  );
};
