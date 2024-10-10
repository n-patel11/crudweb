function Home(){
    return(
        <>
 {/* <div class="jumbotron text-center">
  <h1> Welcome </h1>
</div> */}
{/* <div className="con">
<img src="https://media.istockphoto.com/id/1313889711/vector/pharmacy-logo-icon-design-vector.jpg?s=612x612&w=0&k=20&c=VCXSKZSViMbf3eXYZ8EeUqJmuw67M13H1MehDvR3wxI=" style={{height:"800px" , width:"800px", marginLeft:"390px"}}/>
 </div> */}

 
            <div id="carouselExampleIndicators" class="carousel slide carousel-main">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="https://png.pngtree.com/thumb_back/fh260/background/20230903/pngtree-drug-safety-what-the-pharmacist-should-know-image_13182921.jpg" style={{height:"810px" , width:"1500px",marginTop:"10px", marginLeft:"97px"}}/>
                    </div>
                    <div class="carousel-item">
                    <img src="https://png.pngtree.com/thumb_back/fh260/background/20240408/pngtree-composition-of-medicine-bottles-and-pills-with-pharmacy-store-shelves-background-image_15651656.jpg" style={{height:"810px" , width:"1500px",marginTop:"10px", marginLeft:"100px"}}/>
                    </div>
                    <div class="carousel-item">
                    <img src="https://img.freepik.com/premium-photo/assortment-medicines-pills-white-surface_175117-7514.jpg" style={{height:"810px" , width:"1500px",marginTop:"10px", marginLeft:"100px"}}/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}
export default Home;

