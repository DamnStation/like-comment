import HackSoftLogo from "../../assets/hacksoft-logo.png"
import IvayloBachvarov from "../../assets/Ivaylo-Bachvarov.png"

const NavigationBar = () => {
    return (
        <div className="
        flex 
        justify-between 
        bg-white
        sticky 
        top-0
        h-[70px]
        pt-3
        pl-[46px] 
        pr-13
        pb-4
        z-20">
            <img
                src={HackSoftLogo}
                alt="Hack Soft Logo"
                className="left-11 top-3 w-[247.3px] h-[43.63px]"
            />
            <img
                src={IvayloBachvarov}
                alt="Profile Picture"
                className="right-1 m-1 rounded-full w-9 h-9 hover:w-11 hover:h-11 transition-all "
            />
        </div>
    )
}
export default NavigationBar