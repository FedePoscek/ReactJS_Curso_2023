import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {

  return (
    <div className='ItemContainer'>
      <div className='cardProducto'>
          <img className='imgProducto' src={img} alt={nombre} />
          <h3>{nombre} </h3>
          <p>U$S {precio} </p>
          <p>ID: {id} </p>
          <Link to={`/item/${id}`}>
            <button className='btnProducto'> Ver Detalles </button>
          </Link>
      </div>
    </div>
  )
}

export default Item

