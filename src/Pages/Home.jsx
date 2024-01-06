import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link} from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
    },
    company: {
      name: "",
    },
  });

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error("Error fetching user details:", error);
      });
  }, []); 

  const handleSort = (option) => {
    let sortedUsers = [...users];
    switch (option) {
      case "A-Z":
        sortedUsers.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "latest":
        sortedUsers.reverse();
        break;
      default:
        break;
    }
    setUsers(sortedUsers);
    setSortOption(option);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };


  const handleAddUser = async () => {
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/users", newUser);

      setUsers(prevUsers => [...prevUsers, response.data]);

      setNewUser({
        name: "",
        email: "",
      });

    } catch (error) {
      console.error("Error adding new user:", error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">User Details</h1>
      <Link to="/random">
      <button className="border border-blue-100 bg-slate-400 rounded shadow-2xl">Random</button>
    </Link>
      <div className="mb-4 ">
        <label className="mr-2">Sort By:</label>
        <select
          onChange={(e) => handleSort(e.target.value)}
          value={sortOption}
          className="border p-2"
        >
          <option value="">Select</option>
          <option value="A-Z">A-Z</option>
          <option value="latest">Latest</option>
        </select>
        <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Add New User</h2>
        <div className="flex flex-col mb-4">
          <label className="mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={newUser.name}
            onChange={handleInputChange}
            className="border p-2"
          />
           <label className="mb-2">Email:</label>
          <input
            type="text"
            name="email"
            value={newUser.email}
            onChange={handleInputChange}
            className="border p-2"
          />
        </div>
        
        <button onClick={handleAddUser} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Add User
        </button>
      </div>
      </div>

      <table className="min-w-full border border-black">
        <thead>
          <tr className="bg-gray-300">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Address</th>
            <th className="border p-2">Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="bg-gray-100 border border-cyan-900">
              <td className="border p-2 uppercase">{user.name}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.phone}</td>
              <td className="border p-2">
                {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
              </td>
              <td className="border p-2">{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      
    </div>
  );
};

export default Home;
