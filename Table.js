import React from 'react'



const Table = ({ PostData = [], updateData, deleteData }) => {
   return (
      <div style={{width: 800, display: "flex",flexWrap: "wrap", border: "1 solid black", backgroundColor: "white"}}>
            <div style={{backgroundColor: "black", color: "white",width: 500 , wordWrap: "break-word"}} >
               <div style= {{ display: "inline-flex",  width: 600, boxSizing: "border-box"}}>
                   <div style= {{ width: 200, padding: 10, textAlign: "center" , marginRight : 50,marginLeft : 60}}>Name  </div>
                   <div style= {{ width: 250, padding: 10, textAlign: "center", marginRight : 30}}>Email  </div>
                   <div style= {{ width: 400, padding: 10, textAlign: "center",marginRight : 50}}>Phone No.</div>
               </div>
            </div>
          <div>
                 {PostData.map((user,key) => {
                  return (
                    <div  style={{display: "inline-flex",width: 700,boxSizing: "border-box" ,flexWrap: "wrap"}}>
                            <div  style={{ width: 100,padding: 10,textAlign: "center"}}>{user.username}</div>
                            <div  style={{ width: 200,padding: 10,textAlign: "center"}}>{user.email}</div>
                            <div  style={{ width: 100,padding: 10,textAlign: "center"}}>{user.contact}</div>
                            <div  style={{ width: 200,padding: 10,textAlign: "center"}}>

                                    <button style={{marginRight:16}} onClick={() => updateData(key)} >
                                     EDIT
                                    </button>
                                    <button  onClick={() => deleteData(key)} >
                                    DELETE
                                    </button>
                            </div>
                    </div>
                       );
                    })}
          </div>
      </div>
   );
};

export default Table;