import PhoneDatas from '../components/PhoneDatas'
import "../styles/Products.css"
import Phone from '../assets/phone.jpg'
const phoneData = require('../datasources/phones_schema.json')
export default function Products() {


    return (

        <div className="menu " style={{ backgroundImage: `url(${Phone})` }}>
            <div className="menuTitle"><h2>Telefonok</h2></div>
            <div className="menuList">
                {phoneData.map(phone => <PhoneDatas key={phone.id} phone={phone} />)}

            </div>
        </div>

    )
}