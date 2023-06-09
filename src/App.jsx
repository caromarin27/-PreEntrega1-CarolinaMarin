import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const App = () => {
  return (
    <>
     <NavBar/>
     <ItemListContainer 
      greeting={'Bienvenidos a Hummus Pet Store'}/>
    </>
  )
}

export default App