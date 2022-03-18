import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import Loading from "./tvmaze/loading";
import TvmazeUsers from "./tvmaze/tvmazeUsers";
import TvmazeMovie from "./tvmazemovie";

const UseEffectAPI = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
      setLoading(false);
      setUsers(await response.json());
    } catch (error) {
      setLoading(false);
      console.log("my error is " + error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
    <Switch>
      <Route exact path='/'><TvmazeUsers users={users}/></Route>
      <Route path='/movie'><TvmazeMovie users={users}/> </Route>
    </Switch>
    </>
  );
};

export default UseEffectAPI;
