import { Link } from "react-router-dom";
import Button from "../../components/Button";
import "./styles.css";

export default function SearchPage() {
  return (
    <>
      <section className="gh-section-container">
        <div className="gh-search-container">
          <div className="gh-title">
            <h2>Encontre um perfil Github</h2>
          </div>
          <form className="gh-form-container">
            <input type="text" name="" placeholder="Usuário Github" />
            <div className="gh-button-form-container">
              <Link to={"/"}>
                <Button text="Encontrar" />
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
