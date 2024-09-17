import Buttons from "./Buttons"

export default function FirstCard(props) {
    return <div>
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
        <Buttons
            buttonText = "Vote"
        ></Buttons>
    </div>
}