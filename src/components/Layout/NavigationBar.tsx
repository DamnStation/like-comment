import { memo } from "react";
import Logo from "../../assets/LogoLogo.svg"
import Profile1 from "../../assets/profile1.svg"

const NavigationBar = () => {

  const onClick = () => {
    console.log("Click")
  }

  return (
    <div className="
        flex 
        justify-between 
        bg-white
        sticky 
        top-0
        h-[70px]
        p-3
        z-20
        ">
      <img
        src={Logo}
        alt="Hack Soft Logo"
        className="md:left-11 left-auto top-3 md:w-[247px] w-fit md:h-[43px] h-fit"
      />
      <img
        src={Profile1}
        alt="Profile Picture"
        onClick={onClick}
        className="right-1 m-1 rounded-full w-9 h-9 hover:scale-110 transition-all "
      />
    </div>
  )
}
export default memo(NavigationBar)