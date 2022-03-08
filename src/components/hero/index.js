import heroDesktop from '../../assets/illustrations/hero-desktop.png'

export default function TheHero() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-align-items-center">
          <div className="column has-text-left">
            <p className="p-all-caps neutral-600">Explore the</p>
            <h1>
              <span className="brand-gradient">tech</span>
              <br />
              zone
            </h1>
            <p className="neutral-600 my-5">
              Here you’ll be able to exchange all of your hard-earned Aeropoints
              and exchange them for cool tech.
            </p>
            <button className='cta cta-landing cta-is-hoverable my-6'>View all products</button>
          </div>
          <div className="column">
            <img
              src={heroDesktop}
              alt="Tech boy admiring tech products"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
