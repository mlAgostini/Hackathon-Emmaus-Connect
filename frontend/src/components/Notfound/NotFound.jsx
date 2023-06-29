import "./NotFound.scss";

export default function NotFound() {
  return (
    <div className="errorContainer">
      <h2 className="oups">Oups..</h2>
      <h3 className="errorT">
        Le téléphone que vous cherchez n'est pas disponible en stock.
      </h3>
    </div>
  );
}
