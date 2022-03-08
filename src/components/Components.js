export default function Components() {
  return (
    <>
      <h1 className="brand-gradient">This is an h1</h1>
      <h2>Here an h2</h2>
      <h3>h3 over here</h3>
      <p>Here are the p's</p>
      <p className="p-all-caps">My all caps class</p>
      <p className="p-light-weight">This should be light</p>
      <p className="p-small">A small p here</p>
      <p className="p-small p-small-all-caps">A small but all caps</p>
      <button className="cta cta-is-hoverable">Redeem for 12.500</button>
      <button className="cta cta-disabled">Redeem for 12.500</button>
      <button className="cta cta-landing cta-is-hoverable">
        View Products
      </button>
      <button className="cta cta-is-hoverable cta-sort">Selected</button>
      <button className="cta cta-sort cta-not-selectd">Not selected</button>
      <button className="cta cta-is-hoverable cta-number">Selected</button>
      <button className="cta cta-number cta-not-selectd">Not selected</button>
      <button className="aeropay-dropdown brand-gradient">1000 ^</button>
    </>
  );
}
