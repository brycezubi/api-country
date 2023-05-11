import { Link, useLoaderData } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { obtenerPaisesId } from "../services/paises";

export async function loader({ params }) {
  const id = params.paisName;
  const pais = await obtenerPaisesId(id);
  return pais;
}

const PaisInfo = () => {
  const paisDetail = useLoaderData();

  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders
  } = paisDetail[0];

  return (
    <section className="dark:text-white">
      <Link
        className="dark:shadow-md dark:bg-slate-700 flex gap-3 justify-center items-center bg-white shadow-md rounded-sm py-2 max-w-[120px] "
        to={"/"}
      >
        <BiArrowBack size={20} />
        Back
      </Link>

      <section className="flex flex-col gap-6 pt-14 lg:grid lg:grid-cols-2 lg:gap-x-24">
        <img src={flag} alt={`Flag-${name}`} />

        <div className="flex flex-col gap-6 lg:justify-self-center lg:self-center w-full lg:items-center">
          <h1 className="font-bold text-2xl">{name}</h1>

          <div className="flex flex-col gap-6 lg:w-full lg:flex-row lg:justify-evenly ">
            <ul>
              <li>
                <span className="font-semibold">Native Name: </span>
                {nativeName}
              </li>
              <li>
                <span className="font-semibold">Population: </span>
                {population.toLocaleString("en-US")}
              </li>
              <li>
                <span className="font-semibold">Region:</span> {region}
              </li>
              <li>
                <span className="font-semibold">Sub Region:</span> {subregion}
              </li>
              <li>
                <span className="font-semibold">Capital:</span> {capital}
              </li>
            </ul>
            <ul>
              <li>
                <span className="font-semibold">Top level Domain:</span>{" "}
                {topLevelDomain}
              </li>
              <li>
                <span className="font-semibold">Currencies:</span>{" "}
                {currencies[0].name}
              </li>
              <li>
                <span className="font-semibold">Languajes:</span> {languages[0].name}
              </li>
            </ul>
          </div>
          <h2 className="font-semibold text-xl">Border Countries</h2>
          <ul className="flex flex-wrap gap-4">
           {
            borders?.map( (border,index)=>{
              return (
               <li key={index} className="py-1 px-5 dark:bg-slate-700 shadow">{border}</li>
              )
            })
           }
          </ul>
        </div>
      </section>
    </section>
  );
};

export default PaisInfo;
