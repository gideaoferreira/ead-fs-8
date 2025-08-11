import { NavLink } from "react-router";
import AppCard from "../../components/card/AppCard";
import { productsMostSaled, productsMostVied } from "../../fake-data/fake-products"

function HomePage() {
    
    return (
        <>
            <h1>Home Page</h1>
            <hr />
            <div>
                <h4>Mais vistos</h4>
                <div className="d-flex flex-wrap gap-5">
                    {productsMostVied.map(product =>
                        <AppCard
                            key={product.id}
                            name={product.name}
                            image={product.image}
                            description={product.description}
                            productId={product.id}
                            width="18"
                    />
                )}
                </div>
            </div>
            <div className="mt-5">
                <h4>Mais vendidos</h4>
                <div className="d-flex flex-wrap gap-5">
                    {productsMostSaled.map(product =>
                        <AppCard
                            key={product.id}
                            name={product.name}
                            image={product.image}
                            productId={product.id}
                            width="11"
                    />
                )}
                </div>
            </div>
        </>
    )
}

export default HomePage;