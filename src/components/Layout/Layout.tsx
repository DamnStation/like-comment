import NavigationBar from './NavigationBar'
import Footer from './Footer'
import HackSoftOrangeAsset from '../../assets/hack_soft_orange_asset.svg'
import BottomTriangleElement from '../../assets/bottom-triangle-element.svg'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <><div className='bg-background max-h-full w-full h-full  border-4'>
            <div className='flex flex-col relative max-h-[1546px] w-full '>
                <NavigationBar />
                <div className='flex justify-center  w-full h-full'>
                    <img
                        src={HackSoftOrangeAsset}
                        alt="orange stripes background"
                        className="absolute right-0 top-0 w-7/12 "
                    />
                    <div className="flex justify-center">
                        {children}
                    </div>
                    <img
                        src={BottomTriangleElement}
                        alt="gray stripes background"
                        className="absolute bottom-0 left-0 w-7/12"
                    />
                </div>
                <Footer />
            </div>
        </div>
        </>
    )
}
export default Layout