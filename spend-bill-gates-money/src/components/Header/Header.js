import ImgBillGates from '../../assets/billgates.jpg';
import './Header.css';

function Header() {
  return (
    <div className="container">
      <div>
        <img src={ImgBillGates} alt="Bill Gates" style={{borderRadius:"50%" , width:"150px"}} />
        <h1>Spend Bill Gates Money</h1>
      </div>
    </div>
  );
}

export default Header;
