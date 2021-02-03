class SecurityContext{
    #userName;
    #authorties;
    constructor(){
        this.#userName = null;
        this.#authorties = [];
    }

    get userName(){
        return this.#userName;
    }

    set userName(value){
        this.#userName = value;
    }

    get authorties(){
        return this.#authorties;
    }

    set authorties(value){
        this.#authorties = value;
    }
}

// 전역화 해서 쓰는 방법
export default new SecurityContext();