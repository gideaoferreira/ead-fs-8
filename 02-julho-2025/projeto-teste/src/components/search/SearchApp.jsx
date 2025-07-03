import { useState } from "react";

function SeachApp() {
    const [search, setSearch] = useState('')

    function handleSearchChange(event) {
        setSearch(event.target.value);
    }

    function handleSearchSubmit() {
        console.log('Buscando por:', search);
    }
    return (
        <>
            <p>Palavra buscada: { search }</p>
            <div className="search">
                <input type="text" onChange={handleSearchChange}/>
                <button type="button" onClick={handleSearchSubmit}>Buscar</button>
            </div>
        </>
    )
}

export default SeachApp;