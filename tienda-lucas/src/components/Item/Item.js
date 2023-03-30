const Item = ({name, img, precio, descripcion}) => {
    return(
        <div style={{backgroundColor:"aqua"}}>
            <h4>{name}</h4>
            <img src={img} alt={name} style={{width: 150}}/>
            <p>descripcion: {descripcion}</p>
            <p>precio: ${precio}</p>
        </div>
    )
}

export default Item