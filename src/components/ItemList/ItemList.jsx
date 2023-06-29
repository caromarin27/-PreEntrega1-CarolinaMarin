import Item from "../Item/Item"

const ItemList = ({products}) => {
  return (
    <div className="flex flex-wrap mb-4">
      {
        products.map(prod => <Item key={prod.id} {...prod} />)
      }
    </div>
  )
}

export default ItemList