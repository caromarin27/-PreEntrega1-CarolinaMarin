

const ItemDetail = ({id, title, description, price, pictureUrl}) => {
  return (
    <div className="py-20">
      <div key={id} className="container px-4 mx-auto">
        <div className="max-w-xl lg:max-w-6xl mx-auto">
          <div className="flex flex-wrap -mx-4 mb-12">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <img src={pictureUrl} className="img-fluid w-full h-full object-cover rounded-md border-2"/>
            </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="max-w-lg">
              <h2 className="text-3xl font-black mb-1"> {title}</h2>
              <h3 className="block text-2xl font-bold mb-5">ARS ${price}</h3>
              <p><span className="font-bold mb-2">ID: </span>{id}</p>
              <p><span className="font-bold mb-2">Descripcion</span> {description}</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail