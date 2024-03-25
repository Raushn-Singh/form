
import { useState } from 'react';
import './App.css';

function App() {

  const [formdata,setFormData]=useState({firstName:'',lastName:'',email:'',country:'India',streetAddress:'', city:'',state:'',postalcode:'',comments:false, candidates:false,offers:false,pushNotifications:""});
  function changeHandler(event){
    const{name,value,checked,type}=event.target;

    setFormData((prev)=>({...prev, [name]:type==="checkbox"?checked:value}))
  }

   function submitHandler(event)
{
  event.preventDefault();
  console.log("Finally printing the formdata");
  console.log(formdata);
}


  return (
    < div className='flex flex-col items-center'>
        <form onSubmit={submitHandler}>
        <label htmlFor="firstName"> First Name</label>
        <br />
          <input type="text" name='firstName' id='firstName' placeholder='Raushan' value={formdata.firstName}  onChange={changeHandler} className='outline'/>
        <br />
          <label htmlFor="lastName"> Last Name</label>
        <br />
          <input type="text" name='lastName' id='lastName' placeholder='Singh' value={formdata.lastName}  onChange={changeHandler} className='outline'/>

          <br />
          <label htmlFor="email"> Email Address</label>
        <br />
          <input type="email" name='email' id='email' placeholder='Rsingh@gmail.com' value={formdata.email}  onChange={changeHandler} className='outline'/>


                <br />
          <label htmlFor="country">Country</label>
          <br />
            <select name="country" id="country" value={formdata.country} onChange={changeHandler}>
              <option >India</option>
              <option >United States</option>
              <option >Canada</option>
              <option>Mexico</option>
            </select>


             <br />
            <label htmlFor="streetAddress"> Street Address</label>
        <br />
          <input type="text" name='streetAddress' id='streetAddress' placeholder='B-25c' value={formdata.streetAddress}  onChange={changeHandler} className='outline'/>


          <br />
            <label htmlFor="city"> City</label>
        <br />
          <input type="text" name='city' id='city' placeholder='B-25c' value={formdata.city}  onChange={changeHandler} className='outline'/>


          <br />
            <label htmlFor="state"> Street Address</label>
        <br />
          <input type="text" name='state' id='state' placeholder='Bihar' value={formdata.state}  onChange={changeHandler} className='outline'/>

          <br />
            <label htmlFor="postalcode"> Postal Code</label>
        <br />
          <input type="text" name='postalcode' id='postalcode' placeholder='110077' value={formdata.postalcode}  onChange={changeHandler} className='outline'/>
           
                    <br />
                    <br />


           <fieldset>
            <legend>By Email</legend>


            <div className='flex'>
            <input id='comments' name='comments' type='checkbox' checked={formdata.comments}  onChange={changeHandler}/>
            
            <div>
              <label htmlFor='comments'>
                Comments
              </label>
              <p>Get notified when someones posts a coment on a posting.</p>

            </div>
            </div>



            <div className='flex'>
            <input id='candidates' name='candidates' type='checkbox' checked={formdata.candidates}  onChange={changeHandler}/>
            
            <div>
              <label htmlFor='comments'>
                Candidates
              </label>
              <p>Get notified when a candidate applies for a job.</p>

            </div>
            </div>


            <div className='flex'>
            <input id='offers' name='offers' type='checkbox' checked={formdata.offers}  onChange={changeHandler}/>
            
            <div>
              <label htmlFor='offers'>
                Offers
              </label>
              <p>Get notified when a candidates accepts or rejects an offer.</p>

            </div>
            </div>


           </fieldset>

            <br />
            <br />
            <fieldset>
              <legend>Push Notifications</legend>
              <p>These are delivered via sms to your mobile phone</p>
                
                <input type="radio"  id='pushEverything' name='pushNotifications' value="Everything" onChange={changeHandler}/>
                <label htmlFor="pushEverything">Everything</label>
                      <br />
                <input type="radio"  id='pushEmail' name='pushNotifications' value="Same as email" onChange={changeHandler}/>
                <label htmlFor="pushEmail">Same as email</label>
                        <br />
                <input type="radio"  id='pushNothing' name='pushNotifications' value="No Push Notfications" onChange={changeHandler}/>
                <label htmlFor="pushNothing">No Push Notifications</label>


            </fieldset>
              <button className='bg-blue-500 text-white font-bold rounded py-2 px-4'>Save</button>



              
        </form>

      </div>
);
}

export default App;
