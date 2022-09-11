import React from "react";
import { Link } from "react-router-dom";


// Destructuring Props in React
function EmployeesRowTab({ Email, Lastname, Firstname, Age, Id, Delete }) {

    return (
        <tr>
            <th>{Email}</th>
            <td>{Lastname}</td>
            <td>{Firstname}</td>
            <td>{Age}</td>
            <td className="Tableau">

                <span className="badge bg-secondary">
                    <Link to={`/${Id}`} className="text-white">
                        <i className="fas fa-edit" ></i>
                    </Link>
                </span>

                <span className="badge bg-danger" onClick={() => Delete(Id)}><i
                    className="fas fa-trash-alt"  
                ></i></span>
            </td>
        </tr>
    )
}
export default EmployeesRowTab;
