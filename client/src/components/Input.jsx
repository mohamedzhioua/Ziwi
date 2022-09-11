import React from "react";
import classnames from 'classnames'
// classnames is A simple JavaScript utility for conditionally joining classNames together
// take a look on the class (is-invalid) in bootstrap if  you want to understand 
function Input({label, type, name, onChange,  errors , value}) {
    return (
        <div className="mb-3">
            <label for="Email" className="form-label">{label}</label>
            <input type={type} value={value} className={(classnames("form-control", {"is-invalid": errors}))} name={name} onChange={onChange}/>
            {
                //if there is a error we gonna show the error message in the response coming from backend 
      errors && (<div className="invalid-feedback">
      {errors}
    </div>)
    }
        </div>
    )
}
export default Input;




