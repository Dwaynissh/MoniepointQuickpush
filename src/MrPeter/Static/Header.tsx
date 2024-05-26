import { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaAngleDown, FaArrowRight, FaTimes } from "react-icons/fa";
import //     MdLogout,
//     MdOutlineShoppingBag,
//   MdPerson,
//   MdShoppingCart,
"react-icons/md";
import { GlobalContext } from "../Global/ContextProvider";

const Header = () => {
  const { toggle, handleToggle } = useContext(GlobalContext);

  return (
    <div>
      <div className="h-[80px] w-full bg-[rgb(3,19,53)] bxs flex justify-center items-center fixed z-10">
        <div className="w-[90%] flex justify-between items-center">
          <div className="flex items-center gap-[150px] ">
            <div className="text-white">
              <Link to="/">
                {/* <img
                  src={logo}
                  alt=""
                  className="w-[100px] md:w-[150px] h-[65px] object-contain"
                /> */}
                <div className="font-bolder text-[25px]">MONIEPOINT</div>
              </Link>
            </div>
          </div>

          <div className="hidden md:flex justify-center items-center gap-[20px] text-white text-[19px]">
            <div className="flex items-center gap-1 cursor-pointer">
              <nav>Solutions</nav>
              <FaAngleDown className="mt-1" />
            </div>
            <nav className=" cursor-pointer">About</nav>
            <nav className=" cursor-pointer">Contact</nav>
            <nav className=" cursor-pointer">Blog</nav>
          </div>

          <div className="hidden md:flex justify-end gap-[30px] transition-all duration-30">
            <button className="py-2 px-[13px] rounded-[20px] flex bg-[#c4e9fd] items-center gap-2 text-[19px]">
              <div>Sign in</div>
              <FaArrowRight className="text-[15px] animate-pulse" />
            </button>
          </div>

          {/* Mobile Responsivness Toggle Icons */}
          <div className="md:hidden flex justify-center items-center gap-3">
            <div className="border text-white py-2 px-2 rounded-full  bg-[rgb(3,19,53)]  cursor-pointer relative md:hidden">
              <AiOutlineMenu
                onClick={handleToggle}
                className="text-[20px] font-bold"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Responsivness Toggle Dropdown Card */}
      {toggle && (
        <div className="absolute">
          <div
            className={`md:hidden right-0 h-[100vh] top-[0] bg-[rgb(3,19,53)] text-black fixed transition-all duration-300 flex justify-center items-center z-20 ${
              toggle ? "w-[350px]" : "w-[0px]"
            } `}
          >
            <div className="md:hidden lg:hidden w-[90%] h-full">
              <div className="w-full h-[80px]  flex justify-end items-center">
                <div className="mr-2 mt-1 border flex justify-center items-center py-2 px-2 rounded-full bg-[rgb(3,19,53)] font-bold cursor-pointer">
                  <FaTimes
                    onClick={handleToggle}
                    className=" text-[20px] font-medium text-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
