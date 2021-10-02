export const Home = props => {
  const { height, width } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      version="1"
      viewBox="0 0 512 512"
      fill="currentColor"
    >
      <path
        d="M2463 4974c-32-12-309-259-1226-1094C-76 2684 5 2765 5 2635c1-108 57-194 155-239 40-18 70-21 258-24l212-4V1306c0-1184-5-1104 69-1153l34-23h1354l34 23c72 48 69 17 69 745v652h740V898c0-728-3-697 69-745l34-23h1354l34 23c74 49 69-31 69 1154v1061l213 4c188 3 217 6 257 24 99 45 154 131 155 239 0 117-13 135-281 378l-234 212v670c0 747 3 714-69 762l-34 23h-566c-543 0-567-1-598-20-48-29-66-64-72-140l-6-67-278 253c-300 272-319 285-421 283-28 0-70-7-93-15zm479-645c205-187 389-348 408-356 71-31 168 5 196 73 10 23 14 78 14 184v150h740v-626c0-537 2-630 15-658 8-17 109-117 224-221l209-190-222-5c-127-3-232-10-246-17-32-14-66-51-79-86-8-19-11-362-11-1088V430h-960v653c0 720 2 693-63 741-28 21-38 21-607 21s-579 0-607-21c-65-48-63-21-63-741V430H930v1059c0 726-3 1069-11 1088-13 35-47 72-79 86-14 7-119 14-246 17l-221 5 1089 993c599 545 1093 992 1098 992s177-153 382-341z"
        transform="matrix(.1 0 0 -.1 0 512)"
      ></path>
    </svg>
  );
};