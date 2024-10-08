import Buttons from "./Buttons";
import classes from "./my-interests-styles.module.css";

export default function FirstCard(props) {
    return <div className={classes.container}>
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
        <Buttons
            buttonText = "I like running!"
        ></Buttons>
    </div>
}