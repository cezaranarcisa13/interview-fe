import * as React from 'react';
import PropTypes from 'prop-types';
import { propOr } from 'ramda';
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
            {`${propOr("", "name")(user)}  ${propOr("", "last")(user)}`}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

CardComponent.propTypes = {
  info: PropTypes.object
};

CardComponent.defaultProps ={
  info:{}
}

export default CardComponent;