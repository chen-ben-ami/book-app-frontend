import React, { useEffect } from "react"
import { Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getBooksRequest, searchRequest } from "../State/Action/App";
import { IBook } from "../API/interfaces";
import AppCard from "../Components/Card";
import TextField from '@material-ui/core/TextField';
import { orderBookRequest } from "../State/Action/User";


const User: React.FunctionComponent = () => {
    const dispatch: Dispatch = useDispatch();
    const history = useHistory();

    const acessToken: string = useSelector((state: any) => state.app.acessToken)
    const booksList: Array<IBook> = useSelector((state: any) => state.app.booksList)

    const orderedBook: IBook = useSelector((state: any) => state.user.orderedBook)

    const [queryString, setQueryString] = React.useState<string>('');
    useEffect(() => {
        if (acessToken !== null) {
            dispatch(getBooksRequest())
        }
    }, [acessToken]);

    const orderBook = (bookId: string) => {
        dispatch(orderBookRequest(bookId, acessToken));
    }
    const showList = () => {
        if (booksList.length > 0) {
            return booksList.map((book: IBook, idx: any) => (
                <AppCard key={idx} bookName={book.bookName} authorName={book.author.authorName} publisherName={book.publisher.publisherName} price={book.price}
                    year={book.publisher.year} imageUrl={book.imageURL} isAdmin={false} clickHandler={() => orderBook(book._id)} />
            ))
        }
    }
    const showOrdered = () => {
        if (orderedBook !== null && orderedBook !== undefined) {
            console.log(orderedBook)
            return (<AppCard key={orderedBook._id} bookName={orderedBook.bookName} authorName={orderedBook.author.authorName}
                publisherName={orderedBook.publisher.publisherName} price={orderedBook.price}
                year={orderedBook.publisher.year} imageUrl={null} isAdmin={false} clickHandler={() => { }} />)
        } else {
            return (<div>
                <p>No book ordered yet...</p>
            </div>)
        }
    }
    return (
        <div style={{ width: '100%', height: '80%' }}>

            {showOrdered()}
            <TextField
                label='Search'
                value={queryString}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => [setQueryString(e.target.value), dispatch(searchRequest(e.target.value))]}
            />
            {showList()}
        </div>
    );
}

export default React.memo(User);