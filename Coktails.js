
// creat the varibles

let theInput = document.getElementsByName('input')[0];
let theItems = Array.from(document.querySelectorAll('.thGrid .grid-Item'));



theInput.oninput = function(){
   
        for  (let item of theItems){
               if (theInput.value === item.firstElementChild.textContent){
                    
                     theItems.forEach((el) => {

                         el.classList.add('theOpacity');

                     })

                     item.classList.remove('theOpacity');
                    

               }else if (theInput.value === '' || theInput.value === null){
                theItems.forEach((el) => {

                    el.classList.remove('theOpacity');
    

                })
            }

            }

}