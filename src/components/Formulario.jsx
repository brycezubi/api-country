import {regiones} from '../data/region'


const Formulario = ({region , setRegion , query , setQuery}) => {

  const handleChangeRegion = (e)=>{
    setRegion(e.target.value)
  }

  return (
    <form className='flex flex-col gap-4 md:flex-row md:justify-between'>
      <input 
        value={query}
        onChange={e=>setQuery(e.target.value)}
        className='py-2 px-5 rounded-md shadow md:w-2/5'
        type="text" 
        placeholder="search for a country" 
      />
      <div>
        <select 
          onChange={handleChangeRegion}
          value={region}
          id="select" className='py-2 px-2  border rounded-md'>
          <option value="">Filter by region</option>
          {
            regiones?.map( region =>(
              <option key={region.id} value={region.value}>{region.name}</option>
            ))
          }
        </select>
      </div>
    </form>
  )
}

export default Formulario