export const Button = props => {
  const { label, type, style, form, id, onClick, disabled } = props;

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 
              text-white font-bold py-2 px-4 rounded
               focus:outline-none focus:shadow-outline
               px-10"
      id={id}
      type={type}
      form={form}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
