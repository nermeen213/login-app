document.getElementById("window").addEventListener('click',function(){
    window.location='./index.html'

})



var usernameInput =document.getElementById("userName");
var emailInput =document.getElementById("userEmail");
var passwordInput =document.getElementById("userPassword");

var current =emailInput.value;
var pattern =document.getElementById("pattern");
var pattern2 =document.getElementById("patterntwo");
var logincontainer =[

]



if(localStorage.getItem("loginData")!=null){
    logincontainer=JSON.parse(localStorage.getItem("loginData"));
    

}




  function testData(){
    if(regexEmail()==true && regexName()==true){
        var current =emailInput.value;
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
            
                if(logincontainer[i].email.includes(current)){


                    isCoprrect=true;

                    break;
    
                   
                }else{
                    isCoprrect=false;
               
               
                }
        
            }
    
    
            if(isCoprrect==true){
               document.getElementById("exist").classList.remove("d-none")
               document.getElementById("suss").classList.add("d-none")
            }else{
                var loginData={
                    name:usernameInput.value,
                    email:emailInput.value,
                    password:passwordInput.value,
                   }
                    logincontainer.push(loginData)
                           
                   localStorage.setItem("loginData",JSON.stringify(logincontainer));
                   document.getElementById("suss").classList.remove("d-none")
                   document.getElementById("exist").classList.add("d-none")
    
            }
    

        }

        
        


    }
    clear()

       
    }











function regexName(){
    var regex = /^[a-zA-Z]{3}/
    var name =usernameInput.value;
    if(regex.test(name)==true){
        usernameInput.classList.add("is-valid")
        usernameInput.classList.remove("is-invalid")
        pattern2.classList.add("d-none")
        return true;
        
    }else{
        usernameInput.classList.add("is-invalid")
        usernameInput.classList.remove("is-valid")
        pattern2.classList.remove("d-none")
        return false;
    }
}







function regexEmail(){

    var regex =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
    var text =emailInput.value;
    if(regex.test(text)==true){
        emailInput.classList.add("is-valid")
        emailInput.classList.remove("is-invalid")
        pattern.classList.add("d-none")
        return true;
    }else{
        emailInput.classList.add("is-invalid")
        emailInput.classList.remove("is-valid")
        pattern.classList.remove("d-none")
        return false;

    }


    clear()
   
}








 function clear(){
    usernameInput.value=""
    emailInput.value=""
    passwordInput.value=""
 }

 











