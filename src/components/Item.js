import ItemCount from './ItemCount'

function Item({props}) {

    return(
        <div>
            <div className='card-item'>
                <h2>{props.titulo}</h2>
                <img src={`./${props.imagen}`} alt={props.imagen}/>
                <p>Precio: {props.precio}</p>
                <ItemCount stock={props.stock}/>
            </div>   
        </div>
    )
}

export default Item;