import React from 'react';
import './Player.css'
import { Card,Button} from 'react-bootstrap';

const Player = ({name,team,nationality,image,jerseyNumber}) => {
    return (
       <>
       <div>
        
       <Card style={{ width: '18rem' }} className='cardStyle'>
      <Card.Img variant="top" className='img' src={image} />
      <Card.Body>
        <Card.Title>Nom: {name}</Card.Title>
        <Card.Text>
          <p>Equipe: {team}</p>
          <p> Nationalité: {nationality}</p>
          <p>Numero: {jerseyNumber}</p>
        </Card.Text>
        <Button variant="primary">FIFA¤2023</Button>
      </Card.Body>
    </Card>

       </div>
       </>
        
       

    );
};

export default Player;