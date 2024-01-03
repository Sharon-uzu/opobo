import React, { useState, useEffect, useRef } from 'react';
import { Supabase } from '../config/supabase-config';
import Webcam from 'react-webcam';


const UsersData = () => {

  const [web, setWeb] = useState(false);


  const webRef = useRef(null);

  const videoRef = useRef(null);

  const photoRef = useRef(null);


  // let img = "httpsL;';'";

  const showImage=()=>{
    let img = webRef.current.getScreenshot();
  }

  const Capture = () => {
    setWeb(true);
  }

  const getUserCamera = ()=>{
    navigator.mediaDevices.getUserMedia({
      video:true
    })
    .then((stream) => {
      let video = videoRef.current
      video.srcObject = stream
      video.play()
    })
    .catch((error) => {
      console.error(error)
    })
  }

  // To take pictures
  const takePicture = () => {
    let width = 500;
    let height = width/(16/9)

    let photo = photoRef.current

    let video = videoRef.current

    // set the photo width and height
    photo.width = width
    photo.height = height

    let ctx = photo.getContext('2d')

    ctx.drawImage(video, 0, 0, photo.width, photo.height)
  }


  // Clear image

  const clearImage = () => {
    let photo = photoRef.current

    let ctx = photo.getContext('2d');
    ctx.clearRect(0, 0, photo.width, photo.height)
  }

  useEffect(() => {
    getUserCamera();
  },[videoRef])

    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const { data, error } = await Supabase.from('opobo').select('*');
            if (error) {
              throw error;
            }
            setUsers(data);
          } catch (error) {
            console.error('Error fetching user data:', error.message);
          }
        };
    
        fetchUsers();
      }, []);

  return (
    <div className='users'>

      <div className='table'>

        <h1>User List</h1>
      
        <table>
          <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Gender</th>
          </tr>
          {users.map((user) => (

              <tr key={user.id} style={{color:'red'}} onClick={Capture} className='list'>
              {console.log(user.metadata.gender)}
                  <td>
                      {user.fullname} 
                  </td>
                  <td>
                      {user.email} 
                  </td>
                  <td>
                      {user.phone} 
                  </td>
                  <td>
                      {user.metadata.gender} 
                  </td>
                  
              
              </tr>
          ))}
        </table>

      </div>
        
      

        
          
              
                

          {/* {
            web ? ( */}
              <div className='web'>

                <video className='container' ref={videoRef}></video>
                <button onClick={takePicture}>Screenshot</button>

                <button onClick={clearImage}>Clear Image</button>

                <canvas ref={photoRef}>

                </canvas>

          </div>
            {/* ):null
          } */}
          
        
    </div>
  )
}

export default UsersData