import { makeAutoObservable } from "mobx";

class Post {

    title = ''

    content = ''

    type = ''
    //post or comment

    constructor() {
        makeAutoObservable(this)
    }

    setTitle(title) {
        this.title = title
    }

    setContent(content) {
        this.content = content
    }

    setType(type) {
        this.type = type
    }

}

export default new Post()