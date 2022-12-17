import { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext';

export default function PhoneData({ phone }) {


    const { products, setProducts } = useContext(ProductsContext)

    function handleActive() {
        products === null ? products(null) : setProducts(phone)
        
    }

    return (

        <div onClick={handleActive} className={(products === phone) ? "menuItem-active" : "menuItem"}  >


            <div>{phone.brand}</div>
            <div> Model: {phone.model}</div>
            <div>Rendszer : {phone.os}</div>
            <div>Megjelenés: {phone.releaseYear}</div>
            <div>Mennyire volt jó : {phone.score}</div>
            <div>Nyitó ár: {phone.startPrice}</div>


        </div >

    )
}
