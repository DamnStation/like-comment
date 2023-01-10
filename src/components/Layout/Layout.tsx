import NavigationBar from './NavigationBar'
import Footer from './Footer'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <NavigationBar />
            <div className='bg-backgroundColor' >{children}</div>
            <Footer />
        </>
    )
}
export default Layout
