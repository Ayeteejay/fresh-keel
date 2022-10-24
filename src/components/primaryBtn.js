const Primary = (props) => {
    return (
        <a id="primary-btn" href={props.link} target="_blank" rel="noreferrer noopener">
            {props.title}
        </a>
    )
};
export default Primary;