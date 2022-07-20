
import Cookies from "js-cookie"
import axios from "axios"

const baseURL= "https://www.mockachino.com/06c67c77-18c4-45"

export const login= async (email, password) => {
    try {
        const response = await axios.post(`${baseURL}/login`, { email: email, password: password })
        Cookies.set("auth", "true")
        Cookies.set("email", email)
        Cookies.set("name", `${response.data.name} ${response.data.lastname}`)
        Cookies.set("access_token", response.data.accessToken)
    } catch (error) {
        throw new Error(error)
    }
}

export const logout= () => {
    try {
        //We should have an API call that logs us out here
        Cookies.remove("auth")
        Cookies.remove("email")
        Cookies.remove("name")
        Cookies.remove("access_token")
    } catch (error) {
        throw new Error(error)
    }
}

export const getUsers= async (setUsers) => {
    try {
        const response = await axios.get(`${baseURL}/users`)
        setUsers(response.data.users)
    } catch (error) {
        throw new Error(error)
    }
}