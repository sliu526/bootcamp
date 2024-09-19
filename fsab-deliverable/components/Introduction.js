import classes from "./introduction-styles.module.css"

export default function Introduction() {
    return <div className={classes.container}>
        <h1 className={classes.name}>Sammy Liu</h1>
        <p className={classes.bio}>Hey! My name is Sammy, and I'm a sophomore concentrating in APMA-CS. I'm from the suburbs
            of Boston, about an hour and a half drive from Providence.
        </p>
        <p className={classes.fun}>
            Fun fact: I just transferred to Brown this semester from Georgia Tech, where I majored in CS!

            <br></br>
            <br></br>
            Click the Celebrate button in the bottom left corner!
            
            <br></br> 
            <br></br> 
           <br></br> 

            FOR THIS SUBMISSION: I tried a lot of different things but in the end I got lost trying to connect the frontend to the backend. 
            I got some things to work, like displaying data from a single collection in Firebase, but couldn't figure out how to update it,
            and for some reason I couldn't display the data from some other collections. (I think) I tried so many different random things that
            in the end my code got too messy and I couldn't figure out what was going wrong.

            <br></br> 

            Most, if not all, of the new functionality is all contained within the frontend. I would've fleshed this out more, but
            got lost in the backend / APIs.
        </p>
    </div>
}