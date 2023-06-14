import "./contato.css";
import Header1 from "../../components/Layout/Menu/Principal";
import ResponseImage from "../../images/feedback-contact.png";

const ResponseContact = () => {
  return (
    <div>
      <Header1 />
      <div
        className="contatoContainer"
        style={{ marginBottom: "150px", marginTop: "80px" }}
      >
        <img alt=""src={ResponseImage} />
        <span>
          Agradecemos seu contato! Em breve, nossa equipe te responderá.
        </span>
      </div>
    </div>
  );
};

export default ResponseContact;
