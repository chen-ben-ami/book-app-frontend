import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AppIconButton from './AppIconButton';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import { IBook } from '../API/interfaces';
import Button from '@material-ui/core/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

interface IProps {
    mode: 'edit' | 'create'
    book: IBook | null
    onSaveCreate: Function
    onSaveEdit: Function
    open: boolean
    handleClose: Function
}


const AlertDialog: React.FunctionComponent<IProps> = ({ mode, book, onSaveCreate, onSaveEdit, open, handleClose }) => {




    const bookSchema = Yup.object().shape({
        bookName: Yup.string()
            .min(2, 'Book name must be longer than 2 characters')
            .max(20, 'Book name is too Long!')
            .required('Required'),
        authorName: Yup.string()
            .min(2, 'Author name must be longer than 2 characters')
            .max(20, "Author name is too long!")
            .required('Required'),
        publisherName: Yup.string()
            .min(2, 'Publisher Name must be longer than 2 characters')
            .max(20, "Publisher Name is too long!")
            .required('Required'),
        year: Yup.number()
            .min(0)
            .max(9999, 'Year cant be higher than 9999')
            .required('Required'),
        price: Yup.number()
            .required('Required'),
        rating: Yup.number()
            .min(0, 'Rating must be between 0 to 5')
            .max(5, 'Rating must be between 0 to 5')
            .required('Required'),
    });


    const initialValues = book ? {
        bookName: book.bookName, authorName: book.author.authorName, publisherName: book.publisher.publisherName,
        year: book.publisher.year, price: book.price, rating: book.rating, imageURL: book.imageURL
    }
        : { bookName: '', authorName: '', publisherName: '', year: 0, price: 0, imageURL: '', rating: 0 }

    const form = () => (
        <Formik
            initialValues={initialValues}
            onSubmit={values => {
                if (mode === 'create') {
                    onSaveCreate(values)
                } else {
                    console.log(values)
                    onSaveEdit(values)
                }
                handleClose();
            }}
            validationSchema={bookSchema}
        >
            {({ errors, touched, handleChange, handleBlur, handleSubmit, values }) => (
                <form onSubmit={handleSubmit} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    border: '2px solid black',
                    borderRadius: '10px',
                    padding: '15%',
                }}>
                    <TextField
                        style={{ margin: '2.5%', width: '50%' }}
                        variant='outlined'
                        onChange={handleChange('bookName')}
                        onBlur={handleBlur('bookName')}
                        value={values.bookName}
                        placeholder="Enter Book Name"
                    />
                    {errors.bookName && touched.bookName ? (
                        <span >{errors.bookName}</span>
                    ) : null}
                    <TextField
                        style={{ margin: '2.5%', width: '50%' }}
                        variant='outlined'
                        onChange={handleChange('authorName')}
                        onBlur={handleBlur('authorName')}
                        value={values.authorName}
                        placeholder="Enter Author name"
                    />
                    {errors.authorName && touched.authorName ? (
                        <span >{errors.authorName}</span>
                    ) : null}
                    <TextField
                        style={{ margin: '2.5%', width: '50%' }}
                        variant='outlined'
                        onChange={handleChange('publisherName')}
                        onBlur={handleBlur('publisherName')}
                        value={values.publisherName}
                        placeholder="Enter Publisher Name"
                    />
                    {errors.publisherName && touched.publisherName ? (
                        <span >{errors.publisherName}</span>
                    ) : null}
                    <TextField
                        style={{ margin: '2.5%', width: '50%' }}
                        variant='outlined'
                        onChange={handleChange('year')}
                        onBlur={handleBlur('year')}
                        value={values.year}
                        placeholder="Enter rlease year"
                    />
                    {errors.year && touched.year ? (
                        <span >{errors.year}</span>
                    ) : null}
                    <TextField
                        style={{ margin: '2.5%', width: '50%' }}
                        variant='outlined'
                        onChange={handleChange('price')}
                        onBlur={handleBlur('price')}
                        value={values.price}
                        placeholder="Enter price"
                    />
                    {errors.price && touched.price ? (
                        <span >{errors.price}</span>
                    ) : null}
                    <TextField
                        style={{ margin: '2.5%', width: '50%' }}
                        variant='outlined'
                        onChange={handleChange('rating')}
                        onBlur={handleBlur('rating')}
                        value={values.rating}
                        placeholder="Enter rating"
                    />
                    {errors.rating && touched.rating ? (
                        <span >{errors.rating}</span>
                    ) : null}
                    <TextField
                        style={{ margin: '2.5%', width: '50%' }}
                        variant='outlined'
                        onChange={handleChange('imageURL')}
                        onBlur={handleBlur('imageURL')}
                        value={values.imageURL}
                        placeholder="Enter image Url"
                    />
                    <Button variant="contained" color="primary" style={{ margin: '2.5%', width: '50%' }} onClick={async () => {
                        handleSubmit();
                    }} > Save </Button>
                    <AppIconButton clickHandler={() => handleClose()} text={"Cancel"} icon={<DeleteIcon />} variant={undefined} />
                </form>
            )
            }
        </Formik >
    );


    return (
        <Dialog
            fullWidth={true}
            maxWidth={'md'}
            open={open}
            onClose={() => handleClose()}
        >
            <DialogContent>
                {form()}
            </DialogContent>
            <DialogActions>
            </DialogActions>
        </Dialog>
    );
}

export default AlertDialog;