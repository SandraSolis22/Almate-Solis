import ItemCount from './ItemCount'

function ItemListContainer({props}) {

    return(
        <div>
            <h2 className='tituloLista'>Listado de productos</h2>
            <div className='card-item'>
                <h2>{props.titulo}</h2>
                <img src={`./${props.imagen}`} alt={props.imagen}/>
                <p>Precio: {props.precio}</p>
                <ItemCount stock={props.stock}/>
            </div>   
        </div>
    )
}

export default ItemListContainer;