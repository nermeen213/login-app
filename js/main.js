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
   if (regexEmail()==true){
      var current=emailInput.value;
      var password =passwordInput.value;
      let isCoprrect=true;
      
         
      if(logincontainer.length==0){
         var loginData={
             name:usernameInput.value,
             email:emailInput.value,
             password:passwordInput.value,
            }
             logincontainer.push(loginData)
                    
            localStorage.setItem("loginData",JSON.stringify(logincontainer));
            document.getElementById("suss").classList.remove("d-none")
   
      }else{
         for(var i=0 ;i<logincontainer.length;i++){
              
            if(logincontainer[i].email==current && logincontainer[i].password==password){
                isCoprrect=true;
                break;
   
               
            }else{
                isCoprrect=false;
           
           
            }
    
        }
   
   
        if(isCoprrect==true){
         // logincontainer[i].name;
         // localStorage.setItem("name",JSON.stringify(logincontainer));
          window.location = './log.html'
          
         
   
        }else{
          document.getElementById('font').classList.remove('d-none')
   
        }
   
   
         
      }
   
             
          
   
          
          
   
   
      
      
   

   }
   clear()
  
      
}














// btnLogin.addEventListener('click', function(){
//    if (regexEmail()==true){
//       var email = emailInput.value;
//       var password=passwordInput.value;
  
  
  
     
//        if(email.length == 0 || password.length==0){
//          para.classList.remove("d-none")
          
          
         
//        }
//        else {
//           para.classList.add("d-none")
//        }
  
//        var data ={
//           email: emailInput.value ,
//           password:passwordInput.value ,
  
//        }
//        datacontainer.push(data);
//        localStorage.setItem("datbase",JSON.stringify(datacontainer));
//        console.log(datacontainer);
  
       
  

//    }
   


// });





function regexEmail(){
   var regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
   var text =emailInput.value;
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


















