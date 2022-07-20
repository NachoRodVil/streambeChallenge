import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import { GridLoader } from "react-spinners"
import Header from "../common/Header"
import { getUsers } from "../utils/requests"

function Dashboard() {
    const [users, setUsers] = useState(null)
    useEffect(() => {
        getUsers(setUsers)
    }, [])
    return (
        <div style={{ "textAlign": "center" }}>
            <Header />
            <>
                <div className="min-h-full py-12 text-center flex justify-center">
                    <div className="w-9/12 space-y-8">
                        <div>
                            <p>Hello <b>{Cookies.get("name")}</b></p>
                        </div>
                        {!users ?
                            <div className="flex justify-center">
                                <GridLoader color="#87CEEB" />
                            </div>
                            :
                            <div className="flex justify-center">
                                <table className="table-auto border-black border-4 mt-4 w-3/5">
                                    <tr className="border-black border-4 bg-sky-500/75">
                                        <th className="border-black border-4 py-2">Name</th>
                                        <th className="border-black border-4 py-2">Birth Date</th>
                                        <th className="border-black border-4 py-2">Photo</th>
                                    </tr>
                                    {users.map((user, i) => {
                                        return (
                                            <tr key={i}>
                                                <td> {user.name} {user.surnames}</td>
                                                <td> {user.birthDate}</td>
                                                <td className="flex justify-center py-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="#87CEEB" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </table>
                            </div>
                        }
                    </div>
                </div>
            </>
        </div>
    )
}

export default Dashboard