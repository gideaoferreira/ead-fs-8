import { useParams } from 'react-router'
import { products } from "../../../fake-data/fake-products"
function ProductDetailsPage() {
    const { id } = useParams()

    const product = products.find((item) => Number(id) === item.id)
    return (
        <>
            <h1> Página de detalhe do produto </h1>
            <hr />
            <h4>{product ? product.name : "não encontrado"}</h4>
            <p>{ product ? product.description  : ""}</p>
        </>
    )
}

export default ProductDetailsPage