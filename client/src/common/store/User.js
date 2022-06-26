import { makeAutoObservable } from "mobx";
import axios from 'axios'
import PATH from '../routing/routes'

class User {

    username = sessionStorage.getItem('username')
    isAuth = false
    error = null
    id = sessionStorage.getItem('id') || ''
    link = ''
    friends = []
    communities = []
    settings = {}

    constructor() {
        makeAutoObservable(this)
    }

    setUser = (username, id) => {
        this.username = username
        this.id = id
        sessionStorage.setItem('username', username)

        //debug
        // this.isAuth = true
        
    }

    setId = (id) => {
        localStorage.setItem('id', id)
        sessionStorage.setItem('id', id)
    }

    setError = (error) => {
        this.error = error
    }

    setToken = (token) => {
        localStorage.setItem('token', token)
    }

    registration = async (email, login, password, link) => {
        try {
            this.setError(null)
            const response = await axios.post(PATH.SERVER.REGISTRATION, {
                email,
                login,
                password,
                link
            })
            return true
        } catch (e) {
            this.error = e.response.data.errors
            return false
        }
    }

    login = async (email, password) => {

        try {
            const response = await axios.post(PATH.SERVER.LOGIN, {
                email,
                password
            })
            this.isAuth = true
            this.setUser(
                response.data.user.login, 
                response.data.user.id, 
            )
            this.setToken(
                response.data.token
            )
            this.setId(
                response.data.id
            )
        } catch (e) {
            this.error = e.response.data.message
            // console.log(e.response.data.message)
            // console.log(e.response.data.errors)
            // console.log(`ERR IS ${this.error}`)
        }
    }

    logout = () => {
        this.isAuth = false
        this.setUser('', '')
        sessionStorage.removeItem('id')
        sessionStorage.removeItem('username')
        localStorage.removeItem('token')
        localStorage.removeItem('id')

    }

    auth = async () => {

        try {
            const response = await axios.get(PATH.SERVER.AUTH, {
                headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            this.setUser(
                response.data.user.login, 
                response.data.user.id, 
            )
            this.setToken(
                response.data.token
            )
            this.setId(
                response.data.id
            )
            this.isAuth = true

        } catch (e) {
            console.log(e.response.data.message)
            localStorage.removeItem('token')
            localStorage.removeItem('id')
        }
    }

}

export default new User()