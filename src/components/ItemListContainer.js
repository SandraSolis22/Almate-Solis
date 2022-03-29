import ItemList from './ItemList'
import React,{useState, useEffect} from 'react'

//Defino Mocks a utilizar
const mockMates = [{
    id: 1,
    titulo : 'Mate Sandía',
    precio : '$500',
    imagen : 'MateSandia.jpeg',
    stock : 3
    },
    {id: 2,
    titulo : 'Mate Cactus',
    precio : '$500',
    imagen : 'MateCactus.jpeg',
    stock : 2
    },
    {id: 3,
    titulo : 'Mate Ramones',
    precio : '$500',
    imagen : 'MateRamones.jpeg',
    stock : 1
    },
    {id: 4,
    titulo : 'Mate Estrella',
    precio : '$500',
    imagen : 'MateEstrella.jpeg',
    stock : 5
    },
    {id: 5,
    titulo : 'Mate Oconnor',
    precio : '$500',
    imagen : 'MateOconnor.jpeg',
    stock : 2
    },
    {id: 6,
    titulo : 'Mate Personaje',
    precio : '$500',
    imagen : 'MatePersonaje.jpeg',
    stock : 4
    },
    {id: 7,
    titulo : 'Mate Colores',
    precio : '$500',
    imagen : 'MateColores.jpeg',
    stock : 1
    }
]

const mockMatesCubo = [{
    id: 1,
    titulo : 'Mate Cactus',
    precio : '$600',
    imagen : 'MateCuboCactus.jpeg',
    stock : 3
    },
    {id: 2,
    titulo : 'Mate Mandala',
    precio : '$600',
    imagen : 'MateCuboMandala.jpeg',
    stock : 3
    },
    {id: 3,
    titulo : 'Mate Frida',
    precio : '$600',
    imagen : 'MateCuboFrida.jpeg',
    stock : 2
    }
]

const mockSetMate = [{
    id: 1,
    titulo : 'Set Estrella',
    precio : '$1200',
    imagen : 'SetEstrella.jpeg',
    stock : 3
    },
    {id: 2,
    titulo : 'Set Mandala',
    precio : '$1200',
    imagen : 'SetMandala.jpeg',
    stock : 1
    },
    {id: 3,
    titulo : 'Set Mandala Full Color',
    precio : '$1300',
    imagen : 'SetMandalaColor.jpeg',
    stock : 2
    },
    {id: 4,
    titulo : 'Set Norte',
    precio : '$1200',
    imagen : 'SetNorte.jpeg',
    stock : 2
    },
    {id: 5,
    titulo : 'Set Sandia',
    precio : '$1200',
    imagen : 'SetSandia.jpeg',
    stock : 2
    },
    {id: 6,
    titulo : 'Set Personalizado',
    precio : '$1400',
    imagen : 'SetPersonalizado.jpeg',
    stock : 1
    }
]


function ItemListContainer() {
    //defino USESTATES
    const [mates, setMates] = useState([])
    const [matesCubo, setMatesCubo] = useState([])
    const [setsMates, setSetsMates] = useState([])

    //cargo mock Mates
    const getMates = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(mockMates)
            }, 2000)}
    )}
    useEffect( () => {
        getMates().then( (data) => {
            setMates(data)
        })
    }, [])

    //cargo Mock Mates Cubo
    const getMatesCubo = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(mockMatesCubo)
            }, 2000)}
    )}
    useEffect( () => {
        getMatesCubo().then( (data) => {
            setMatesCubo(data)
        })
    }, [])

    //cargo Mock Set Mates
    const getSetMate = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(mockSetMate)
            }, 2000)}
    )}
    useEffect( () => {
        getSetMate().then( (data) => {
            setSetsMates(data)
        })
    }, [])

    return(
        <div>
            <h2 className='tituloLista'>Listado de productos</h2>
            <h3 className='subtituloLista'>Mates</h3>
            <div className='seccion'>
                <ItemList productos={mates} />
            </div>   
            <h3 className='subtituloLista'>Mates Cubo</h3>
            <div className='seccion'>
                <ItemList productos={matesCubo} />
            </div>   
            <h3 className='subtituloLista'>Set Mates</h3>
            <div className='seccion'>
                <ItemList productos={setsMates} />
            </div>   
        </div>
    )
}

export default ItemListContainer;