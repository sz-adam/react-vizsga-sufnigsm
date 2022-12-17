import '../styles/Calculation.css'
import { ProductsContext } from '../context/ProductsContext';
import { useContext, useState } from 'react'
import axios from 'axios';
import NewProduct from "../components/NewProduct"
import Phone from '../assets/phone.jpg'





export default function Calculation(props) {
  const { products, setProducts } = useContext(ProductsContext)
  const [newPhone, setNewPhone] = useState(null)

  function handleSubmit(event) {
    event.preventDefault();

    let newData = {
      brand: event.target.brand.value,
      model: event.target.model.value,
      os: event.target.os.value,
      releaseYear: event.target.releaseYear.value,
      startScore: event.target.score.value,
      startPrice: event.target.startPrice.value,
      condition: event.target.condition.value,
    }

    axios.get(`https://softcamp.hu/webler/arkalkulator.php?brand=${newData.brand}&model=${newData.model}&os=${newData.os}&releaseYear=${newData.releaseYear}&startScore=${newData.startScore}&startPrice=${newData.startPrice}&condition=${newData.condition}`)
      .then(res => !res.data.error ? setNewPhone(res.data.data) : alert(res.data.error))
      .catch(err => alert(err))


  }

  return (

    <div className='home' style={{ backgroundImage: `url(${Phone})` }}>

      <div className="Calculation-left">
        <form onSubmit={handleSubmit}>
          <label className="Calculation-label">
            A telefon gyártója <br />
            <input className="Calculation-input" type="text" placeholder="A telefon gyártója" name="brand" autoComplete="off" defaultValue={products ? products.brand : ""} required />
          </label>

          <label className="Calculation-label">
            A telefon pontos típusa <br />
            <input className="Calculation-input" type="text" placeholder="A telefon pontos típusa" name="model" autoComplete="off" defaultValue={products ? products.model : ""} required />
          </label>

          <label className="Calculation-label">
            Operációs rendszer <br />
            <input className="Calculation-input" type="text" placeholder="operációs rendszer" name="os" autoComplete="off" defaultValue={products ? products.os : ""} required />
          </label>

          <label className="Calculation-label">
            A telefon megjelenésének dátuma <br />
            <input className="Calculation-input" type="number" placeholder="A telefon megjelenésének dátuma" min={2000} max={2023} name="releaseYear" autoComplete="off" defaultValue={products ? products.releaseYear : ""} required />
          </label>

          <label className="Calculation-label">
            A telefon megjelenésének időpontjában mennyire volt jó  <br />
            <input className="Calculation-input" type="number" placeholder="Mennyire volt jó a telefon " name="score" autoComplete="off" min={0} max={10} defaultValue={products ? products.score : ""} required />
          </label>

          <label className="Calculation-label">
            Ár <br />
            <input className="Calculation-input" type="number" placeholder="ára" name="startPrice" autoComplete="off" defaultValue={products ? products.startPrice : ""} required />
          </label>

          <label className="Calculation-label">
            A telefon jelenlegi állapota <br />
            <input className="Calculation-input" type="number" placeholder="A telefon jelenlegi állapota" min={0} max={100} name="condition" autoComplete="off" required />
          </label>


          <button type='submit' className='Calculation-button'>Ellenörzés</button>


        </form>
      </div>
      <div className="Calculation-right">

        {newPhone && <NewProduct phone={newPhone} key={newPhone.model} />}

      </div>
    </div>
  )
}
