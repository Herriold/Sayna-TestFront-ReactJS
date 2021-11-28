import Text from "./Text";

const ClamSteup = ({ title, subtitle, id, color, after}) => {
    return (
        <div className="clams-steup-container">
            <span className="clam-steup-id" style={{backgroundColor: color}}>{id}</span>
            {/* {after && <img src={after} alt='after' />} */}
            <Text custom="clam-steup-title">{title}</Text>
            <Text custom="custom-subtitle card-custom-subtitle">{subtitle}</Text>
        </div>
    );
};

export default ClamSteup;