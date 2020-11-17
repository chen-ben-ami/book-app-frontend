export interface ILoginDetails {
    username: string,
    password: string,
}

export interface IToken {
    userId: string,
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
        year: number,
    },
    price: number,
    imageURL: string,
    rating: number,
}

export interface IEditableBook {
    _id: string,
    bookName: string,
    authorName: string,
    publisherName: string,
    year: number,
    price: number,
    imageURL: string,
    rating: number,
}