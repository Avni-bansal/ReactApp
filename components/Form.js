import React from 'react'
import Field  from './Field'

/**functional component **/
 const Form = ({ formState, onChange, onSubmit }) => {
   return (
      <form  id="loginForm"   className="form" onSubmit={onSubmit}  >

            <Field
               name="username"
               id="username"
               label="Employee"
               value={formState.username}
               onChange={onChange}
            />
            <Field
               name="email"
               id="email"
               label="Email Id"
               value={formState.email}
               onChange={onChange}

            />
            <Field
               name="contact"
               id="contact"
               label="Phone  No"
               value={formState.contact}
               onChange={onChange}
               pattern="^\d{10}$"
            />

         <button  id = "myButton" style= {{width: 60 , height: 20 ,cursor: "pointer" , background: "linear-gradient(60deg, #ff5858 0%, #0078e7 100%)",
     boxShadow: "0 0.3rem 5rem rgba(#ff5858, 0.6)",
          borderRadius:" 5rem", border: "1 solid #999", color : "white"}}>
               {formState.mode}
         </button>
      </form>
   );
};
export default Form;