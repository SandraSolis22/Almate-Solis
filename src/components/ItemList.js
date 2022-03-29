import Item from './Item'



function ItemList({productos}) {

    return(
        <div className='lista'>
            {productos.map( (producto) => {
                const {id} = producto
                return (
                    <div key ={id}>
                        <Item props={producto}/>
                    </div>  
                )
            })}
            
        </div>   

    )
}

export default ItemList;