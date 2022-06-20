import { makeAutoObservable } from "mobx";
import axios from 'axios'
import PATH from '../routing/routes'

class User {

    username = ''
    isAuth = false
    error = null
    id = localStorage.getItem('id')
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

        //debug
        // this.isAuth = true
        
    }

    setId = (id) => {
        localStorage.setItem('id', id)
    }

    setToken = (token) => {
        localStorage.setItem('token', token)
    }

    registration = async (email, login, password, link) => {

        try {
            const response = await axios.post(PATH.SERVER.REGISTRATION, {
                email,
                login,
                password,
                link
            })
        } catch (e) {
            this.error = e.response.data.errors
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
            console.log(e.response.data.message)
            console.log(e.response.data.errors)
        }
    }

    logout = () => {
        this.isAuth = false
        this.setUser('', '')
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