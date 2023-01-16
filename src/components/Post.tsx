import Like from "../assets/like.svg";
import Liked from "../assets/liked.svg";
import LikedIcon from "../assets/liked-icon.svg";
import Share from "../assets/share.svg";
import ButtonCusom from "./ButtonCustom";
import { memo, useState } from "react";
import moment from "moment";
import { useUser } from "../hooks/useUser";

type Props = {
  Id: number;
  userName: string;
  profilePicture: string;
  companyTitle: string;
  companyName: string;
  content: string;
  likedBy: number[];
  dateToSeconds: number;
  onClickLike: (postId: number) => void

};

const Post = (props: Props) => {
  const { userName, profilePicture, companyName, companyTitle, content, likedBy, dateToSeconds, onClickLike } =
    props;
  const { user } = useUser()

  const charsPerPost = 140;
  const [showMore, setShowMore] = useState(charsPerPost);

  const showLike = () => {
    if (likedBy.length > 0) {
      return (
        <>
          <img
            src={LikedIcon}
            alt="People liked this post"
            className="h-[18px] w-[18px]"
          />
          <div className="font-normal text-[14px] leading-[21px] pl-1.5">
            {" " + likedBy.length}
          </div>
        </>)
    }
  }

  const likeShare = () => {
    const likeOrLiked = (likedBy.includes(user.Id) ? Liked : Like)
    return (
      <>
        <ButtonCusom
          buttonStyle="bg-none"
          onClick={(likedBy) => { onClickLike() }}
          buttonImage={
            <img src={likeOrLiked} alt="People liked this post" className="h-6" />
          }
        />
        <ButtonCusom
          buttonStyle="bg-none"
          buttonImage={
            <img src={Share} alt="People liked this post" className="h-6" />
          }
        />
      </>)
  }

  const handleMorePosts = () => {
    setShowMore(showMore + charsPerPost);
  };

  return (
    <div className="flex flex-col justify-between md:w-[602px] w-auto h-auto md:h-auto my-[19px] m-3 bg-white rounded-md shadow-[0_4px_5px_rgba(123,124,129,0.5)]">
      <div className="flex flex-row md:w-full w-auto">
        <img
          src={profilePicture}
          alt="Post profile picture"
          className="rounded-full ml-[15px] mt-[15px] mr-2.5 w-12 h-12 hover:scale-125 transition-all"
        />
        <div className="flex flex-col w-3/5 pt-[17px]">
          <strong className="font-medium text-[16px] leading-[21px]">
            {userName}
          </strong>
          <p className="font-normal text-[14px] leading-[21px]">
            {companyTitle}, {companyName}
          </p>
        </div>
        <h5 className="flex justify-end w-full p-3 font-normal text-sm ">
          {moment.utc(dateToSeconds * 1000).fromNow()}
        </h5>
      </div>
      <p className="font-normal text-[16px] leading-[22px] md:w-[570px] md:h-[80px] w-auto h-auto py-4 pl-[15px] pr-12">
        {content.slice(0, showMore)}
      </p>
      <div className="flex flex-col-reverse h-[32px]">{showMore < content?.length && (
        <ButtonCusom
          buttonText="...show more"
          buttonStyle="flex justify-end z-10 pr-3 py-1 rounded text-[14px] leading-7 font-medium gap-2.5"
          onClick={handleMorePosts}
        />)
      }</div>
      <div className="flex flex-col  ">
        <div className="flex flex-row ml-3 ">
          {showLike()}
        </div>
        <div className="flex justify-between px-[15px] h-[33px] m-1 border-t border-profile-border">
          {likeShare()}
        </div>
      </div>
    </div>
  );
};

export default memo(Post);
