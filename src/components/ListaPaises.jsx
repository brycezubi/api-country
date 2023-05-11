import Pais from "./Pais"

const ListaPaises = ({datos}) => {
  return (
    <>
      <section className="grilla py-10">
        {
          datos.length > 0 ? 
          datos.map( pais =>(
            <Pais key={pais.numericCode} pais={pais}/>
          )) : 
          <h2 className="text-center text-2xl dark:text-white font-semibold">No se encontraron resultados</h2>
        }
      </section>
    </>
  )
}

export default ListaPaises