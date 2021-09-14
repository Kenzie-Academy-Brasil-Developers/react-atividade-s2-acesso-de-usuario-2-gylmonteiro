import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Customer = ({ members }) => {
  const { id } = useParams();

  const member = () => {
    const items = members.find((item) => item.id === id);
    return items;
  };
  return (
    <div>
      <h1> Detalhes do Cliente</h1>
      <p>Nome: {member() && member().name}</p>
      <Link to="/">Voltar</Link>
    </div>
  );
};

export default Customer;
