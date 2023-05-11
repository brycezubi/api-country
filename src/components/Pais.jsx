import { NavLink } from "react-router-dom"

const Pais = ({pais}) => {

  const { name , population , region , capital , flag , numericCode} =  pais

  return (
    <article className="max-w-md bg-white dark:bg-slate-900 dark:text-white shadow rounded-md overflow-hidden">
    <img  className="block object-cover h-60 w-full" src={flag} alt={`flag-${name}`} />
    <section className="p-8">
      <h2 className="text-2xl font-bold">
        <NavLink to={`/pais/${numericCode}`}>{name}</NavLink>
      </h2>
      <div className="pt-4">
        <p><span className="font-semibold">Population:</span> {population.toLocaleString('en-US')}</p>
        <p><span className="font-semibold">Region:</span> {region}</p>
        <p><span className="font-semibold">Capital:</span> {capital}</p>
      </div>
    </section>
  </article>
  )
}

export default Pais