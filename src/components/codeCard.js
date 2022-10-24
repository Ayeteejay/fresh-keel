import { Col } from "react-bootstrap";
const Code = (props) => {

    const numberTag = (number) => {
        if(number < 10){
            return `0${number}`
        }else{
            return number
        }
    };
    return (
        <Col sm={6}>            
            <a className="code-wrapper" href={props.link} target="_blank" rel="noreferrer noopener">
            <div className="code-card">
                <code className="tag">{numberTag(props.tag)}</code>
                <h4>{props.title}</h4>
                <code>{props.code}</code>
            </div>
            </a>
        </Col>
    )
};
export default Code