import './hewwo.css'

export default function Hewwo() {
    const words = ["owo", "OwO", "oWo", "Ōwò", "uwu", "UwU", "uWu", "iwi", "qwq", "pwp", "qwp", "TwT", "тwт", "TmT", "тmт", "ôWô", "òwó", "ùwú", ">w<", ">W<", "-w-", "-W-", "~w~", "~W~", ">m<", "omo", "OmO", "umu", "UmU", "-m-", "-M-", "~m~", "~M~", "owø", "^w^", ":3", ";3", "x3", "X3", ">:3", ">;3", ":3c", ";3c", ">:3c", ">;3c"];
    return (
        <div id='hewwo'>hewwo warudo <div id='uwu'>{words[Math.round(Math.random() * words.length)]}</div></div>
    )
}