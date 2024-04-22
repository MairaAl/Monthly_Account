import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ClientList = (props) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>

            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.client.map((client) => (
            <tr key={client._id}>
              <td>{client.firstName}</td>
              <td>{client.lastName}</td>

              <td>
                <Link to={`/clients/${client._id}`}>
                  <button className="btn btn-outline-warning">Details</button>{" "}
                </Link>
                <Link to={`/clients/edit/${client._id}`}>
                  <button className="btn btn-outline-warning">Edit</button>{" "}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
ClientList.propTypes = {
  client: PropTypes.array,
  id: PropTypes.number,
};

export default ClientList;
