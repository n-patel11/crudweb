import { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";

function Getbyid(){
    const params = useParams()
    const [stu,setStudent]=useState({})
    useEffect(() => {
        fetch("http://localhost:3000/Medicalstore/"+params.id).
            then(res => res.json()).
            then(res => setStudent (res))
    }
    , [])
    const naviget=useNavigate();
    return (
        <>
           
           <div className="main" style={{marginLeft:"500px",width:"700px"}}> 
            <div className="card" style={{width:"210 px", background:"#fff9fe",height:"auto",marginTop:"50px"}}>
                <div className="con"style={{width:"700 px", background:"#fff9fe"}}>
                <img  className="card-img-top" alt="..." style={{height:"360px",width:"500px",marginLeft:"100px",marginTop:"30px"}} src={stu.imageUrl} />
                </div>
                <div className="card-body"style={{width:"700px" , border:"4px",marginTop:"5px"}} >
                   

                <h5 className="card-title" style={{ fontFamily:"Arial Black",textAlign:"center", marginTop:"5px",marginBottom:"5px"}}>Name :- {stu.name}</h5>
               
                    <h5 className="card-title"style={{fontFamily:"Arial Black",textAlign:"center",marginBottom:"5px"}}>Price :- {stu.price}</h5>
                    
                    <h5 className="card-title" style={{fontFamily:"Arial Black",textAlign:"center",marginBottom:"5px"}}>PharmaCompanie :- {stu.pharmaCompanie}</h5>
                   
                    <h5 className="card-title overflow" style={{fontFamily:"Cambria",marginBottom:"5px", overflow:"hidden",marginLeft:"auto"}}>Information :- {stu.information}</h5>
                 
                    <div className="row ">
                  
                    </div>
                     <button className="btn btn-outline-danger" style={{fontFamily:"Arial Black",height:"35px",width:"200px",marginLeft:"250px",marginTop:"6px"}} onClick={
                         ()=>{
                         naviget('/Medicalstore')
                          }
                      }>Back</button>

                   
                </div>
          </div>
    </div> 
        </>
    )
}
export default Getbyid