import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Nombre from "../components/Nombre";
import ItemListContainer from "../components/ItemListContainer";
import {useParams} from "react-router-dom"



function Root() {
  const params = useParams()
  const isCategoryRoute = Boolean(params.id);

  
  
  return (
    <div>
      <Nombre/>
      
      <Header/>

      <NavBar/>

      <ItemListContainer 
        isCategoryRoute={isCategoryRoute} 
        categoryId={params.id}
      />
    </div>
  );
}




export default Root