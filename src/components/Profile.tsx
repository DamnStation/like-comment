import AvatarPicture from "../assets/Ivaylo-Bachvarov.png"
import Pencil from "../assets/Union.svg"

type Props = {
  userName: string;
  companyTitle: string;
  companyName: string;
  likes: number;
  posts: number;
}

const Profile = (props: Props) => {

  const { userName, companyName, companyTitle, likes, posts } = props

  return (
    <>
      <div
        className="
                flex
                flex-col
                bg-white 
                w-60 
                h-36 
                my-2
                border 
                border-profile-border 
                rounded-lg
                ">
        <div
          className="
                    flex 
                    flex-row 
                    pt-2
                    pl-2
                    w-56 
                    h-36">
          <img
            src={AvatarPicture}
            alt="Profile picture"
            className="mt-2 rounded-full w-11 h-11  hover:w-12 hover:h-12 transition-all" />
          <div
            className="pt-1 pl-1 m-2 w-32 h-14 ">
            <div className="font-medium text-[16px] leading-[18.75px]">{userName}</div>
            <div className="font-normal text-[13px] leading-[15.23px] text-profile  w-max">{companyTitle}, {companyName}</div>
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
                text-center
                py-3
                border-t
                border-profile-border">
          <div>
            <div className="font-medium text-base">{likes}</div>
            <div className="font-normal text-sm">Likes</div>
          </div>
          <div className="border-r border-profile-border " />
          <div>
            <div className="font-medium text-base">{posts}</div>
            <div className="font-normal text-sm ">Posts</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile