export interface ILoginDetails {
    username: string;
    password: string;
}

export interface IBook {
    bookName: String,
    author: {
        authorName:string
    },
    publisher: {
        publisherName:string,
        year:string
    },
    price: Number,
    imageURL: String,
    rating: Number,
}