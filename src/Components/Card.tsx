import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

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
  year: string
  imageUrl: string | null,
  isAdmin: boolean
  clickHandler: Function,
}

const AppCard: React.FunctionComponent<IProps> = ({ bookName, authorName, publisherName, price, year, imageUrl, isAdmin, clickHandler }) => {

  let image = null

  if (imageUrl) {
    image = <CardMedia className='IMG' component='img' image={imageUrl} />
  }
  return (
    <StyledCard variant="outlined" onClick={() => clickHandler()}>
      <StyledCardContent>
        <div className='BookText'>
          <StyledCardContent>Book name:{bookName} </StyledCardContent>
          <StyledCardContent>By: {authorName}</StyledCardContent>
          <StyledCardContent>
            Publisher: {publisherName}
            Release year:{price}
          </StyledCardContent>
          <StyledCardContent>Price: {price}€</StyledCardContent>
        </div>
        {image}
        {isAdmin ? <div></div> : <CardActions>
          <Button size="small" color="primary">
            Buy book
        </Button>
        </CardActions>}
      </StyledCardContent>
    </StyledCard>
  );
}

export default AppCard;

