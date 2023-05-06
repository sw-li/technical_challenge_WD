import "./MerchandiseDetails.css";
import Galaxy_S7 from "../../images/Galaxy_S7.png"

const MerchandiseDetails = (props) => {
    const { name, manufacturer, description, color, price, imageFileName, screen, processor, ram } = props.phone;

    return (
      <div className="wrapper">
        <div className="image">
          <img src={require(`../../images/${imageFileName}`)} alt={imageFileName} />
        </div>
  
        <div className="details">
          <p>Name: {name}</p>
          <p>Manufacturer: {manufacturer}</p>
          <p>Description: {description}</p>
          <p>Color: {color}</p>
          <p>Price: {price}$</p>
          <p>Screen: {screen}</p>
          <p>Processor: {processor}</p>
          <p>Ram: {ram}</p>
        </div>
  
      </div>
    );
};

export default MerchandiseDetails;