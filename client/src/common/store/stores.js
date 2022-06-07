import { makeAutoObservable } from "mobx";

//import stores here
import _placeholder from "./_placeholder";

class Stores {
    constructor() {
        makeAutoObservable(this)
    }
    placeholder = new _placeholder()
}

export default new Stores()