import windmill from './assets/windmill.avif';

function Card(){
    return(
         <div className="card">    
        <img src={windmill} alt="windmill" className="card-img-top" />
        <h1 className='card-title'>Windmill Inventory</h1>
        <p className='card-text'>A windmill is a machine that harnesses the power of the wind. Windmills may be used to grind grain into flour, to pump water, or to produce electricity. A windmill has a number of blades that spin around when wind blows on them. The blades are mounted on a tall tower or building.</p>
        </div> 

    )
      
}











export default Card