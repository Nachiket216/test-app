import { createContext } from "react";
import { useState, useEffect } from "react";
export const TestContext = createContext();

export const TestProvider = ({ children }) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://mocki.io/v1/830c3d8e-e56f-4e05-a62f-01772672854a"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
        console.log(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <TestContext.Provider value={{ data, error, loading }}>
      {children}
    </TestContext.Provider>
  );
};
