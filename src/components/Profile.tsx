import { memo } from "react";
import Pencil from "../assets/Union.svg"

type Props = {
  userName: string;
  companyTitle: string;
  companyName: string;
  profilePicture: string;
  likes: number;
  posts: number;
}

const Profile = (props: Props) => {

  const { userName, companyName, companyTitle, profilePicture, likes, posts } = props

  return (
    <>
      <div
        className="
                flex
                flex-col
                bg-white 
                w-216
                h-[124px]
                m-3
                border 
                border-profile-border 
                rounded-lg
                ">
        <div
          className="
                    flex 
                    flex-row 
                    w-full
                    h-auto
                    justify-center
                    pt-2
                    pb-3
                    pl-2
                    md:pt-1
                    md:pb-0
                    md:h-36
                    md:w-56 
                    ">
          <img
            src={profilePicture}
            alt="Profile picture"
            className="mt-2 rounded-full w-11 h-11  hover:scale-125 transition-all" />
          <div
            className="pt-1 pl-1 m-2 md:w-32 md:h-14 h-full ">
            <div className="font-medium text-[16px] leading-[18.75px]">{userName}</div>
            < div className="font-normal text-[13px] leading-[15.23px] text-profile  w-max">{companyTitle}, {companyName}</div>
          </div>
          <img
            src={Pencil}
            alt="Edit profile"
            className="ml-1 w-4 h-4 hover:ml-0 hover:w-5 hover:h-5 transition-all"
          />
        </div>
        <div
          className="
                flex
                justify-evenly
                border-t
                border-profile-border">
          <div>
            <div className="font-medium  text-center text-base">{likes}</div>
            <div className="font-normal  text-center text-sm">Likes</div>
          </div>
          <div className="border-r border-profile-border " />
          <div >
            <div className="font-medium  text-center text-base">{posts}</div>
            <div className="font-normal  text-center text-sm ">Posts</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(Profile)