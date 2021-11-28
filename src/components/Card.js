import Text from "./Text";

const Card = ({ title, subtitle, img, color}) => {
    return (
        <div className="card-container">
            <img src={img} className="card-img" style={{backgroundColor: color}} alt="card" />
            <Text bigTitle>{title}</Text>
            <Text custom="custom-subtitle card-custom-subtitle">{subtitle}</Text>
        </div>
    );
};

export default Card;