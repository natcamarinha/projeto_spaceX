import React from "react";
import { useHistory } from 'react-router-dom';
import '../style/LaunchCard.css';

function Header() {
  const history = useHistory();

 return (
   <div>
    <h2 className="main-title">SpaceX</h2>
    <button
      type="button"
      onClick={ () => history.push('/next') }
    >
      Próximos Lançamentos
    </button>
    <button
      type="button"
      onClick={ () => history.push('/past') }
    >
      Últimos Lançamentos
    </button>
   </div>
 )
};

export default Header;