import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAsyncError, useParams} from "react-router-dom";

function Update() {
    const [data, setData] = useState({})
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(() => {
      fetch("http://localhost:3000/Medicalstore/"+id)
        .then(res => res.json())
        .then(res=>setData(res))
    }, [])
    return <>      
<section class="vh-100" style={{background: "#9A616D;"}}>
  <div class="container  h-100">
    <div class="row d-flex h-100"style={{marginTop:"70px",marginLeft:"100px"}}>
      <div class="col col-xl-10">
        <div class="card" style={{borderRadius:"1rem",height:"710px"}}>
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg"
                alt="login form" class="img-fluid" style={{borderraRdius: "1rem 0 0 1rem;", height:"709px",width:"400px"}} />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">

               

                  <div class="d-flex align-items-center mb-3 pb-1">
                    <i class="fas fa-cubes fa-2x me-3" style={{color:" #ff6219"}}></i>
                    <span class="h1 fw-bold mb-0">Medicine Order Form</span>
                  </div>

                  <label class="form-label" for="form2Example17" style={{fontSize:"22px"}}>Enter Id:</label>
                  <input type='text'  class="form-control form-control-lg" value={data.id} onChange={(e) => {
                    setData({ ...data, id: e.target.value })
                     }} />
                  
                
                  <label class="form-label" for="form2Example17" style={{fontSize:"22px"}}>Enter Image-Url:</label>
                  <input type='text' class="form-control form-control-lg" value={data.imageUrl} onChange={(e) => {
                     setData({ ...data, imageUrl: e.target.value })
                     }} />
               
                  <label class="form-label" for="form2Example17" style={{fontSize:"22px"}}>Enter Name:</label>
                  <input type='text' class="form-control form-control-lg" value={data.name} onChange={(e) => {
                     setData({ ...data, name: e.target.value })
                     }} />
                 
                
                  <label class="form-label" for="form2Example17" style={{fontSize:"22px"}}>Enter Price:</label>
                  <br />
                  <input type='text' class="form-control form-control-lg" value={data.price} onChange={(e) => {
                     setData({ ...data, price: e.target.value })
                     }} />
                    
                  
                  <label class="form-label" for="form2Example17" style={{fontSize:"22px"}}>Enter Pharma Companie:</label>
                  <input type='text' class="form-control form-control-lg" value={data.pharmaCompanie} onChange={(e) => {
                     setData({ ...data, pharmaCompanie: e.target.value })
                     }} />
                 
                
                  <label class="form-label" for="form2Example17" style={{fontSize:"22px"}}>Enter Medicine Information:</label>
                  <input type='text' class="form-control form-control-lg" value={data.information} onChange={(e) => {
                     setData({ ...data, information: e.target.value })
                     }} />
                  
                  <button className='btn btn-success' style={{marginTop:"10px"}} onClick={() => {
              fetch("http://localhost:3000/Medicalstore/"+id,
            {
              method:"PATCH",
              body: JSON.stringify(data),
              headers: {
                "Content-Type": "application/json"
              }
            })
            .then(
              (res) => {
                navigate('/Medicalstore')
              }
            )
        }}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  
  </div>



</section>     

      
    </>
  }

  export default Update;