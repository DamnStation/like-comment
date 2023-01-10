import NavigationBar from './NavigationBar'
import Footer from './Footer'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <NavigationBar />
            <div>{children}</div>
            <Footer />
        </>
    )
}
export default Layout
