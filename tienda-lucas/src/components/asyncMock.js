const products = [
    {
        id: "1",
        name: "Remeras Talle xxl",
        precio: 2500,
        category: "Remeras",
        img: "https://www.segucentro.com.ar/images_prod/remeras_1.jpg",
        stock: 20,
        descripcion: "remeras de talles entre xxl y xxxl",
    },

    {
        id: "2",
        name: "Pantalones de Jean",
        precio: 4500,
        category: "Pantalones",
        img: "https://www.latercera.com/resizer/VSDjOBcnC-YbdqCqt-6H1fP87BQ=/1200x630/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/EVGVKYPDUNDX3GWRUQNFI3XKW4.jpg",
        stock: 10,
        descripcion: "pantalones de jean de distintos talles",
    },

    {
        id: "3",
        name: "Calzado Deportivo",
        precio: 6000,
        category: "Calzados",
        img: "https://www.gimnasiosigueiro.com/sites/default/files/field/image/Zapatillas-Nike-700x500.jpg",
        stock: 6,
        descripcion: "Pares de calzado para deportes",
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },1000)
    })
}