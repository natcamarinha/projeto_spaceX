import React from "react";
import { useHistory } from 'react-router-dom';
import '../style/LaunchCard.css';

function Header() {
  const history = useHistory();

 return (
   <div className="header">
    <h2 className="main-title">SpaceX</h2>
    <button
      type="button"
      onClick={ () => history.push('/next') }
      className="btn"
    >
      Próximos Lançamentos
    </button>
    <button
      type="button"
      onClick={ () => history.push('/past') }
      className="btn"
    >
      Últimos Lançamentos
    </button>
   </div>
 )
};

export default Header;