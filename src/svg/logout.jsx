export const Logout = props => {
  const { height, width } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      version="1"
      viewBox="0 0 256 256"
      fill="currentColor"
    >
      <path
        d="M0 1280V0h1110v490H490v1580h620v490H0V1280z"
        transform="matrix(.1 0 0 -.1 0 256)"
      ></path>
      <path
        d="M1580 1905l-175-175 100-100 100-100H690v-500h915l-100-100-100-100 175-175 175-175 400 400 400 400-400 400-400 400-175-175z"
        transform="matrix(.1 0 0 -.1 0 256)"
      ></path>
    </svg>
  );
};
