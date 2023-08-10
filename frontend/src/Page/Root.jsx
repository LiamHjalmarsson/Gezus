import { Outlet } from "react-router-dom"
import Navigation from "../components/Root/Navigation"

const RootPage = () => {
    return (
        <>
            <Navigation />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default RootPage;