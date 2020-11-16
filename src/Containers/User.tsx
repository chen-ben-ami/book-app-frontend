import React, { useEffect } from "react"
import { Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getBooksRequest, searchRequest } from "../State/Action/App";
import { IBook } from "../API/interfaces";
import AppCard from "../Components/Card";
import TextField from '@material-ui/core/TextField';


const User: React.FunctionComponent = () => {
    const dispatch: Dispatch = useDispatch();
    const history = useHistory();

    const acessToken: string = useSelector((state: any) => state.app.acessToken)
    const booksList: Array<IBook> = useSelector((state: any) => state.app.booksList)
    const isAdmin: boolean = useSelector((state: any) => state.app.isAdmin)
    const [queryString, setQueryString] = React.useState<string>('');
    useEffect(() => {
        if (acessToken !== null) {
            dispatch(getBooksRequest())
        }
    }, [acessToken]);

    // bookName: string,
    // authorName: string,
    // publisherName: string,
    // price: number,
    // year: string
    // imageUrl: string,
    // clickHandler: Function,
    const showList = () => {
        if (booksList.length > 0) {
            return booksList.map((book: IBook, idx: any) => (
                <AppCard key={idx} bookName={book.bookName} authorName={book.author.authorName} publisherName={book.publisher.publisherName} price={book.price}
                    year={book.publisher.year} imageUrl={book.imageURL} isAdmin={isAdmin} clickHandler={() => (console.log("clicked"))} />
            ))
        }
    }
    return (
        <div style={{ width: '100%', height: '80%' }}>
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