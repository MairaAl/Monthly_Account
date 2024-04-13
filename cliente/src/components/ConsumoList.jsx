import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ConsumoList = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Amount</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.consumo.map((consumo) => (
          <tr key={consumo._id}>
            <td>{consumo.name}</td>
            <td>{consumo.price}</td>
            <td>
              <Link to={`/consumos/${consumo._id}`}>
                <button className="btn btn-primary ">Detalle</button>{" "}
              </Link>
              <Link to={`/consumos/edit/${consumo._id}`}>
                <button className="btn btn-primary ">Editar</button>{" "}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
ConsumoList.propTypes = {
  consumo: PropTypes.array,
  id: PropTypes.number,
};

export default ConsumoList;
