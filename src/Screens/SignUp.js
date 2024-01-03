import React, {useState, useEffect} from 'react';
import Header from '../Components/Header';
import Modal from "react-modal";
import { Supabase } from "../config/supabase-config";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const SignUp = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
  };
  const  [data, setData] = useState(null);
  const  [data1, setData1] = useState(null);

  const  [data2, setData2] = useState();
  const  [data3, setData3] = useState(null);


  const  [print, setPrint] = useState(false);

  const  [print1, setPrint1] = useState(false);
  const  [print2, setPrint2] = useState(false);
  const  [print3, setPrint3] = useState(false);



  const navigate = useNavigate();

    const saveItem = () => {
        navigate('/users')
      }


  function getData(e){
    setPrint(false);
    setData(e.target.value);
  }

  function getData1(e){
    setPrint1(false);
    setData1(e.target.value);
  }

  function getData2(e){
    setPrint2(false);
    setData2(e.target.value);
  }

  function getData3(e){
    setPrint3(false);
    setData3(e.target.value);
  }


//   Form Submission
const initialValues = {
    name: '',
    email: '',
    gender: '',
    phone: '',
  };

  const [formData, setFormData] = useState(initialValues);
  const [inputValue, setInputValue] = useState("");
  const [formErrors, setFormErrors] = useState({});


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    setFormErrors(submit(formData));
    // setIsSubmit(true);
  };
  const handleChange = (e) => {
    // const {fullname, value} = e.target;
    setFormData({ ...formData, name: e.target.value });
    console.log(formData);
  };


  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0) {
      console.log(formData);
    }
  }, [formErrors]);



  const submit = (values) =>{
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  
    
    if (!values.name) {
      errors.name = "Name is required";
    } else if (!values.email) {
      errors.email = "Email is required";
    }else if (!values.gender) {
      errors.gender= "gender is required";

    } else if (!values.phone) {
      errors.phone= "phone is required";

    }else{
      setIsModalOpen(true);
      setPrint(true);
      setPrint1(true);
      setPrint2(true);
      setPrint3(true)
          }
    return errors;
    
      
  
  }

  const validate = (values) => {

      Supabase.from("opobo")
        .upsert([
          {
            fullname: formData.name,
            email: formData.email,
            // gender: formData.name,
            phone: formData.phone,
            metadata: formData,
            
            
          },
          
        ])
        .then((response) => {
          console.log(response);

          navigate('/users')
        });
          }
  
  

  return (
    <div className='signup-page'>
        <Header/>
        <section className='signup'>
            <div className='left'>
                <h1>OPOBO <span>HERITAGE FESTIVAL</span></h1>
                <p>The Role Of Opobo Based Heritage Festival In Supporting Improvement Of Quality Of Life In Opobo.</p>

            </div>
            <div className='right'>

                <h2>Sign Up Now</h2>
                

                <div className='form'>
                
                    <input type='text' placeholder='fullname' 
                    
                    value={formData.name} 
                        onChange={(e) => {
                        getData(e)
                        setFormData({
                        ...formData,
                        name: e.target.value,
                        });
                    }} 
                    />
                    <p style={{ color: "red", fontSize: "14px",  margin:'0', marginBottom:'10px'}}>{formErrors.name}</p>

                    <input type="email" name="" id="" placeholder='Email' 
                        value={formData.email} 
                        onChange={(e) => {
                        getData1(e)
                        setFormData({
                        ...formData,
                        email: e.target.value,
                        });
                    }} />

                      <p style={{ color: "red", fontSize: "14px",margin:'0',  margin:'0', marginBottom:'10px'}}>{formErrors.email}</p>

                      <select
              value={formData.gender}
              onChange={(e) => {
                getData2(e)
                setFormData({
                  ...formData,
                  gender: e.target.value,
                });
              }}
              id=""
            >
              <option value={null} style={{ fontSize: "10px" }}>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            
          <p style={{ color: "red", fontSize: "14px",  margin:'0', marginBottom:'10px'}}>{formErrors.gender}</p>

                    <input type="tel" name="" id="" placeholder='Phone Number' value={formData.phone} 
                        onChange={(e) => {
                        getData3(e)
                        setFormData({
                        ...formData,
                        phone: e.target.value,
                        });
                    }}/>

                      <p style={{ color: "red", fontSize: "14px",  margin:'0', marginBottom:'10px', width:'100%'}}>{formErrors.phone}</p>   <br/>   



                    <button type='button' className='submit' style={{cursor:'pointer'}} 
                    // onClick={() => {
                    //     setIsModalOpen(true);
                    //     setPrint(true);
                    //     setPrint1(true);
                    //     setPrint2(true);
                    //     setPrint3(true)
                    // }}
                    onClick={handleSubmit}
                    >Proceed</button>
                

                </div>
            </div>
        </section>


        <Modal
            isOpen={isModalOpen}
            onRequestClose={toggleModal}
            contentLabel="Example Modal"
            className={`bg-transparnt`}
            style={{ 
              overlay: {
                position: "fixed",
                top: "0",
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "hsla(0, 0%, 0%, .8)",
                zIndex:100000,
                
              },
            }}
          >
            <div className='modal1'>
              <div className='modal1-content'>
                

                <form>

                  <h3>
                    <span className='title'>Full Name:</span>
                    {
                      print? <span>{data}</span>
                      : null
                  }
                  
                  </h3>

                  <h3>
                    <span className='title'>Email:</span>
                    {
                      print1? <span>{data1}</span>
                      : null
                  }
                  
                  </h3>

                  <h3>
                    <span className='title'>Gender:</span>
                    <span>
                    {
                      print2? <span>{data2}</span>
                      : null
                  }
                    </span>
                  </h3>

                  <h3>
                    <span className='title'>Phone No:</span>
                    {
                      print3? <span>{data3}</span>
                      : null
                  }
                  
                  </h3>

                  <div className='textarea'>
                    <button onClick={() => setIsModalOpen(false)} style={{cursor:'pointer'}}>Close</button>

                    <button type='button' onClick={validate}>Confirm</button>
                  </div>
                
                
                </form>
                

              </div>

            </div>
            
          </Modal>

    </div>
  )
}

export default SignUp