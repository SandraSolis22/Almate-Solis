import React,{useState} from "react";


const ItemCount = ({stock}) => {
    const [count, setCount] = useState(1)

    const agregarCant = () => {
        setCount(count + 1)
    }

    const restarCant = () => {
        setCount(count - 1)
    }

    const agregarCarrito = () => {
        alert(`Se ha agregado ${count} elementos al carrito`)
    }

    return(
        <div>
            <div className='cantItem'>
                <button onClick={restarCant} disabled = {count === 1}>-</button>
                <p>{count}</p>
                <button onClick={agregarCant} disabled = {count === stock}>+</button>
            </div>
            <button onClick={agregarCarrito}>Agregar al carrito</button>
        </div>
    )


}

export default ItemCount