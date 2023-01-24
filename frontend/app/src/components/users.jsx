import { useEffect } from "react";
import { useState } from "react";
import api from "../services/api";
import "../css/users.css";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api
      .get("/users")
      .then((response) => setUsers(response.data))
      .catch((error) => {
        console.error("Erro:" + error);
      });
  }, []);

  return (
    <div>
      <div className="header-container">
        <h2>Usuários</h2>
      </div>
      <div className="container">
        <div className="content">
          {users.map((user) => (
            <ul key={user.firstName}>
              <li key={user.firstName}>
                <b>Nome: </b>
                {user.firstName + " " + user.lastName}
                <br />
                <b>Email: </b>
                {user.email}
                <br />
                <b>Senha: </b>
                {user.password}
                <br /><br />
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}