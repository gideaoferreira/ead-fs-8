import { NavLink } from "react-router"

function AppCard(props) {
    return (
        <>
            <div className="card" style={{width: props.width + 'rem'}}>
                <img src={props.image} className="card-img-top" alt={props.name} />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.description}</p>
                    <div className="d-flex w-full justify-content-between">
                        <NavLink className="btn btn-sm btn-primary" to={`/product-detail/${props.productId}`} > Ver produto </NavLink>
                        <NavLink className="btn btn-smbtn-outline-light" to="/" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-8 2a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
                            </svg>                        
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppCard