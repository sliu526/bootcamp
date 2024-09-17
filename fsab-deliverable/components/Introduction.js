import classes from "./introduction-styles.module.css"

export default function Introduction() {
    return <div className={classes.container}>
        <h1 className={classes.name}>Sammy Liu</h1>
        <p className={classes.bio}>Hey! My name is Sammy, and I'm a sophomore concentrating in APMA-CS. I'm from the suburbs
            of Boston, about an hour and a half drive from Providence.
        </p>
        <p className={classes.fun}>
            Fun fact: I just transferred to Brown this semester from Georgia Tech, where I majored in CS!
        </p>
    </div>
}