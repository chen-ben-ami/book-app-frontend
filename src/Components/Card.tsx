import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import styled from 'styled-components';
import EditIcon from '@material-ui/icons/Edit';
import AppIconButton from './AppIconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DeleteIcon from '@material-ui/icons/Delete';
const StyledCard: any = styled(Card)`
  background-color: ${props => props.theme.cardColor};
  color: ${props => props.theme.textColor};
  align-content: center;
  display: flex;
  text-align:center;
  flex-wrap: wrap;
  height: auto;
  min-width:180px;
  margin: 1%;
`

const StyledCardContent: any = styled(CardContent)`
  align-content: center;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  position: relative;
  width:100;
`

interface IProps {
  bookName: string,
  authorName: string,
  publisherName: string,
  price: number,
  year: number
  imageUrl: string | null,
  rating: number,
  isAdmin: boolean
  buyHandler: Function,
  editHandler: Function,
  deleteHandler: Function
}

const AppCard: React.FunctionComponent<IProps> = ({ bookName, authorName, publisherName, price, year, rating, imageUrl, isAdmin, buyHandler, editHandler, deleteHandler }) => {

  let image = null
  if (imageUrl) {
    image = <CardMedia className='IMG' component='img' image={imageUrl} />
  }

  return (
    <StyledCard variant="outlined" >
      <StyledCardContent>
        <div className='BookText'>
          <StyledCardContent>Book name:{bookName} </StyledCardContent>
          <StyledCardContent>By: {authorName}</StyledCardContent>
          <StyledCardContent>
            {<p>Publisher: {publisherName}</p>}
            {<p>Release year:{year}</p>}
            {<p>Rating: {rating} stars</p>}
          </StyledCardContent>
          <StyledCardContent>Price: {price}€</StyledCardContent>
        </div>
        {image}
        {isAdmin ? <React.Fragment>
          <p> <AppIconButton clickHandler={() => editHandler()} text={"Edit Book"} icon={<EditIcon />} variant={undefined} /> </p>
          <p> <AppIconButton clickHandler={() => deleteHandler()} text={"Delete Book"} icon={<DeleteIcon />} variant={undefined} /> </p>
        </React.Fragment>
          : <CardActions>
            <AppIconButton clickHandler={() => buyHandler()} text={"Buy Book"} icon={<ShoppingCartIcon />} variant={undefined} />
          </CardActions>}
      </StyledCardContent>
    </StyledCard>
  );
}

export default AppCard;

