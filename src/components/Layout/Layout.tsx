import NavigationBar from './NavigationBar'
import Footer from './Footer'
import HackSoftOrangeAsset from '../../assets/hack_soft_orange_asset.svg'
import BottomTriangleElement from '../../assets/bottom-triangle-element.svg'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {

    return (
        <div className="bg-background max-h-full w-full h-full">
            <div className="flex flex-col relative max-h-[1546px] w-full">
                <NavigationBar />
                <div className="flex justify-center w-full h-full">
                    <div className="bg-fixed bg-right-top  bg-hack_soft_orange_asset bg-no-repeat">
                        <div className="bg-fixed bg-left-bottom bg-bottom-triangle-element bg-no-repeat">
                            {children}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div >
    )
}
export default Layout