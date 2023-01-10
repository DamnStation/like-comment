import HackSoftLogo from "../../assets/hacksoft-logo.png"
import IvayloBachvarov from "../../assets/Ivaylo-Bachvarov.png"
const NavigationBar = () => {
    return (
        <div className="flex bg-white border-b-2 sticky pl-12 pt-3 pb-4 pr-13">
            <img
                src={HackSoftLogo}
                alt="Hack Soft Logo"
                className=" left-11 top-3 w-60 h-11   "
            />
            <img
                src={IvayloBachvarov}
                alt="Profile Picture"
                className="absolute right-14 m-1 rounded-full w-9 h-9  "
            />
        </div>
    )
}
export default NavigationBar