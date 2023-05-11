export const obtenerPaises = async()=>{
  const url = 'http://localhost:3000/paises'

  try {
    const respuesta = await fetch(url)

    if(!respuesta.ok) throw new Response('Error al consultar la url')
    const resultado = respuesta.json()
    return resultado
    
  } catch (error) {
    console.log(error)
  }

}

export const obtenerPaisesId = async(id)=>{
  const url = 'http://localhost:3000/paises'

  try {
    const respuesta = await fetch(`${url}?numericCode=${id}`)
    if(!respuesta.ok) throw new Response('Error al consultar la url')
    const resultado = await respuesta.json()
    return resultado

  } catch (error) {
    console.log(error)
  }

}