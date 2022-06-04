import Header from "./Header"
import { BrowserRouter } from "react-router-dom"

const PageContainer = ({children}) => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <div className="page-content">
                    {children}
                </div>
            </div>
        </BrowserRouter>
    )
}

export default PageContainer