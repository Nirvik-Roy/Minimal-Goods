export default function Categories () {
    return(
        <>
     
            <div className="categories_wrapper_divs_wrapper">
            {['Travel','Home','Office','Kitchen','Fashion','Furniture','Books','Lighting','Tech','Decor','Bath & Bed','More'].map((e,i)=>{
            return(
                
                <div key={i} className="categories_div">
              <p>{e}</p>   
                 </div>
                
            )
        })}
                 
            </div>
        </>
    )
}