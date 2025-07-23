export class User {
    constructor(name, books, isLogin) {
        this.name = name;
        this.books =  books;
        this.isLogin = isLogin;
    }
}


export class Book{
    constructor(id, name, isBorrow){
        this.id = id;
        this.name = name;
        this.isBorrow = isBorrow;
    }
}

