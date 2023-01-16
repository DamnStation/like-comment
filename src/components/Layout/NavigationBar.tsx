import { useState } from "react";
import HackSoftLogo from "../../assets/hacksoft-logo.svg"
import IvayloBachvarov from "../../assets/Ivaylo-Bachvarov.svg"
import { useUsers } from "../../hooks/useUsers";

type Props = {
  selectedUserProp: 0 | 1 | 2;
};
type Users = {
  users: {
    Id: number;
    userName: string;
    companyTitle: string;
    companyName: string;
    profilePicture: string;
    likes: number;
    posts: number;
  }[]
}

const NavigationBar = () => {

  const { users } = useUsers()
  const [selectedUser, setSelectedUser] = useState<Users>()

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
        z-10
        ">
      <img
        src={HackSoftLogo}
        alt="Hack Soft Logo"
        className="md:left-11 left-auto top-3 md:w-[247px] w-fit md:h-[43px] h-fit"
      />
      <img
        src={IvayloBachvarov}
        alt="Profile Picture"
        onClick={onClick}
        className="right-1 m-1 rounded-full w-9 h-9 hover:scale-110 transition-all "
      />
    </div>
  )
}
export default NavigationBar