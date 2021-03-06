import React, { useEffect } from "react";
import { Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { getBooksRequest, searchRequest } from "../State/Action/App";
import { IBook } from "../API/interfaces";
import AppCard from "../Components/Card";
import TextField from '@material-ui/core/TextField';
import { getOrderedBookRequest, orderBookRequest } from "../State/Action/User";
import AppBackdrop from "../Components/Backdrop";
import styled from 'styled-components';

const StyledH1: any = styled.h1`
    text-align:center;
`;

const User: React.FunctionComponent = () => {
    const dispatch: Dispatch = useDispatch();
    const acessToken: string = useSelector((state: any) => state.app.acessToken);
    const booksList: Array<IBook> = useSelector((state: any) => state.app.booksList);
    const isLoading: boolean = useSelector((state: any) => state.app.isLoading);
    const orderedBook: IBook = useSelector((state: any) => state.user.orderedBook);

    const [queryString, setQueryString] = React.useState<string>('');
    useEffect(() => {
        if (acessToken !== null) {
            dispatch(getBooksRequest());
            if (orderedBook === null) {
                dispatch(getOrderedBookRequest(acessToken))
            }
        }
    }, [acessToken]);

    useEffect(() => {

    }, [orderedBook]);

    const orderBook = (bookId: string) => {
        dispatch(orderBookRequest(bookId, acessToken));
    }
    const showList = () => {
        if (booksList.length > 0) {
            return booksList.map((book: IBook, idx: any) => (
                <AppCard key={idx} bookName={book.bookName} authorName={book.author.authorName} publisherName={book.publisher.publisherName} price={book.price}
                    year={book.publisher.year} imageUrl={book.imageURL} rating={book.rating} isAdmin={false} buyHandler={() => orderBook(book._id)} editHandler={() => { }} deleteHandler={() => { }} hideButtons={false} />
            ))
        }
    }
    const showOrdered = () => {
        if (orderedBook !== null && orderedBook !== undefined) {
            return (
                <React.Fragment>
                    <StyledH1>Ordered book:</StyledH1>
                    <AppCard key={orderedBook._id} bookName={orderedBook.bookName} authorName={orderedBook.author.authorName}
                        publisherName={orderedBook.publisher.publisherName} price={orderedBook.price}
                        year={orderedBook.publisher.year} imageUrl={null} rating={orderedBook.rating} isAdmin={false} editHandler={() => { }} buyHandler={() => { }} deleteHandler={() => { }} hideButtons={true} />
                </React.Fragment>
            )
        } else {
            return (<div>
                <p>No book ordered yet...</p>
            </div>)
        }
    }

    const showProgressBar = () => {
        if (isLoading) return (<AppBackdrop loading={isLoading} />);
        else return null;
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
            {showProgressBar()}
        </div>
    );
}

export default React.memo(User);