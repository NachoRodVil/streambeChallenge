import { useState } from "react"
import { Link } from "react-router-dom"
import { useAuth, useUpdateAuth } from "../../context/AuthContext"
import { logout } from "../utils/requests"

function Header() {
    const updateAuth = useUpdateAuth()
    const [loading, setLoading] = useState(false)
    const auth = useAuth()

    const submitLogout = () => {
        setLoading(true)
        try {
            logout()
            updateAuth()
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    return (
        <div className="flex flex-row py-5 px-4">
            <div className="basis-1/2">
                <Link to="/dashboard">
                    <img className="mx-auto h-12 w-auto float-left" src="/streambe_logo.svg" alt="Workflow" />
                </Link>
            </div>
            {auth ?
                <div className="basis-1/2">
                    <button disabled={loading} className="basis-1/2 float-right py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-500/75 hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={submitLogout}>
                        Logout
                    </button>
                </div>
                :
                null
            }
        </div>
    )
}

export default Header