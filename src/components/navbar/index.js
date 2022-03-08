import logo from '../../assets/icons/aerolab-logo-1.svg'

export default function TheNavbar() {
  return (
    <header className="container">
      <nav className="is-flex is-justify-content-space-between is-align-content-center">
        <div>
          <img src={logo} alt="Aerolab" />
        </div>
        <div>
          <button className="aeropay-dropdown brand-gradient">1000 ^</button>
        </div>
      </nav>
    </header>
  );
}
