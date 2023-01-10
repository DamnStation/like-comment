import NavigationBar from './NavigationBar'
import Footer from './Footer'
import HackSoftOrangeAsset from '../../assets/hack_soft_orange_asset.svg'
import BottomTriangleElement from '../../assets/bottom-triangle-element.svg'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <div className='h-full'>
                <NavigationBar />
                <div className='bg-background flex w-full h-fit justify-center'>
                    <img
                        src={HackSoftOrangeAsset}
                        alt="orange stripes background"
                        className="absolute right-0 top-0 w-7/12 "
                    />
                    <div className="flex w-4/6 z-10 py-14">
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
        </>
    )
}
export default Layout