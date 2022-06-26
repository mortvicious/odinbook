import { makeAutoObservable } from "mobx";
import axios from 'axios'

class Community {

    constructor() {
        makeAutoObservable(this)
    }

    createCommunity = async() => {}

    deleteCommunity = async() => {}

    editCommunity = async() => {}

    changeSettings = async() => {}

    addPersonToCommunity = async() => {}

    removePersonFromCommunity = async() => {}

    promoteToAdmin = async() => {}

    transferOwnership = async() => {}

    addPost = async() => {}

    deletePost = async() => {}


}

export default new Community()