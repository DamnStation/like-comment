import NavigationBar from './NavigationBar'
import Footer from './Footer'
import { memo } from 'react'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {

    return (
        <div className="flex flex-col relative w-auto bg-background ">
            <NavigationBar />
            <div className="bg-fixed bg-right-top bg-[url('/src/assets/orange_asset.svg')] bg-no-repeat">
                <div className="bg-fixed bg-left-bottom bg-[url('/src/assets/bottom-triangle-element.svg')] bg-no-repeat">
                    <div className="flex justify-center w-full">
                        {children}
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
export default memo(Layout)