import logoImage from "../assets/quiz-logo.png";

export default function() {
  return(
    <header>
      <img src={logoImage} alt="quiz logo" />
      <h1>React Quiz</h1>
    </header>
  )
}