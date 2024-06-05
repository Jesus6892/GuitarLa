import { useEffect, useState } from "react";
import Guitar from "./Guitar";
import { db } from "../../Data/db";

const Main = () => {
  const [guitars, setGuitars] = useState([]);

  setTimeout(() => {
    setGuitars(db);
  }, 3000);

  return (
    <>
      <main className="flex-grow container-xl mt-5">
        <h2 className="text-center ">Nuestra Colección</h2>

        <div className="row mt-5">
          {guitars.length === 0 ? (
            <p className="text-center text-4xl">Cargando...</p>
          ) : (
            guitars.map((guitar) => {
              return <Guitar guitar={guitar} key={guitar.id} />;
            })
          )}
        </div>
      </main>
    </>
  );
};

export default Main;
