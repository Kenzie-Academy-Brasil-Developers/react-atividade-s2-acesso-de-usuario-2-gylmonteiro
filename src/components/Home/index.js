import { Link } from "react-router-dom";

const Home = ({ members }) => {
  return (
    <>
      <ul>
        {members.map((item) =>
          item.type === "pj" ? (
            <li key={item.id}>
              <Link to={`/company/${item.id}`}> {item.name}</Link>
            </li>
          ) : (
            <li key={item.id}>
              <Link to={`/customer/${item.id}`}> {item.name}</Link>
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default Home;
