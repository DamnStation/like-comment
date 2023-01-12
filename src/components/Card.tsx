import ProfilePicture from "../assets/Ivaylo-Bachvarov.png"
import Like from "../assets/like.svg"
import Liked from "../assets/liked.svg"
import LikedIcon from "../assets/liked-icon.svg"
import Share from "../assets/share.svg"
import ButtonCusom from "./ButtonCustom"

const Card = () => {
    return (
        <div className="flex flex-col justify-between w-[602px] h-[228px] my-[19px] bg-white rounded-md shadow-[0_4px_5px_rgba(123,124,129,0.5)]">
            <div className="flex flex-row w-full">
                <img
                    src={ProfilePicture}
                    alt="Post profile picture"
                    className="rounded-full ml-[15px] mt-[15px] mr-2.5 w-12 h-12 hover:ml-[10px] hover:mt-1.5 hover:mr-2  hover:w-14 hover:h-14 transition-all"
                />
                <div className="flex flex-col w-3/5 pt-[17px]">
                    <strong className="font-medium text-[16px] leading-[21px]">Daniel Goshev</strong>
                    <p className="font-normal text-[14px] leading-[21px]">Software Developer, HackSoft</p>
                </div>
                <h5 className="flex pl-16 pt-3 font-normal text-sm ">20 minutes ago</h5>
            </div>
            <p className="font-normal text-[16px] leading-[22px] w-[539px] h-[66px] py-4 pl-[15px] pr-12" >Despite our total project numbers only increasing by 2% compared to last month, the 58 projects we are working on contain a significant increase in deliverables.</p>
            <div className="flex flex-row pl-[14px] pt-7 pb-[11px]">
                <img src={LikedIcon} alt="People liked this post" className="h-[18px] w-[18px]" /> <div className="font-normal text-[14px] leading-[21px] pl-1.5">4</div>
            </div>
            <div className="flex justify-between px-[15px] pt-1 pb-[14px] border-t border-profile-border">
                <ButtonCusom
                    buttonStyle="bg-none "
                    buttonImage={<img src={Like} alt="People liked this post" className="h-6" />} />
                <ButtonCusom
                    buttonStyle="bg-none"
                    buttonImage={<img src={Share} alt="People liked this post" className="h-6" />} />
            </div>
        </div>
    )
}

export default Card