import { makeAutoObservable } from "mobx";

class User {

    username = ''

    constructor() {
        makeAutoObservable(this)
    }

    setUsername = (username) => {
        this.username = username
    }

}

export default new User()