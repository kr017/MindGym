import { useFormik, FormikProvider, ErrorMessage } from "formik";

export const Input = props => {
  const { id, type, value, name, error, placeholder, handleChange, style } =
    props;

  /*bg-gray-200*/
  return (
    <>
      <input
        className="border-2 border-gray-200
 rounded  py-2 px-4 text-gray-700 w-80
 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        style={{ borderColor: error ? "red" : "" }}
      />
      <ErrorMessage
        name={name}
        render={msg => (
          <div
            // className="text-red-500"
            style={{ color: "red" }}
          >
            {msg}
          </div>
        )}
      />
    </>
  );
};
