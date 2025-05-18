import Link from "next/link";

// const NavLink = ({ href, title }) => {
//   return (
    
//     <Link href={href} className="relative inline cursor-pointer text-contentColor sm:text-xl  font-medium  hover:text-white
//     before:bg-BTcolorOne  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full 
//     before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out 
//     hover:before:origin-bottom-left hover:before:scale-x-100">
//     {title}

//     </Link>
//   );
// };

const NavLink = ({ href, title, isActive, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative inline cursor-pointer text-contentColor sm:text-xl font-medium
        hover:text-white
        before:bg-BTcolorOne before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full 
        before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out 
        hover:before:origin-bottom-left hover:before:scale-x-100
        ${isActive ? "text-BTcolorOne before:origin-bottom-left before:scale-x-100" : ""}
      `}
    >
      {title}
    </Link>
  );
};

export default NavLink;
    
