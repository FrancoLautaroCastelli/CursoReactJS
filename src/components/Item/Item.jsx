import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount';

function Item ({products}) 
{   
    let urlDetail= `/item/${products.id}`
    return(
        <>
            <div className="card w-64 bg-base-100 shadow-xl ml-6 mb-1">
                <figure className="px-10 pt-10">
                    <img src={products.imagen} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{products.title}</h2>
                    <ItemCount   stock={products.stock} />
                    <p>{products.descripcion}</p>
                    {
                        products.discount? <h4 className="text-green-500">Descuento: {products.discount}%</h4> : <></>
                    }
                    <p>${products.precio}</p>
                    <div className="card-actions">
                        <Link to={urlDetail}>
                             <button className="btn btn-primary">Ver Detalles</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Item