

function ItemListContainer(props) {

    return(
        <div>
            <h2 className='tituloLista'>Listado de productos</h2>
            <div className='card-item'>
                <h2>{props.title}</h2>
                <p>Precio: {props.price}</p>
                <p>Talle: {props.talle}</p>
                <button>Comprar</button>
            </div>   
        </div>
    )
}

export default ItemListContainer;