import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { fetchFirst100Pokemons } from "../store/reducers/PokeAPIReducer";
import { Button } from "@mui/material";

const Home = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.PokeAPI);

  const handleSearch = () => {
    dispatch(fetchFirst100Pokemons());
  };

  return (
    <>
      <Layout>Home</Layout>
      <Button onClick={handleSearch}>Get 100 pokes</Button>
      {JSON.stringify(data)}
    </>
  );
};

Home.propTypes = {};

export default Home;
