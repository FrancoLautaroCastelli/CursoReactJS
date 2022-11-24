import { Link } from "react-router-dom";
import {useContext} from "react";
import cartContext from "../storage/CartContext";
function NavBar ()
{
  const { totalItemsInCart } = useContext(cartContext);
    return(
    <>
      <div className="navbar bg-base-100 mb-6">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">LauchaTShirt</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li><Link to="/category/Champions">Champions League</Link></li>
          <li><Link to="/category/Europa">Europa League</Link></li>
          <li><Link to="/category/Conference">Conference League</Link></li>
        </ul>
      </div>
        <div className="navbar-start">
      </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="https://placeimg.com/192/192/people" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                {(totalItemsInCart()) > 0 ? <span className="badge badge-sm indicator-item">{totalItemsInCart()} </span>: <></> }
                
              </div>
            </label>
            <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body">
                <span className="font-bold text-lg">{(totalItemsInCart()) > 0 ? totalItemsInCart(): "Sin " } Items</span>
                <span className="text-info">Subtotal: $999</span>
                  <Link to="/cart">
                    <div className="card-actions">
                        <button className="btn btn-primary btn-block">Ver carrito</button>
                    </div>
                  </Link>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="" src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Perfil
                  <span className="badge">Nuevo</span>
                </a>
              </li>
              <li><a>Configuracion</a></li>
              <li><a>Cerrar sesion</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
    )
}

export default NavBar;