import axios from "axios";
import { useEffect, useState } from "react";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
    department: "",
    salary: "",
    marital_state: "",
  });
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios.get("https://mymockapiis.herokuapp.com/tanisha").then((res) => {
      setDatas(res.data);
    });
  }
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://mymockapiis.herokuapp.com/tanisha", formData)
      .then(() => {
        alert("User created");
        getData();
      });

    setFormData({
      name: "",
      age: "",
      address: "",
      department: "",
      salary: "",
      marital_state: "",
    });
    console.log(formData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>
          <u>Employee Details</u>
        </h1>
        <input
          id="name"
          onChange={handleChange}
          type="text"
          placeholder="Enter your name"
        />
        <input
          id="age"
          onChange={handleChange}
          type="number"
          placeholder="Enter your age"
        />
        <input
          id="address"
          onChange={handleChange}
          type="text"
          placeholder="Address"
        />
        <input
          id="salary"
          onChange={handleChange}
          type="number"
          placeholder="Salary"
        />
        <input
          id="department"
          onChange={handleChange}
          type="text"
          placeholder="department"
        />
        <form action="">
          <input
            type="checkbox"
            id="marital_state"
            value="male"
            onChange={handleChange}
          />
          <label for="Married">Married</label>
          <input
            type="checkbox"
            id="marital_state"
            value="male"
            onChange={handleChange}
          />
        </form>
        <label for="Unmarried">Unmarried</label>

        <button type="submit">Submit</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
            <th>marital_state</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((elem) => (
            <tr key={elem.id}>
              <td>{elem.name}</td>
              <td>{elem.age}</td>
              <td>{elem.address}</td>
              <td>{elem.salary}</td>
              <td>{elem.department}</td>
              <td>{elem.marital_state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
