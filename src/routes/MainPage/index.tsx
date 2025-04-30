import "./styles.css";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

export default function MainPage() {
  return (
    <>
      <main>
        <div className="gh-title-container">
          <h1>Desafio Github API</h1>
          <h2>DevSuperior - Escola de programação</h2>
        </div>
        <div className="gh-button-container">
          <Link to={"buscar"}>
            <Button text="Começar" />
          </Link>
        </div>
      </main>
    </>
  );
}
