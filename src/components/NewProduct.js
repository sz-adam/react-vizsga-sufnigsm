import axios from 'axios'
import 'boxicons'
import { useContext, useEffect, useState } from 'react'
import { CurrencyContext } from '../context/CurrencyContext'
import '../styles/NewProduct.css'

export default function NewProducts({ phone }) {
    const { currency, setCurrency } = useContext(CurrencyContext)

    function selectCurrency(event) {
        event.preventDefault();

        setCurrency(list.find(valutes => valutes.name === event.target.value))

    }


    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get("https://api.coinstats.app/public/v1/fiats")
            .then(res => {

                setList(res.data);
            });
    }, []);


    return (

        <div className='newProduct'>
            <table className='newProductList'>
                <thead key={phone.brand} >
                    <tr>
                        <th >Név</th>
                        <th >Model</th>
                        <th >Os</th>
                        <th >Évek</th>
                        <th >Árak</th>
                        <th>Ajánlott ár</th>
                    </tr>
                </thead>


                <tbody key={phone.model}>

                    <tr>
                        <td >{phone.brand}</td>
                        <td >{phone.model}</td>
                        <td >{phone.os}</td>
                        <td >{phone.details.map((element, i) => <div key={i} > {element.year}</div>)}</td>
                        <td >{phone.details.map((element, i) => <div key={i} > {Math.round((((element.price) * currency.rate * 1000)) / 1000)} {currency.symbol}</div>)} </td>
                        <td className='result'>{Math.round((((phone.recommendedPrice) * currency.rate * 1000)) / 1000)} {currency.symbol}</td>
                    </tr>

                </tbody>
            </table>
            <select value={currency.name} onChange={selectCurrency} className='select'>
                {
                    list.map((listt, index) =>
                        <option className='selectOption' key={index}  >{listt.name}
                        </option>)

                }


            </select>

        </div>



    )
}




