export default function StepsCard( {step, description, img} ) {
    return(
        <div className="card steps-card m-5 has-text-left">
            <div className="card-image">
                <img src={img} alt={step}/>
            </div>
            <div className="card-header">
                <h3 className="brand-gradient m-4">{step}</h3>
            </div>
            <div className="card-content">
                <p>{description}</p>
            </div>
        </div>
    );
}