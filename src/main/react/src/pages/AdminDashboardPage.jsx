import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import NavBar from "../components/common/NavBar";
import CommonFooter from "../components/common/CommonFooter";

function AdminDashboardPage() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    axios
      .get("/api/private/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        alert(JSON.stringify(error));
      });
  }, []);

  const handleEdit = (userId) => {
    navigate("/admin/users/" + userId);
  };

  const handleDelete = (userId) => {
    axios
      .delete("/api/private/admin/users/" + userId)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        alert(JSON.stringify(error));
      });
  };
  return (
      <>
        <NavBar />
        <main style={{ padding: "100px 40px" }}>
          {users.length ? (
            <table>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, userIndex) => {
                  return (
                    <tr key={"user-row" + userIndex}>
                      <td>{user.username}</td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.email}</td>
                      <td>
                        <Button
                          onClick={() => {
                            handleEdit(user.id);
                          }}
                          variant="primary"
                        >
                          EDIT
                        </Button>
                      </td>
                      <td>
                        <Button
                          onClick={() => {
                            handleDelete(user.id);
                          }}
                          variant="danger"
                        >
                          DELETE
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <h1>Users not found</h1>
          )}
        </main>
        <CommonFooter />
      </>
    );
  }

  export default AdminDashboardPage;