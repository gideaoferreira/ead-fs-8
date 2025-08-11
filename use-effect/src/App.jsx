import { useEffect, useState } from "react"

function App() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('')
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  useEffect(() => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
      .then(response => response.json())
      .then(response => setStates(response))
  },[])

  useEffect(() => {
    console.log("Um estado foi selecionado", selectedState)
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedState}/municipios`)
      .then(response => response.json())
      .then(response => setCities(response))
  }, [selectedState])

  useEffect(() => {
    console.log("Aceite de termo", acceptedTerms)
  }, [acceptedTerms])

  return (
    <>
      <h1>useEffect</h1>  
      <div>
        <form action="">
          <div>
            <span>Selecione o estado</span>
            <select onChange={(event) => setSelectedState(event.target.value)}>
              <option value="">Estados...</option>
              {
                states.map((state, index) =>
                  <option
                    key={index}
                    value={state.sigla}
                  >
                    {state.nome}
                  </option>)
              }
            </select>
          </div>
          <div>
            <span>Selecione uma cidade</span>
            <select disabled={!selectedState} onChange={(event) => setSelectedCity(event.target.value)}>
              <option value="">Cidades...</option>
              {
                cities.map((city, index) =>
                  <option
                    key={index}
                    value={city.sigla}
                  >
                    {city.nome}
                  </option>)
              }
            </select>
          </div>
          <div>
            <label> Bairro </label>
            <input type="text" />
          </div>
          <div>
            <label> Concordo com os termos </label>
            <input disabled={!selectedCity} type="checkbox" onChange={(event) => setAcceptedTerms(event.target.checked)}/>
          </div>
          <div>
            <button disabled={!acceptedTerms}> Enviar </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
