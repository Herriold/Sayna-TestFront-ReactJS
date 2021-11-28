
const Text = ({
    subtitle,
    children,
    bigTitle,
    gutterBottom,
    custom=""
}) => {
    return (
        <div className={`" ${gutterBottom ? "gutterBottom " : ""} text ${bigTitle ? "bigTitle " : ""} ${custom} ${subtitle ? " subtitle" : ""} "`}>
            {children}
        </div>
    );
};

export default Text;