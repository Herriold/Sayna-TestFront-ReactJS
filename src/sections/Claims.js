import ClamSteup from "../components/ClaimSteup";
import Title from "../components/Title";
import AfterBlue from "../assets/img/after-blue.png"
import AfterPink from "../assets/img/after-pink.png"

const dataClams = [
    {
        id: 1,
        title: "Report Claim",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nunc vitae velit rutrum suscipit non et eros.",
        color: '#b0f3ff',
        after: AfterBlue
    },
    {
        id: 2,
        title: "Claim Processing",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nunc vitae velit rutrum suscipit non et eros.",
        color: '#fbd1ff',
        after: AfterPink
    },
    {
        id: 3,
        title: "Final Settlement",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nunc vitae velit rutrum suscipit non et eros.",
        color: '#daffd3',
        after: null
    }
]

const Claims = () => {
    return (
        <div className="clams-container">
            <Title 
                title="Simplified Claims"
                subtitle="Easy as One, Two, Three"
                customClass="clams-margin"
            />
            <div className="parent-card-content">
               {dataClams?.map(({id, title, subtitle, color, after}, index)=>(
                   <ClamSteup 
                        key={index}
                        id={id}
                        title={title}
                        subtitle={subtitle}
                        color={color}
                        after={after}
                   />
               ))} 
            </div>
        </div>
    );
};

export default Claims;