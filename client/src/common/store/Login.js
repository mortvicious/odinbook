import { makeAutoObservable } from "mobx";

class Login {

    loggedIn = false

    constructor() {
        makeAutoObservable(this)
    }

    setLoggedIn = () => {
        this.loggedIn = true
    }
    setLoggedOut = () => {
        this.loggedIn = false
    }

}

export default new Login()