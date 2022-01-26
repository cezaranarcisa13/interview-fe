import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./card-component.css"

const CardComponent = ({ info }) => {
  const { message, user } = info;
  return (
    <div className='card'>
      <Card >
        <CardContent>
          <Typography color="text.secondary" gutterBottom>
            Message card
          </Typography>
          <Typography variant="body2">
            {message}
          </Typography>
          <Typography color="text.secondary">
            For user
          </Typography>
          <Typography variant="body2">
            {`${user.name}  ${user.last}`}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}


export default CardComponent;