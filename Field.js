import React, {Component} from 'react'

const Field = ({ label = "", name = "", value = "", onChange , pattern}) => {
   return (
      <div style={{marginRight:16, width: 400,padding: 2}}>
         <label htmlFor={name} style={{marginRight:20}}>
            {label}
         </label>
         <input type="text"  name={name} value={value} onChange={onChange}
         pattern = {pattern} required
         style= {{display: "inline-block",  border: "1 solid #ccc",boxShadow : "inset 0 1px 3px #ddd", borderRadius: 4}} />
     </div>
   );
};

export default Field;