import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ConsumoList = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Amount</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.consumo.map((consumo) => (
          <tr key={consumo._id}>
            <td>{consumo.product}</td>
            <td>{consumo.price}</td>
            <td>None</td>
            <td>
              <Link to={`/consumos/${consumo._id}`}>
                <button className="btn btn-primary ">Detalle</button>{" "}
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
