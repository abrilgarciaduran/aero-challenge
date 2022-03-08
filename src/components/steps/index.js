import StepsCard from "./StepsCard";
import stepOneImg from "../../assets/illustrations/walkthroug-1-desktop.png"
import stepTwoImg from '../../assets/illustrations/walkthroug-2-desktop.png'
import stepThreeImg from '../../assets/illustrations/walkthroug-3-desktop.png'


export default function Steps() {
    const stepsData = [
        {step: "1—browse",
        description: "Browse our tech catalog with more than 20 top tech products",
        img: stepOneImg
        },
        {step: "2—choose",
        description: "Exchange your hard earned AeroPoints for the item you want",
        img: stepTwoImg
        },
        {step: "3—enjoy!",
        description: "All done, you can relax! We’ll take care of delivery of your tech item!",
        img: stepThreeImg
        }
    ]

    return(
        <section className="my-6">
            <div className="background"></div>
            <div className="is-flex is-justify-content-center">
                <StepsCard step={stepsData[0].step} description={stepsData[0].description} img={stepsData[0].img}/>
                <StepsCard step={stepsData[1].step} description={stepsData[1].description} img={stepsData[1].img}/>
                <StepsCard step={stepsData[2].step} description={stepsData[2].description} img={stepsData[2].img}/>

            </div>
        </section>
    );
}