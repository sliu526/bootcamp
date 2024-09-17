import Image from "next/image";
import styles from "./page.module.css";
import MyInterests from "/components/MyInterests.js";
import Introduction from "/components/Introduction.js"
import RightCard from "/components/RightCard";

export default function Home() {
  return <div>
    <Introduction></Introduction>

    <MyInterests
      heading="Running"
      text="I started running over COVID, but only started running longer distances this past year. While I was studying abroad in Berlin
      this summer, I ran a new personal best of 7 miles at 7:55 / mile pace!"
    ></MyInterests>

    <RightCard
      heading="Tennis"
      text="I've played tennis since elementary school, but I haven't really played since high school. Some of my friends are getting
      back into tennis though, and I'm excited to start playing again!"
    ></RightCard>
  </div>
}