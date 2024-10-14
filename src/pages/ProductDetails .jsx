import { useParams } from "react-router-dom";
import { getProductById } from "../fakeApi";

export default function ProductDetails() {
  const { productId } = useParams();
  const product = getProductById(productId);

  // Проверка на случай, если продукт не найден
  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <main>
      <img src="https://placehold.co/960x240" alt="Product placeholder" />
      <div>
        <h2>
          Product - {product.name} - {productId}
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </p>
      </div>
    </main>
  );
}
