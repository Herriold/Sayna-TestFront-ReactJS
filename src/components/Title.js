import Text from "./Text";

const Title = ({title, subtitle, customClass}) => {
    return (
        <div className={`container-title  ${customClass ? customClass : ""}`}>
            <Text bigTitle>{title}</Text>
            <Text custom="custom-subtitle">{subtitle}</Text>
        </div>
    );
};

export default Title;