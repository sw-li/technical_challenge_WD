import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./GoodsPage.css";
import apiService from "../../services/api.service";
import { Audio } from "react-loader-spinner";
import {Button} from "react-bootstrap"
import MerchandiseDetails from "../../components/Goods/MerchandiseDetails";

function GoodsPage() {
  const [allPhones, setAllPhones] = useState([]);
  const [activePhone, setActivePhone] = useState(null);

  useEffect(() => {
    apiService.getAllPhones().then((allPhones) => {
      // console.log(allPhones.data);
      setAllPhones(allPhones.data);
    });
  }, []);

  const handleClick = (event,id) => {
    event.preventDefault();
    apiService.getPhoneById(id).then((phone) => {
      console.log(phone.data)
      setActivePhone(phone.data);
    });
  };

  return (
    <div>
      <h1>Available models:</h1>
      <div className="allGoods">
      
      {allPhones ? (allPhones.map((phone) => <Button variant="light" style={{"width":"100%"}} key={phone.name} onClick={(e) => handleClick(e,phone._id)}>{phone.name}</Button>))
        : (
          <Audio
            height="30"
            width="30"
            color="#4fa94d"
            ariaLabel="audio-loading"
            wrapperClass="wrapper-class"
            visible={true}
          />
        )}
      </div>
        
      <div className="goodDetails">
        {activePhone ? (
          <MerchandiseDetails phone={activePhone} />  
        ):(
          <>
          <h1><Audio
            height="30"
            width="30"
            color="#4fa94d"
            ariaLabel="audio-loading"
            wrapperClass="wrapper-class"
            visible={true}
          />Select one phone from the list to see its details</h1>
          </>
        )}
      </div>
    </div>
  );
}

export default GoodsPage;
