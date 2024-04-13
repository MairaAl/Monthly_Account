import { useEffect, useState } from "react";
import axios from "axios";
import ConsumoList from "../components/ConsumoList";
import { Link } from "react-router-dom";

const ConsumoTable = () => {
  const [consumo, setConsumo] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/consumos/")
      .then((res) => {
        console.log(res.data);
        setConsumo(res.data);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setConsumo]);
  return (
    <div>
      <Link to={"/consumos/addconsumo"}>Add new</Link>
      <h3> Clients List</h3>
      {loaded && <ConsumoList consumo={consumo.consumos} />}
    </div>
  );
};

export default ConsumoTable;
