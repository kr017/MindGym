import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getScoreboard } from "../../apis/userService";
import { useState } from "react/cjs/react.development";

export const ScoreBoard = () => {
  const path = useLocation();
  const [data, setData] = useState([]);
  useEffect(() => {
    getScoreboard()
      .then(res => {
        setData(res.data.data);
      })
      .catch(err => {});
  }, [path.pathname]);

  return (
    <div className="my-5 w-full ">
      {data.map(details => (
        <div className="m-10 my-5 bg-secondary px-5 shadow">
          <div className="text-3xl uppercase">{details.label}</div>
          {details?.data?.length > 0 ? (
            <div className="py-2">
              {details?.data?.map(d => (
                <div className="text-xl capitalize	">
                  {d?.userId?.name}
                  <span className="ml-4">{d?.score}</span>
                </div>
              ))}
            </div>
          ) : (
            <div>No Participants</div>
          )}
        </div>
      ))}
    </div>
  );
};
