import "./Header.css";
  
function Header() {
    return (     
          <div className="header container-fluid d-flex justify-content-center">
            <form type="text" className="header buscador d-flex justify-content-center" placeholder="Buscar">
              <input type="search" className="buscador" placeholder="Buscar" />  
            </form>
            
          </div>
          );
}

export default Header;