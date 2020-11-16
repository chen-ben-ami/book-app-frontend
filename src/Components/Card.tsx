import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import EditIcon from '@material-ui/icons/Edit';
import AppIconButton from './AppIconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
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
  isAdmin: boolean
  buyHandler: Function,
  editHandler: Function
}

const AppCard: React.FunctionComponent<IProps> = ({ bookName, authorName, publisherName, price, year, imageUrl, isAdmin, buyHandler, editHandler }) => {

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
            Publisher: {publisherName}
            Release year:{year}
          </StyledCardContent>
          <StyledCardContent>Price: {price}€</StyledCardContent>
        </div>
        {image}
        {isAdmin ? <AppIconButton clickHandler={() => editHandler()} text={"Edit Book"} icon={<EditIcon />} variant={undefined} /> : <CardActions>
          <AppIconButton clickHandler={() => buyHandler()} text={"Buy Book"} icon={<ShoppingCartIcon />} variant={undefined} />
        </CardActions>}
      </StyledCardContent>
    </StyledCard>
  );
}

export default AppCard;

