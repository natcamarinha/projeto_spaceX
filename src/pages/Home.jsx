import React, { useState, useEffect } from 'react';
import api from  '../api';
import Header from '../components/Header';
import LaunchCard from '../components/LaunchCard';

function Home() {
  const [latest, setLatest] = useState({});
  const [next, setNext] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const getLatest = await api.get('/latest');
        const getNext = await api.get('/next')
        console.log(getLatest.data);
        console.log(getNext.data);
        setLatest(getLatest.data);
        setNext(getNext.data);
      } catch (error) {
        return error;
      }
    };
    getData();
  }, []);

 return (
   <>
    <Header />
   <div>
      <h3>Último Lançamento</h3>
      <LaunchCard launch={latest} />
    </div>
    <div>
      <h3>Próximo Lançamento</h3>
      <LaunchCard launch={next} />
    </div>
   </>
 )
};

export default Home;
