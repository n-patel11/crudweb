import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";

function Getall() {
    const [data, setData] = useState([])
    const [isDeleted,setIsDeleted]=useState(false)

    useEffect(() => {
        fetch("http://localhost:3000/Medicalstore/").
            then(res => res.json()).
            then(res => setData(res))
    }, [isDeleted])
    const naviget=useNavigate();

const formattedData = data.map((project, index) => {
    return (
        <div className="col-3 main" key={project.id}> 
            <div className="card mt-3" style={{width:"200 px", background:"#fff9fe"}}>
                <div className="con">
                    <img src={project.imageUrl} className="card-img-top"  style={{height:"275px",width:"294px",background:"#E8E9EB", marginTop:"6px",margin:"5px"}} />
                </div>
                <div className="card-body mt-1">
                    <h5 className="card-title">{project.name}</h5>
                    <h5 className="card-title">PRICE :- {project.price}</h5>
                    {/* <h5 className="card-title">pharmaCompanie :- {project.pharmaCompanie}</h5>
                    <h5 className="card-title">information :- {project.information}</h5> */}
                    <div className="row ">
                    <Link to={"/Medicalstore/" + project.id} className="btn btn-outline-primary mt-2">Read More</Link>
                    <Link  className="btn btn-outline-warning col  mt-1"  to={'/Medicalstore/Update/' + project.id}>Edit</Link>
                    <button className="btn btn-outline-danger col  ms-1 mt-1" onClick={
                            ()=>{
                                   fetch("http://localhost:3000/Medicalstore/"+project.id,{method:'DELETE'}).
                                   then(res=>setIsDeleted(!isDeleted))
                            }
                        }>delte</button>

                    </div>
                </div>
            </div>
        </div>
    );
});

return (
    <>
        {/* <button onClick={() => { navigate('/getAll/insert'); }}>Insert</button> */}
        {/* <div className="Heading">
            My Order !!!
        </div> */}
        {/* <button onClick={
            ()=>{
                              naviget('/Medicalstore/Incert')
           }
         } class="btn btn-info">insert</button> */}
        <div className="container ">
            <div className="row">
                {formattedData}
            </div>
        </div>
    </>
);
}

export default Getall;




