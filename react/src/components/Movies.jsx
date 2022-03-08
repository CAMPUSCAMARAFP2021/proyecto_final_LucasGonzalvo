import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Movie = ({movie, onDelete}) =>  
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{movie.name}</Card.Title>
            <Card.Title>{movie.year}</Card.Title>
            <Card.Text>plot:{movie.plot}€</Card.Text>
            <Button variant="primary" onClick={onDelete}>Eliminar</Button>
        </Card.Body>
    </Card>

export default Movie;