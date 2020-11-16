import React from "react"
import { Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AppCard from "../Components/Card";
import { IBook } from "../API/interfaces";
import TextField from '@material-ui/core/TextField';
import { searchRequest } from "../State/Action/App";


const Admin: React.FunctionComponent = () => {
    const dispatch: Dispatch = useDispatch();
    const history = useHistory();
    const booksList: Array<IBook> = useSelector((state: any) => state.app.booksList)

    const [queryString, setQueryString] = React.useState<string>('');

    const showList = () => {
        if (booksList.length > 0) {
            return booksList.map((book: IBook, idx: any) => (
                <AppCard key={idx} bookName={book.bookName} authorName={book.author.authorName} publisherName={book.publisher.publisherName} price={book.price}
                    year={book.publisher.year} imageUrl={book.imageURL} isAdmin={true} clickHandler={() => { }} />
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

export default React.memo(Admin);