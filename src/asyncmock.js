const products = [
  {id:"1", title: 'Pouch River Salmon Gato - 100 Gr', description: 'Alimento para gatos adultos', price: 330, pictureUrl: '../src/assets/img/pouch-cat-100gr.webp', idCategory: '1'},
  {id:"2", title: 'Alimento Royal Canin Fit 32 - 7,5 Kg', description: 'Alimento para gatos adultos', price: 19800, pictureUrl: '../src/assets/img/royal-canin-fit.webp', idCategory: '1'},
  {id:"3", title: 'Lata Sieger Pollo Para Gatito - 90 Gr', description: 'Alimento para gatos adultos', price: 380, pictureUrl: '../src/assets/img/lata-siger-para-gatitos-70gr.webp', idCategory: '1'},
  {id:"4", title: 'Whiskas Gatitos Sabor Carne - 85gr', description: 'Alimento para gatitos', price: 600, pictureUrl: '../src/assets/img/Whiskas-sobre-Gatito-Carne.webp', idCategory: '1'},
  {id:"5", title: 'Whiskas Gatitos Sabor Salmon - 85gr', description: 'Alimento para gatitos', price: 600, pictureUrl: '../src/assets/img/Whiskas-sobre-Gatito-Carne.webp', idCategory: '1'},
  {id:"6", title: 'Cama Huella Paris Chocolate - L', description: 'Cama color chocolate', price: 17994, pictureUrl: '../src/assets/img/cama-huella-l.webp', idCategory: '2'},
  {id:"7", title: 'Cañita Puppis Raton', description: 'Cañita para gatitos', price: 1161, pictureUrl: '../src/assets/img/cana-gatitos.webp', idCategory: '2'},
  {id:"8", title: 'Juguete con Hierba Gatera Rascals Pez - 15cm', description: 'Juguete con hierba catnip para gatitos', price: 3190, pictureUrl: '../src/assets/img/juguete-con-catnip.webp', idCategory: '2'},
  {id:"9", title: 'Comedero Puppis Acero Inoxidable - 0.45 L', description: 'Comedero de acero para gatitos', price: 1850, pictureUrl: '../src/assets/img/comedero-de-acero.webp', idCategory: '2'},
  {id:"10", title: 'Transportadora Dogit Voyageur Gris - Nº200', description: 'Transportadora duradera, segura y resistente', price: 14000, pictureUrl: '../src/assets/img/transportadora-gris.webp', idCategory: '2'},
  {id:"11", title: 'Rodillo Adhesivo Ferplast - Único', description: 'Rodillo quita pelusas', price: 1300, pictureUrl: '../src/assets/img/rodillo-adhesivo.webp', idCategory: '3'},
  {id:"12", title: 'Cardina Rast Curvo - M', description: 'Cepillo', price: 2100, pictureUrl: '../src/assets/img/cepillo-cardina.webp', idCategory: '3'},
  {id:"13", title: 'Piedras Sanitarias Alta Gama Absorsol - 3,6 Kg', description: 'Piedras sanitarias', price: 990, pictureUrl: '../src/assets/img/piedritas-sanitarias-alta-gama-negra-4kg.webp', idCategory: '3'},
  {id:"14", title: 'Piedras Sanitarias Golden Breeze Natural Super Premium - 15 Kg', description: 'Piedras sanitarias de 15kg', price: 3900, pictureUrl: '../src/assets/img/piedras-sanitarias-golden-15kg.webp', idCategory: '3'},
  {id:"15", title: 'Shampoo Algas Vitalizador Y Abrillantador Osspret - 250 Cc', description: 'Shampoo de algas', price: 1870, pictureUrl: '../src/assets/img/shampoo-de-algas.webp', idCategory: '3'},
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout( () => {
      resolve(products)
    }, 2000)
  })
}

//create new function similar to getProduct but, returning one item

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
     const product = products.find(prod => prod.id === id);
     resolve(product)
    }, 2000)
  })
}

export const getProductByCategory = (idCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productCategory = products.filter(prod => prod.idCategory === idCategory)
      resolve(productCategory)
    },2000)
  })
}