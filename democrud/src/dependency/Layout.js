import { Link, Outlet } from "react-router-dom";

function Layout(){
    return(
        
        <>
  {/* <nav class="navbar navbar-inverse navbar" style={{height:"70px",background:"#e7f7fd"}}>
  <div class="container-fluid">
    <div class="navbar-header">
   
      <Link class="navbar-brand" to="/" style={{fontSize:"30px", margin:"20px",color:"#4b656f",fontFamily:"Cambria"}}>Home</Link>
      <Link class="navbar-brand" to="/Medicalstore" style={{fontSize:"30px",margin:"20px",color:"#4b656f",fontFamily:"Cambria"}}>Medicine</Link>
      <Link class="navbar-brand" to="/Medicalstore/Incert" style={{fontSize:"30px",margin:"20px",color:"#4b656f",fontFamily:"Cambria"}}>MedicineAdd</Link>
      </div>
    </div>
  </nav> */}

<nav class="navbar navbar-light "style={{height:"70px",background:"#e7f7fd"}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img
        src="https://cdn-icons-png.flaticon.com/512/9098/9098562.png"
        class="me-2"
        height="50px"
        margin-bottom="20px"
      />
        <Link class="navbar-brand" to="/" style={{fontSize:"30px", margin:"20px",color:"#4b656f",fontFamily:"Cambria"}}>Home</Link>
      <Link class="navbar-brand" to="/Medicalstore" style={{fontSize:"30px",margin:"20px",color:"#4b656f",fontFamily:"Cambria"}}>Medicine</Link>
      <Link class="navbar-brand" to="/Medicalstore/Incert" style={{fontSize:"30px",margin:"20px",color:"#4b656f",fontFamily:"Cambria"}}>MedicineAdd</Link>
    </a>
  </div>
</nav>

  
        <Outlet/>
        </>
    )
}
export default Layout;



