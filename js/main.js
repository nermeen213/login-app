document.getElementById('call').addEventListener('click',function(){
  window.location = './sign.html'
})






var emailInput= document.getElementById("emailUser");
var passwordInput= document.getElementById("passwordUser");
var btnLogin =document.getElementById("logBTN")
var para =document.getElementById("incorrect");
var pattern =document.getElementById("pattern");
var patterntwo =document.getElementById("patterntwo");




var logincontainer=[

]

logincontainer=JSON.parse(localStorage.getItem("loginData"));
   


function testData(){
   if(regexEmail()==true){
      var current=emailInput.value;
      
      let isCoprrect=true;
      
         
      if(logincontainer.length==0){
         var loginData={
           
             email:emailInput.value,
             password:passwordInput.value,
            }
             logincontainer.push(loginData)
                    
            localStorage.setItem("loginData",JSON.stringify(logincontainer));
            // document.getElementById("suss").classList.remove("d-none")
   
      }else{
         for(var i=0 ;i<logincontainer.length;i++){
              
            if(logincontainer[i].email==current){
                isCoprrect=true;
                break;
   
               
            }else{
                isCoprrect=false;
           
           
            }
    
        }
   
   
        if(isCoprrect==true){
        
          window.location = './log.html'
          
         
   
        }else{
         // alert("hello")
          document.getElementById('font').classList.remove('d-none')
        
   
        }
   
   
         
      }
   
             
          
   


   

   }
   clear()

      
      
}























function regexEmail(){
   var regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
   var text =emailInput.value;
   var message =document.getElementById('suss')
   if (regex.test(text)==true){
      emailInput.classList.add("is-valid")
      emailInput.classList.remove("is-invalid")
      pattern.classList.add("d-none")
     
      return true;

   }
   else{
      emailInput.classList.add("is-invalid")
      emailInput.classList.remove("is-valid")
      pattern.classList.remove("d-none")
     
      return false;

   }


}


















