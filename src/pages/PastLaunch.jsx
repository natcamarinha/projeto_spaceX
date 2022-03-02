import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import api from "../api";
import LaunchCard from "../components/LaunchCard";

function PastLaunch() {
  const [past, setPast] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await api.get('/past');
        console.log(data);
        setPast(data);
      } catch (error) {
        return error;
      }
    };
    getData();
  }, []);

  return (
    <>
      <div>
        <h3 className="title">Últimos Lançamentos</h3>
        {past.map((launch) => (
          <LaunchCard key={launch.name} launch={launch} />
        ))}
      </div>

      <button
        type="button"
        onClick={ () => history.push('/')}
      >
        Voltar
      </button>
    
    </>
  )
};

export default PastLaunch;
