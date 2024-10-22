import { useContext } from "react";
import { TestContext } from "../main";

export const Home = () => {
  const { data, error, loading } = useContext(TestContext);
  return (
    <>
      <h1>This is Home</h1>
      <h3>This is the data provided by the api "{data.item.toUpperCase()}"</h3>
    </>
  );
};
