export interface ILoginDetails {
    username: string,
    password: string,
}

export interface IToken {
    userId:string,
    username: string,
    premission: string,
}

export interface IBook {
    _id: string,
    bookName: string,
    author: {
        authorName: string,
    },
    publisher: {
        publisherName: string,
        year: string,
    },
    price: number,
    imageURL: string,
    rating: number,
}