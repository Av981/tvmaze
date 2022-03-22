import React, { useState, useEffect } from "react";
import CatDisplay from "./categoriesList/catDisplay";
import Loading from "./categoriesList/loading";

const UseEffectAPI = () => {
  const [catlist, setCatList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://2zntp5nxb7.execute-api.ap-south-1.amazonaws.com/cat/category",
        { mode: "cors" }
      );
      setLoading(false);
      setCatList(await response.json());
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
      <CatDisplay catlist={catlist} />
    </>
  );
};

export default UseEffectAPI;
