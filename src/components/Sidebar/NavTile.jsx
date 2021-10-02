export const NavTile = props => {
  const {
    //  label,
    icon,
    onClick,
  } = props;

  return (
    <div
      className="pl-4 py-2 mt-2 text-gray-900
  
    cursor-pointer"
      onClick={onClick}
    >
      <div className="text-white dark:text-gray-700	">{icon}</div>
      {/* {label} */}
    </div>
  );
};
