export default function ProductCard({ product }) {
  return (
    <div>
      <div className="card products-card has-text-left mx-4">
        <div className="card-image">
          <img src={product.img.url} alt="Step one: Browse" />
        </div>
        <div className="card-header">
          <p className="mx-4">{product.name}</p>
        </div>
        <div className="card-content">
          <p className="p-all-caps">{product.category}</p>
        </div>
      </div>
      <button className="cta cta-is-hoverable my-4">Redeem for 12.500</button>
    </div>
  );
}
