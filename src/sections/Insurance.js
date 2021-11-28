import HealthFamily from '../assets/img/health-family-1.png';
import Tick from '../assets/img/tick.png';
import Text from '../components/Text';
import Title from '../components/Title';

const dataInsurance = [
    {
        title: 'Comprehensive Insurance',
        subtitle: 'Dynamically repurpose e-business users rather than granular products.',
    },
    {
        title: 'Support is just a call away',
        subtitle: 'Rapidiously customize value-added platforms compliant action items.',
    },
    {
        title: 'Say goodbye to paperwork.',
        subtitle: 'Globally deliver economically sound communities relationships. ',
    }
]

const Insurance = () => {
    return(
        <div className="insurance-container">
            <Title 
                title="A new take on insurance"
                subtitle="Great for individuals and business"
            />
            <div className="health-family-container">
                <img src={HealthFamily} className="health-family-img" alt="health-family" />
                <div className="health-family-content">
                    <Text custom="health-family-title-1" gutterBottom>Monotonectally deploy seamless data and resource maximizing systems.</Text>
                    <Text custom="health-family-title-2">Great for individuals and small families up to 4 members.</Text>
                    <Text>
                        A strong, up-to-date, employee benefits health insurance program is vital for attracting and retaining good employees. 
                        It takes diligence, creativity and attention to detail to ensure you are getting the best “bang for your buck” each and every year.
                    </Text>
                    <div className="parent-tick-container">
                        {dataInsurance?.map(({title, subtitle}, index)=> (
                            <div key={index} className={`${index===1 ? "tick-container active" : "tick-container"}`}>
                                <img src={Tick} className="tick-img" alt="tick" />
                                <div>
                                    <Text custom="tick-title">{title}</Text>
                                    <Text custom="tick-subtitle">{subtitle}</Text>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Insurance;