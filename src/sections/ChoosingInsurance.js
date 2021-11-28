import Card from "../components/Card";
import Title from "../components/Title";
import HomeInsurance from '../assets/img/home-insurance.svg';
import CardInsurance from '../assets/img/car-insurance.svg';
import LifeInsurance from '../assets/img/life-insurance.svg';
import BusinessInsurance from '../assets/img/business-insurance.svg';
import TravelInsurance from '../assets/img/travel-insurance.svg';
import OtherInsurance from '../assets/img/other-insurance.svg';

const dataCard = [
    {
        img: HomeInsurance,
        title: "Home Insurance",
        subtitle: "Insurance can have various effects on society through the way that it changes who bears the cost of losses and damage.",
        color: '#b0f3ff'
    },
    {
        img: CardInsurance,
        title: "Car Insurance",
        subtitle: "Insurance can have various effects on society through the way that it changes who bears the cost of losses and damage.",
        color: '#fbd1ff'
    },
    {
        img: LifeInsurance,
        title: "Life Insurance",
        subtitle: "Insurance can have various effects on society through the way that it changes who bears the cost of losses and damage.",
        color: '#daffd3'
    },
    {
        img: BusinessInsurance,
        title: "Business Insurance",
        subtitle: "Insurance can have various effects on society through the way that it changes who bears the cost of losses and damage.",
        color: '#fff4b4'
    },
    {
        img: TravelInsurance,
        title: "Travel Insurance",
        subtitle: "Insurance can have various effects on society through the way that it changes who bears the cost of losses and damage.",
        color: '#ffdad1'
    },
    {
        img: OtherInsurance,
        title: "Other Insurance",
        subtitle: "Insurance can have various effects on society through the way that it changes who bears the cost of losses and damage.",
        color: '#d3d3ff'
    },
]

const ChoosingInsurance = () => {
    return (
        <div className="choosing-insurance-container">
            <Title 
                title="Choose your Insurance"
                subtitle="Keep Your Life Smile, Safe, and Wealthy"
                customClass="choosing-insurance-margin"
            />
            <div className="parent-card-content">
               {dataCard?.map(({img, title, subtitle, color}, index)=>(
                   <Card 
                        key={index}
                        img={img}
                        title={title}
                        subtitle={subtitle}
                        color={color}
                   />
               ))} 
            </div>
        </div>
    );
};

export default ChoosingInsurance;