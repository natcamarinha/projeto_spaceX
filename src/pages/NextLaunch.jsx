import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../api";
import LaunchCard from "../components/LaunchCard";

function NextLaunch() {
  const [next, setNext] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await api.get('/upcoming');
        console.log(data);
        setNext(data);
      } catch (error) {
        return error;
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <h3 className="title">Próximos Lançamentos</h3>
        {next.map((launch) => (
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

export default NextLaunch;
