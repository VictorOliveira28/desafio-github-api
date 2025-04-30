import { CardDTO } from "../../models/card";
import "./styles.css";

type Props = {
  cardDetails: CardDTO;
};

export default function CardDetails({ cardDetails }: Props) {
  return (
    <>
      <section className="gh-card-container">
        <div className="gh-card">
          <img src={cardDetails.avatar_url} alt={cardDetails.name} />
          <div className="gh-card-information">
            <h2>Informações</h2>
            <p>
              <strong>
                Perfil: <a href={cardDetails.url}>{cardDetails.url}</a>
              </strong>
            </p>
            <p>
              <strong>Seguidores: {cardDetails.followers}</strong>
            </p>
            <p>
              <strong>Localidade: {cardDetails.location}</strong>
            </p>
            <p>
              <strong>Nome: {cardDetails.name}</strong>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
