import ButtonCustom from "./ButtonCustom"

const CreateNewPost = () => {
    const onClick = () => {

    }
    return (
        <div className="flex flex-col justify-evenly w-[602px] h-[118px] border border-profile-border rounded-md bg-white ">
            <div className=""><input name="new-post" placeholder="Share something to the community..." /></div>
            <div className="border-t border-profile-border"><ButtonCustom buttonText="Post" onClick={onClick} /></div>
        </div>
    )
}

export default CreateNewPost 