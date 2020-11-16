import React, { useEffect } from "react"
import { Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AppCard from "../Components/Card";
import { IBook } from "../API/interfaces";
import TextField from '@material-ui/core/TextField';
import { getBooksRequest, searchRequest } from "../State/Action/App";
import AppIconButton from "../Components/AppIconButton";
import AddIcon from '@material-ui/icons/Add';
import AppBackdrop from "../Components/Backdrop";
import AlertDialog from "../Components/Dialog";

const Admin: React.FunctionComponent = () => {
    const dispatch: Dispatch = useDispatch();
    const history = useHistory();
    const acessToken: string = useSelector((state: any) => state.app.acessToken)
    const booksList: Array<IBook> = useSelector((state: any) => state.app.booksList)
    const isLoading: boolean = useSelector((state: any) => state.app.isLoading)

    const [createOrEdit, setCreateOrEdit] = React.useState<boolean>(false);
    const [queryString, setQueryString] = React.useState<string>('');
    const [mode, setMode] = React.useState<'create' | 'edit'>('create');
    const [bookToEdit, setBookToEdit] = React.useState<IBook | null>(null);
    useEffect(() => {
        if (acessToken !== null) {
            dispatch(getBooksRequest())
        }
    }, [acessToken]);

    const showList = () => {
        if (booksList.length > 0) {
            return booksList.map((book: IBook, idx: any) => (
                <AppCard key={idx} bookName={book.bookName} authorName={book.author.authorName} publisherName={book.publisher.publisherName} price={book.price}
                    year={book.publisher.year} imageUrl={book.imageURL} isAdmin={true} clickHandler={() => { }} />
            ))
        }
    }
    const handleCreateBook = () => {
        setCreateOrEdit(true)
        setMode('create')
    }
    const handleEditBook = () => {
        setCreateOrEdit(true)
        setMode('edit')
    }

    const showProgressBar = () => {
        if (isLoading) return (<AppBackdrop loading={isLoading} />)
        else return null
    }
    const handleOnCreate = () => {

    }

    const handleOnEdit = () => {

    }

    return (
        <div style={{ width: '100%', height: '80%' }}>
            <TextField
                label='Search'
                value={queryString}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => [setQueryString(e.target.value), dispatch(searchRequest(e.target.value))]}
            />
            <AlertDialog mode={mode} book={bookToEdit ? bookToEdit : null}
                onCreate={() => handleCreateBook()} onEdit={()=>handleEditBook()}
            />
            {showList()}
            {showProgressBar()}
        </div>
    );
}

export default React.memo(Admin);