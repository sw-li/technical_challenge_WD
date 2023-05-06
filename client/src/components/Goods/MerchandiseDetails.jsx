import "./MerchandiseDetails.css";
import Card from 'react-bootstrap/Card';


const MerchandiseDetails = (props) => {
    const { name, manufacturer, description, color, price, imageFileName, screen, processor, ram } = props.phone;

    return (

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require(`../../images/${imageFileName}`)} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="details">
          <p> <b>Manufacturer:</b>  {manufacturer}</p>
          <p> <b>Description:</b> <br /> {description}</p>
          <p> <b>Color:</b>  {color}</p>
          <p> <b>Price:</b>  {price}</p>
          <p> <b>Screen:</b>  {screen}</p>
          <p> <b>Processor:</b>  {processor}</p>
          <p> <b>Ram:</b>  {ram}</p>
        </Card.Text>

      </Card.Body>
    </Card>
    );
};

export default MerchandiseDetails;