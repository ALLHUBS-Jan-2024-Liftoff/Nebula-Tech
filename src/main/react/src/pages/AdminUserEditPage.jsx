import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import NavBar from "../components/common/NavBar";
import CommonFooter from "../components/common/CommonFooter";

function AdminUserEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get("/api/private/admin/users/" + id)
      .then((response) => {
        const userInfo = response.data;
        setUser({
          ...user, //spread operator//
          firstName: userInfo.firstName,
          lastName: userInfo.lastName,
          email: userInfo.email,
          username: userInfo.username,
        });
      })
      .catch((error) => {
        alert(JSON.stringify(error));
      });
  }, []);
//e is effectively a keystroke//
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser( {...user, [name]: value, } );
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    axios
      .put("/api/private/admin/users/" + id, user)
      .then(() => {
        navigate("/admin/dashboard");
      })
      .catch((error) => {
        alert(JSON.stringify(error));
      });
  };
  return (
      <>
        <NavBar />
        <main>
          <form onSubmit={handleProfileUpdate}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={user?.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>First Name:</label>
              <input
                type="text"
                name="firstName"
                value={user?.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={user?.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={user?.email}
                onChange={handleChange}
              />
            </div>
            <Button type="submit">Save</Button>
          </form>
        </main>
        <CommonFooter />
      </>
    );
  }

  export default AdminUserEditPage;