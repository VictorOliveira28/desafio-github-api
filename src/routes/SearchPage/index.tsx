import Button from "../../components/Button";
import "./styles.css";
import { useState } from "react";
import { CardDTO } from "../../models/card";
import * as cardService from "../../services/card-service";
import CardDetails from "../CardDetails";

type FormData = {
  profile: string;
};

export default function SearchPage() {
  const [card, setCard] = useState<CardDTO | null>(null);

  const [formData, setFormData] = useState<FormData>({
    profile: "",
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function handleFormSubmit(event: any) {
    event.preventDefault();
    setErrorMessage(null);

    try {
      const response = await cardService.findByUserName(formData.profile);
      if (response.data) {
        setCard(response.data);
      } else {
        setCard(null);
        setErrorMessage("Perfil não encontrado!");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setCard(null);
      setErrorMessage("Erro ao buscar perfil.");
    }
  }

  return (
    <>
      <section className="gh-section-container">
        <div className="gh-search-container">
          <div className="gh-title">
            <h2>Encontre um perfil Github</h2>
          </div>
          <form onSubmit={handleFormSubmit} className="gh-form-container">
            <input
              name="profile"
              value={formData.profile}
              type="text"
              placeholder="Usuário Github"
              onChange={handleInputChange}
            />
            <div className="gh-button-form-container">
              <Button text="Encontrar" />
            </div>
          </form>
        </div>
      </section>

      {card ? (
        <CardDetails cardDetails={card} />
      ) : errorMessage ? (
        <div className="gh-find-error">
          <h1>Erro ao buscar usuário</h1>
        </div>
      ) : null}
    </>
  );
}
