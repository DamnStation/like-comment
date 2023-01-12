import ButtonCustom from "./ButtonCustom"

const CreateNewPost = () => {

    return (
        <div className="flex flex-col justify-evenly w-[602px] h-[118px] border border-profile-border rounded-md bg-white ">
            <form>
                <div className="flex justify-start relative left-[30px] mt-4 w-11/12 h-12">
                    <input
                        id="post"
                        name="new-post"
                        inputMode="text"
                        minLength={2}
                        maxLength={200}
                        placeholder="Share something to the community..."
                        className="w-full rounded-sm outline-none font-normal text-[16px] leading-[18.75px]" ></input>
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