import ButtonCustom from "./ButtonCustom"

const CreateNewPost = () => {
    const onClick = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()

    }
    return (
        <div className="flex flex-col justify-evenly w-[602px] h-[118px] border border-profile-border rounded-md bg-white ">
            <form >
                <div className="flex justify-start relative left-[30px] mt-4 w-11/12 h-12">
                    <input
                        name="new-post"
                        inputMode="text"
                        minLength={2}
                        maxLength={200}
                        formMethod="Post"
                        placeholder="Share something to the community..."
                        className="w-full rounded-sm outline-none" />
                </div>
                <div
                    className="flex flex-row-reverse px-[17px] py-[7px] border-t border-profile-border ">
                    <ButtonCustom buttonText="Post" buttonType="submit" onClick={(e) => onClick(e)} />
                </div>
            </form>
        </div>
    )
}

export default CreateNewPost 