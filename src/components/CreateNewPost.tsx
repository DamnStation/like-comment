import { useState } from "react";
import ButtonCustom from "./ButtonCustom"
import IvayloBachvarov from "../assets/Ivaylo-Bachvarov.svg";


type Posts = {
    Id: number;
    userName: string;
    profilePicture: string;
    companyTitle: string;
    companyName: string;
    content: string;
    likes: number;
    dateToSeconds: number;
}

type Props = {
    onCreate: (newPost: Posts) => void
}

const CreateNewPost = ({ onCreate }: Props) => {
    const [value, setValue] = useState("")
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = new FormData(e.target as HTMLFormElement);
        const currentDateTime = new Date();
        const resultInSeconds = Math.floor(currentDateTime.getTime() / 1000);

        onCreate({
            Id: 1924819294,
            userName: "Ivaylo Bachvarov",
            profilePicture: IvayloBachvarov,
            companyTitle: "Co-Founder",
            companyName: "HackSoft",
            content: data.get("new-post") as string,
            likes: 0,
            dateToSeconds: resultInSeconds,
        })
        setValue("")
    }

    return (
        <div className="flex flex-col justify-evenly w-auto m-3 md:w-[602px] h-[118px] border border-profile-border rounded-md bg-white ">
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="flex justify-start p-4 w-auto left-[30px] mt-4 h-12">
                    <input
                        id="post"
                        name="new-post"
                        inputMode="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        minLength={2}
                        maxLength={200}
                        placeholder="Share something to the community..."
                        className="md:w-full w-full rounded-sm outline-none font-normal text-[16px] leading-[18.75px]" ></input>
                </div>
                <div
                    className="flex flex-row-reverse px-[17px] py-[7px] border-t border-profile-border ">
                    <ButtonCustom buttonText="Post" buttonType="submit" />
                </div>
            </form>
        </div>
    )
}

export default CreateNewPost 