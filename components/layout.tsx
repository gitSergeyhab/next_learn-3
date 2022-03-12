import { FC, ReactNode } from "react"
import Footer from "./footer"
import Header from "./header"

type LayoutProps = {children: ReactNode}

const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <div>
        <Header/>
            {children}
        <Footer/>
        </div>
    )
}

export default Layout;