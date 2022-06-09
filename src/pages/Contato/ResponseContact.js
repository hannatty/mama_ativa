import "./contato.css";
import Header1 from "../../components/Header1";
import { Link } from "@mui/material";
import ResponseImage from "../../images/feedback-contact.png";

const ResponseContact = () => {
  return (
    <div>
      <Header1 />
      <div
        className="contatoContainer"
        style={{ marginBottom: "150px", marginTop: "80px" }}
      >
        <img src={ResponseImage} />
        <span>
          Agradecemos seu contato! Em breve, nossa equipe te responderá.
        </span>
      </div>
    </div>
  );
};

export default ResponseContact;
