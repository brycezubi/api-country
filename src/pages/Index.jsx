import { useLoaderData } from "react-router-dom";
import { obtenerPaises } from "../services/paises";
import Formulario from "../components/Formulario";
import ListaPaises from "../components/ListaPaises";
import { useState } from "react";

export async function loader() {
  const paises = await obtenerPaises();
  return paises;
}

const Index = () => {
  const datos = useLoaderData();

  const [paises] = useState(datos);
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");




  const paisesBusqueda = !query
    ? paises
    : paises.filter((pais) =>
        pais.name.toLowerCase().includes(query.toLowerCase())
      );

  const paisesFiltrados =  !region ? paisesBusqueda : paisesBusqueda.filter(pais => pais.region === region)



  return (
    <>
      <Formulario
        region={region}
        setRegion={setRegion}
        query={query}
        setQuery={setQuery}
      />
      {/* <ListaPaises datos={filterRegion(paisesBusqueda)} /> */}
      <ListaPaises datos={paisesFiltrados} />

     
    </>
  );
};

export default Index;
