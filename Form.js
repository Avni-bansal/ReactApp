import React from 'react'
import Field  from './Field'

/**functional component **/
 const Form = ({ formState, onChange, onSubmit }) => {
   return (
      <form className="form" onSubmit={onSubmit} >

            <Field
               name="username"
               label="Employee"
               value={formState.username}
               onChange={onChange}
            />
            <Field
               name="email"
               label="Email Id"
               value={formState.email}
               onChange={onChange}

            />
            <Field
               name="contact"
               label="Phone  No"
               value={formState.contact}
               onChange={onChange}
               pattern="^\d{10}$"
            />

         <button style= {{width: 60 , height: 20 , backgroundColor: "#0078e7" ,
          borderRadius: 2, border: "1 solid #999", color : "white"}}>
               {formState.mode}
         </button>
      </form>
   );
};
export default Form;