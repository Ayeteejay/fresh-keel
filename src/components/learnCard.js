import { Col } from "react-bootstrap";

const Learn = (props) => {

    const numberTag = (number) => {
        if(number < 10){
            return `0${number}`
        }else{
            return number
        }
    };
    return (
        <Col sm={6}>
            <div className="learn-card">
                <code className="tag">{numberTag(props.tag)}</code>
                <h4>{props.title}</h4>
                <p className="learn-content">{props.content}</p>
            </div>
        </Col>
    )
};
export default Learn;