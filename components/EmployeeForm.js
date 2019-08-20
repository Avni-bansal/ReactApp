import React from 'react'
import Table  from './Table'
import Form  from './Form'
import PostData from '../data/data.json'


class EmployeeForm extends React.Component {
   state = {
         formState: {
         id: '',
         username: '',
         email: '',
         contact : '',
         mode: "Submit"
      },
     PostData,
     props: '',
     color: "ROSYBROWN",
     message : 'Employee Details'
    };

 onChange = event => {
      this.setState({
         formState: {
            ...this.state.formState,
            [event.target.name]: event.target.value
         }
      });
   };

  deleteData = key => {
       let { PostData} = this.state;
      PostData.splice(key, 1);
      this.setState({
         PostData: [...PostData]
      });
   };

   componentDidMount() {
       const colorArray = [
      "red",
      "lightblue",
      "yellow",
      "brown"
      ];
     let colorPos = 0;
      setInterval(() => {
       if(colorArray.length - 1 > colorPos) {
         this.setState({
           color : colorArray[colorPos]
         });
         colorPos++;
       } else {
         this.setState({
           color : colorArray[colorPos]
         });
         colorPos = 0;
      }
     }, 1000)

   }



   updateData = key => {
      let { PostData} = this.state;
      PostData[key].updating = true;

      this.setState({
         formState: {
         ...PostData[key],
          mode : "Edit"
           },
         PostData
      });
   };


 resetFormState = () => {
      this.setState({
         formState: {
            username: '',
            email: '',
            contact: '',
            mode: 'Submit',
            id: ''
         }
      });
   };





     onSubmit = event => {
      const { PostData, formState } = this.state;
      event.preventDefault();
      const username = event.target.querySelector("input[name='username']").value;
      const email = event.target.querySelector("input[name='email']").value;
      const contact = event.target.querySelector("input[name='contact']").value;
      if (formState.mode === "Submit") {
         this.setState({
            PostData : [
               ...PostData,
               {
                  username,
                  email,
                  contact,
                  updating: false,
                 id: PostData[PostData.length - 1].id + 1

               }
            ]

         });
        console.log(PostData[PostData.length - 1].id + 1)
      } else if (formState.mode === "Edit") {
         const index = PostData.find((PostData)=> PostData.id === formState.id).id;
         console.log(index)
         PostData[index] = {
                  username,
                  email,
                  contact,
                  updating: false,
                  id: PostData[index].id

               }
         this.setState({
            PostData: [...PostData]
         });
      }

      this.resetFormState();
   };



   render() {
   const { PostData, formState,props } = this.state; /** destructuring of state **/
    var stylesObj = {
      background: this.state.color,
      fontSize: 20
    };

      return (
      <div >
      <div id="someText" style={stylesObj}> {this.state.message}</div>


            <Form
               formState={formState}
               onChange={this.onChange}
               onSubmit={this.onSubmit}
            />

           <Table
               PostData={PostData}
               updateData={this.updateData}
               deleteData={this.deleteData}
            />
              {console.log(PostData)}  
             {console.log("Render Method")}

                   <div id="notDisplayed" style= {{display: "none"} }></div>
                  <div id="notVisible" style={{visibility: "hidden"}}></div>
                 <div id="notInViewport" style={{ position:"absolute", left: 9999999}}></div>
                   <div id="zeroOpacity" style={{opacity: 0}}></div>


      </div>
          )
          }
 }


export default EmployeeForm

