var productArray = []

function showProductList(array){
    
    let htmlContentToAppend = "";     
    for(let i = 0; i < array.length; i++){
        let product = array[i];

           htmlContentToAppend += `         
           <div class="list-group-item list-group-item-action">        
              <div class="row">                 
                  <div class="col-3">                     
                   <img src="` + product.imgSrc + `" alt="` + product.desc + `" class="img-thumbnail">                 
                  </div>                 
                 <div class="col">                     
                   <div class="d-flex w-100 justify-content-between">                         
                      <h4 class="mb-1">` + product.name + `</h4>                         
                      <small class="text-muted">` + product.soldCount + ` artículos</small>                     
                   </div>    
                     <p>${product.description}</p>              
                </div>             
                </div>         
              </div> 
           </div>       
           `          

           document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
    }
}
;
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function () {
    showSpinner();
    getJSONData(PRODUCTS_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            productArray = resultObj.data;
            //Muestro Productos
            showProductList(productArray);
        }
    });
});
