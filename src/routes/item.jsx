import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Nombre from "../components/Nombre";
import ItemDetailContainer from "../components/ItemDetailContainer";





function ItemRoot() { 
  

  return (
    <div>
      <Nombre/>
      
      <Header/>

      <NavBar/>

      <ItemDetailContainer/>
    </div>
  );
}




export default ItemRoot