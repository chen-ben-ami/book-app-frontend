export interface ILoginDetails {
    username: string,
    password: string,
}

export interface IToken {
    username: string,
    premission: string,
}

export interface IBook {
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