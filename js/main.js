tttttt/*----------------  menu functionality start   ------------------*/
window.hamevalue = 0; // Global variable 
// function menu(){
//     var headerNavbar = document.getElementById("headerNavbar"); 
//     var hamburgerImage1 = document.getElementById('hamburgerImage1');
//     var hamburgerImage2 = document.getElementById('hamburgerImage2');
//     if(hamevalue%2 == 0){
//         headerNavbar.style.display="block";
//         hamevalue++;  
//     }
//     else if(hamevalue%2 != 0){
//         headerNavbar.style.display="none";
//         hamevalue++;  
//     }
// }
menu1 = () => {
    var headerNavbar = document.getElementById("headerNavbar"); 
    var hamburgerImage1 = document.getElementById('hamburgerImage1');
    var hamburgerImage2 = document.getElementById('hamburgerImage2');
    headerNavbar.style.display="block";
    hamburgerImage1.style.display="none";
    hamburgerImage2.style.display="block";
    hamevalue++;
}
menu2 = () => {
    var headerNavbar = document.getElementById("headerNavbar"); 
    var hamburgerImage1 = document.getElementById('hamburgerImage1');
    var hamburgerImage2 = document.getElementById('hamburgerImage2');
    headerNavbar.style.display="none";
    hamburgerImage1.style.display="block";
    hamburgerImage2.style.display="none";
    hamevalue++;
}
/*-----------------------   menu functionality end  ----------------------*/ 
/*-----------------------  Form validation start  ------------------------*/
onSubmit = (e) =>{
    e.preventDefault();
    var txtName= document.getElementById("txtName");
    var txtPhoneNumber= document.getElementById('txtPhoneNumber');
    var txtEmail= document.getElementById('txtEmail');
    var txtPropertyName= document.getElementById('txtPropertyName');
    var txtMessage= document.getElementById('txtMessage');
    var errName= document.getElementById('errName');
    var errPhoneNumber= document.getElementById('errPhoneNumber');
    var errEmail= document.getElementById('errEmail');
    var errPropertieeName= document.getElementById('errPropertieeName');
    var errMessage= document.getElementById('errMessage');
    var sucessMessage= document.getElementById('sucessMessage');
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var namePattern = /^[a-zA-Z]*$/;
    sucessMessage.style.display='none';
    if(txtName.value === ""){
        errName.innerHTML="Please enter the name";
        errName.style.display="block";
    }
    if(txtName.value !== ""){
        if (namePattern.test(txtName.value)==true) {  
            errName.style.display="none";
        } 
        if(namePattern.test(txtName.value)==false){ 
            errName.innerHTML = "Please enter only letters ";
            errName.style.display="block";     
        } 
    }
    if(txtPhoneNumber.value === ""){
        errPhoneNumber.innerHTML="Please enter the phone number";
        errPhoneNumber.style.display="block";
    }
    if(txtPhoneNumber.value !== ""){ 
        if(isNaN(txtPhoneNumber.value)){
            errPhoneNumber.innerHTML = "Please enter only numbers";
            errPhoneNumber.style.display="block"; 
            return false;
        }
        else if(txtPhoneNumber.value.length != 10){
            errPhoneNumber.innerHTML = "Please enter the 10 digit mobile number";
            errPhoneNumber.style.display="block"; 
        }
        else{
            errPhoneNumber.style.display = "none";
        } 
    }
    if(txtEmail.value === ""){
        errEmail.innerHTML="Please enter the email";
        errEmail.style.display="block";
    }
    if(txtEmail.value !== ""){
        if(emailPattern.test(txtEmail.value) === true){
            errEmail.style.display = "none";
        }
        if(emailPattern.test(txtEmail.value) === false){
            errEmail.innerHTML= "Please enter the Email corretly.";
            errEmail.style.display = "block";
        } 
    }
    if(txtPropertyName.value === ""){
        errPropertieeName.innerHTML="Please enter the propertie name";
        errPropertieeName.style.display="block";
    }
    if(txtPropertyName.value !== ""){ 
        errPropertieeName.style.display="none";
    }
    if(txtMessage.value === ""){
        errMessage.innerHTML="Please enter the message";
        errMessage.style.display="block";
    }
    if(txtMessage.value !== ""){
        if(txtMessage.value.length <= 5){
            errMessage.innerHTML="please enetr the message more than five letters";
            errMessage.style.display="block";
        }
        else{
            errMessage.style.display="none";            
        } 
    }
    if(txtMessage.value.length <= 5 && txtName.value !== "" && txtPhoneNumber.value !== "" && txtEmail.value !== "" && txtPropertyName.value !== '' && txtMessage.value !==""){
        sucessMessage.style.display="block";
        txtName.value= "";
        txtPhoneNumber.value= "";
        txtEmail.value= "";
        txtPropertyName.value= "";
        txtMessage.value= "";
    }
}
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
/*------------------ Form validation end    ---------------------*/ 
showWest6th = () => {
    document.getElementById("west6thDistrict").style.display="block";
    document.getElementById("congressDistrict").style.display="none";
    document.getElementById("entertainmentDistrict").style.display="none";
    document.getElementById("redRiverMusicDistrict").style.display="none";
    document.getElementById("conventionDistrict").style.display="none";
    document.getElementById("eastAustinDistrict").style.display="none";

    document.getElementById("West6th").style.opacity="0.9";
    document.getElementById("CongressAvenue").style.opacity="0.5";
    document.getElementById("Entertainment").style.opacity="0.5";
    document.getElementById("RedRiverMusic").style.opacity="0.5";
    document.getElementById("Convention").style.opacity="0.5";
    document.getElementById("EastAustin").style.opacity="0.5";
}
showCongressAvenue = () => {
    document.getElementById("west6thDistrict").style.display="none";
    document.getElementById("congressDistrict").style.display="block";
    document.getElementById("entertainmentDistrict").style.display="none";
    document.getElementById("redRiverMusicDistrict").style.display="none";
    document.getElementById("conventionDistrict").style.display="none";
    document.getElementById("eastAustinDistrict").style.display="none";

    document.getElementById("West6th").style.opacity="0.5";
    document.getElementById("CongressAvenue").style.opacity="0.9";
    document.getElementById("Entertainment").style.opacity="0.5";
    document.getElementById("RedRiverMusic").style.opacity="0.5";
    document.getElementById("Convention").style.opacity="0.5";
    document.getElementById("EastAustin").style.opacity="0.5"; 
}
showEntertainment = () => {
    document.getElementById("west6thDistrict").style.display="none";
    document.getElementById("congressDistrict").style.display="none";
    document.getElementById("entertainmentDistrict").style.display="block";
    document.getElementById("redRiverMusicDistrict").style.display="none";
    document.getElementById("conventionDistrict").style.display="none";
    document.getElementById("eastAustinDistrict").style.display="none";

    document.getElementById("West6th").style.opacity="0.5";
    document.getElementById("CongressAvenue").style.opacity="0.5";
    document.getElementById("Entertainment").style.opacity="0.9";
    document.getElementById("RedRiverMusic").style.opacity="0.5";
    document.getElementById("Convention").style.opacity="0.5";
    document.getElementById("EastAustin").style.opacity="0.5";
}
showRedRiverMusic = () => {
    document.getElementById("west6thDistrict").style.display="none";
    document.getElementById("congressDistrict").style.display="none";
    document.getElementById("entertainmentDistrict").style.display="none";
    document.getElementById("redRiverMusicDistrict").style.display="block";
    document.getElementById("conventionDistrict").style.display="none";
    document.getElementById("eastAustinDistrict").style.display="none";

    document.getElementById("West6th").style.opacity="0.5";
    document.getElementById("CongressAvenue").style.opacity="0.5";
    document.getElementById("Entertainment").style.opacity="0.5";
    document.getElementById("RedRiverMusic").style.opacity="0.9";
    document.getElementById("Convention").style.opacity="0.5";
    document.getElementById("EastAustin").style.opacity="0.5";
}
showConvention = () => {
    document.getElementById("west6thDistrict").style.display="none";
    document.getElementById("congressDistrict").style.display="none";
    document.getElementById("entertainmentDistrict").style.display="none";
    document.getElementById("redRiverMusicDistrict").style.display="none";
    document.getElementById("conventionDistrict").style.display="block";
    document.getElementById("eastAustinDistrict").style.display="none";

    document.getElementById("West6th").style.opacity="0.5";
    document.getElementById("CongressAvenue").style.opacity="0.5";
    document.getElementById("Entertainment").style.opacity="0.5";
    document.getElementById("RedRiverMusic").style.opacity="0.5";
    document.getElementById("Convention").style.opacity="0.9";
    document.getElementById("EastAustin").style.opacity="0.5";
}
showEastAustin = ()=> {
    document.getElementById("west6thDistrict").style.display="none";
    document.getElementById("congressDistrict").style.display="none";
    document.getElementById("entertainmentDistrict").style.display="none";
    document.getElementById("redRiverMusicDistrict").style.display="none";
    document.getElementById("conventionDistrict").style.display="none";
    document.getElementById("eastAustinDistrict").style.display="block";

    document.getElementById("West6th").style.opacity="0.5";
    document.getElementById("CongressAvenue").style.opacity="0.5";
    document.getElementById("Entertainment").style.opacity="0.5";
    document.getElementById("RedRiverMusic").style.opacity="0.5";
    document.getElementById("Convention").style.opacity="0.5";
    document.getElementById("EastAustin").style.opacity="0.9";
}
// ACCORDANCE  FOR MOBLE VIEW 
window.West6th = 0;
window.CongressAvenue = 0;
window.entertainment = 0;
window.redRiverMusic = 0;
window.convention = 0;
window.eastAustin = 0;
MobShowWest6th = () => {
    if(West6th%2 == 0){
        document.getElementById("MobWest6thDistrict").style.display="block";
        document.getElementById("MobCongressDistrict").style.display="none";
        document.getElementById("MobEntertainmentDistrict").style.display="none";
        document.getElementById("MobRedRiverMusicDistrict").style.display="none";
        document.getElementById("MobConventionDistrict").style.display="none";
        document.getElementById("MobEastAustinDistrict").style.display="none";
        document.getElementById("west6thUpArrow").style.display="block";
        document.getElementById("west6thDownArrow").style.display="none";
        West6th++;
    }
    else if(West6th%2 != 0){
        document.getElementById("MobWest6thDistrict").style.display="none";
        document.getElementById("MobCongressDistrict").style.display="none";
        document.getElementById("MobEntertainmentDistrict").style.display="none";
        document.getElementById("MobRedRiverMusicDistrict").style.display="none";
        document.getElementById("MobConventionDistrict").style.display="none";
        document.getElementById("MobEastAustinDistrict").style.display="none";
        document.getElementById("west6thUpArrow").style.display="none";
        document.getElementById("west6thDownArrow").style.display="block";
        West6th++;
    }  
    CongressAvenue=0;
    entertainment=0;
    redRiverMusic=0;
    convention=0;
    eastAustin=0; 
    document.getElementById("congUpArrow").style.display="none";
    document.getElementById("congDownArrow").style.display="block";
    document.getElementById("entertainUpArrow").style.display="none";
    document.getElementById("entertainDownArrow").style.display="block";
    document.getElementById("redUpArrow").style.display="none";
    document.getElementById("redDownArrow").style.display="block"; 
    document.getElementById("conventionUpArrow").style.display="none";
    document.getElementById("conventionDownArow").style.display="block";
    document.getElementById("eastUpArrow").style.display="none";
    document.getElementById("eastDownArrow").style.display="block"; 
}
MobShowCongressAvenue = () => {
    if(CongressAvenue%2 == 0){
        document.getElementById("MobWest6thDistrict").style.display="none";
        document.getElementById("MobCongressDistrict").style.display="block";
        document.getElementById("MobEntertainmentDistrict").style.display="none";
        document.getElementById("MobRedRiverMusicDistrict").style.display="none";
        document.getElementById("MobConventionDistrict").style.display="none";
        document.getElementById("MobEastAustinDistrict").style.display="none"; 
        document.getElementById("congUpArrow").style.display="block";
        document.getElementById("congDownArrow").style.display="none";
        CongressAvenue++;
    }
    else if(CongressAvenue%2 !== 0){
        document.getElementById("MobWest6thDistrict").style.display="none";
        document.getElementById("MobCongressDistrict").style.display="none";
        document.getElementById("MobEntertainmentDistrict").style.display="none";
        document.getElementById("MobRedRiverMusicDistrict").style.display="none";
        document.getElementById("MobConventionDistrict").style.display="none";
        document.getElementById("MobEastAustinDistrict").style.display="none"; 
        document.getElementById("congUpArrow").style.display="none";
        document.getElementById("congDownArrow").style.display="block";
        CongressAvenue++;
    }
    West6th=0; 
    entertainment=0;
    redRiverMusic=0;
    convention=0;
    eastAustin=0;
    document.getElementById("west6thUpArrow").style.display="none";
    document.getElementById("west6thDownArrow").style.display="block"; 
    document.getElementById("entertainUpArrow").style.display="none";
    document.getElementById("entertainDownArrow").style.display="block";
    document.getElementById("redUpArrow").style.display="none";
    document.getElementById("redDownArrow").style.display="block"; 
    document.getElementById("conventionUpArrow").style.display="none";
    document.getElementById("conventionDownArow").style.display="block";
    document.getElementById("eastUpArrow").style.display="none";
    document.getElementById("eastDownArrow").style.display="block"; 
}
MobShowEntertainment = () => {
    if(entertainment%2 == 0){
        document.getElementById("MobWest6thDistrict").style.display="none";
        document.getElementById("MobCongressDistrict").style.display="none";
        document.getElementById("MobEntertainmentDistrict").style.display="block";
        document.getElementById("MobRedRiverMusicDistrict").style.display="none";
        document.getElementById("MobConventionDistrict").style.display="none";
        document.getElementById("MobEastAustinDistrict").style.display="none"; 
        document.getElementById("entertainUpArrow").style.display="block";
        document.getElementById("entertainDownArrow").style.display="none";
        entertainment++;
    }
    else if(entertainment%2 != 0){
        document.getElementById("MobWest6thDistrict").style.display="none";
        document.getElementById("MobCongressDistrict").style.display="none";
        document.getElementById("MobEntertainmentDistrict").style.display="none";
        document.getElementById("MobRedRiverMusicDistrict").style.display="none";
        document.getElementById("MobConventionDistrict").style.display="none";
        document.getElementById("MobEastAustinDistrict").style.display="none";  
        document.getElementById("entertainUpArrow").style.display="none";
        document.getElementById("entertainDownArrow").style.display="block";
        entertainment++;
    } 
    West6th=0;
    CongressAvenue=0; 
    redRiverMusic=0;
    convention=0;
    eastAustin=0;
    document.getElementById("west6thUpArrow").style.display="none";
    document.getElementById("west6thDownArrow").style.display="block";
    document.getElementById("congUpArrow").style.display="none";
    document.getElementById("congDownArrow").style.display="block"; 
    document.getElementById("redUpArrow").style.display="none";
    document.getElementById("redDownArrow").style.display="block"; 
    document.getElementById("conventionUpArrow").style.display="none";
    document.getElementById("conventionDownArow").style.display="block";
    document.getElementById("eastUpArrow").style.display="none";
    document.getElementById("eastDownArrow").style.display="block"; 
}
MobShowRedRiverMusic = () => {
    if(redRiverMusic%2 == 0){
        document.getElementById("MobWest6thDistrict").style.display="none";
        document.getElementById("MobCongressDistrict").style.display="none";
        document.getElementById("MobEntertainmentDistrict").style.display="none";
        document.getElementById("MobRedRiverMusicDistrict").style.display="block";
        document.getElementById("MobConventionDistrict").style.display="none";
        document.getElementById("MobEastAustinDistrict").style.display="none";
        document.getElementById("redUpArrow").style.display="block";
        document.getElementById("redDownArrow").style.display="none";
        redRiverMusic++;
    }
    else if(redRiverMusic%2 != 0){
        document.getElementById("MobWest6thDistrict").style.display="none";
        document.getElementById("MobCongressDistrict").style.display="none";
        document.getElementById("MobEntertainmentDistrict").style.display="none";
        document.getElementById("MobRedRiverMusicDistrict").style.display="none";
        document.getElementById("MobConventionDistrict").style.display="none";
        document.getElementById("MobEastAustinDistrict").style.display="none";
        document.getElementById("redUpArrow").style.display="none";
        document.getElementById("redDownArrow").style.display="block"; 
        redRiverMusic++;
    }
    West6th=0;
    CongressAvenue=0;
    entertainment=0; 
    convention=0;
    eastAustin=0;
    document.getElementById("west6thUpArrow").style.display="none";
    document.getElementById("west6thDownArrow").style.display="block";
    document.getElementById("congUpArrow").style.display="none";
    document.getElementById("congDownArrow").style.display="block";
    document.getElementById("entertainUpArrow").style.display="none";
    document.getElementById("entertainDownArrow").style.display="block"; 
    document.getElementById("conventionUpArrow").style.display="none";
    document.getElementById("conventionDownArow").style.display="block";
    document.getElementById("eastUpArrow").style.display="none";
    document.getElementById("eastDownArrow").style.display="block"; 
}
MobShowConvention = () => {
    if(convention%2 == 0){
        document.getElementById("MobWest6thDistrict").style.display="none";
        document.getElementById("MobCongressDistrict").style.display="none";
        document.getElementById("MobEntertainmentDistrict").style.display="none";
        document.getElementById("MobRedRiverMusicDistrict").style.display="none";
        document.getElementById("MobConventionDistrict").style.display="block";
        document.getElementById("MobEastAustinDistrict").style.display="none"; 
        document.getElementById("conventionUpArrow").style.display="block";
        document.getElementById("conventionDownArow").style.display="none";
        convention++;
    }
    else if(convention%2 != 0){
        document.getElementById("MobWest6thDistrict").style.display="none";
        document.getElementById("MobCongressDistrict").style.display="none";
        document.getElementById("MobEntertainmentDistrict").style.display="none";
        document.getElementById("MobRedRiverMusicDistrict").style.display="none";
        document.getElementById("MobConventionDistrict").style.display="none";
        document.getElementById("MobEastAustinDistrict").style.display="none"; 
        document.getElementById("conventionUpArrow").style.display="none";
        document.getElementById("conventionDownArow").style.display="block";
        convention++; 
    }   
    West6th=0;
    CongressAvenue=0;
    entertainment=0;
    redRiverMusic=0; 
    eastAustin=0; 
    document.getElementById("west6thUpArrow").style.display="none";
    document.getElementById("west6thDownArrow").style.display="block";
    document.getElementById("congUpArrow").style.display="none";
    document.getElementById("congDownArrow").style.display="block";
    document.getElementById("entertainUpArrow").style.display="none";
    document.getElementById("entertainDownArrow").style.display="block";
    document.getElementById("redUpArrow").style.display="none";
    document.getElementById("redDownArrow").style.display="block";  
    document.getElementById("eastUpArrow").style.display="none";
    document.getElementById("eastDownArrow").style.display="block"; 
}
MobShowEastAustin = () => {
    if(eastAustin%2 == 0){
        document.getElementById("MobWest6thDistrict").style.display="none";
        document.getElementById("MobCongressDistrict").style.display="none";
        document.getElementById("MobEntertainmentDistrict").style.display="none";
        document.getElementById("MobRedRiverMusicDistrict").style.display="none";
        document.getElementById("MobConventionDistrict").style.display="none";
        document.getElementById("MobEastAustinDistrict").style.display="block"; 
        document.getElementById("eastUpArrow").style.display="block";
        document.getElementById("eastDownArrow").style.display="none";
        eastAustin++;
    }
    else if(eastAustin%2 != 0){
        document.getElementById("MobWest6thDistrict").style.display="none";
        document.getElementById("MobCongressDistrict").style.display="none";
        document.getElementById("MobEntertainmentDistrict").style.display="none";
        document.getElementById("MobRedRiverMusicDistrict").style.display="none";
        document.getElementById("MobConventionDistrict").style.display="none";
        document.getElementById("MobEastAustinDistrict").style.display="none";
        document.getElementById("eastUpArrow").style.display="none";
        document.getElementById("eastDownArrow").style.display="block"; 
        eastAustin++;
    }
    West6th=0;
    CongressAvenue=0;
    entertainment=0;
    redRiverMusic=0;
    convention=0; 
    document.getElementById("west6thUpArrow").style.display="none";
    document.getElementById("west6thDownArrow").style.display="block";
    document.getElementById("congUpArrow").style.display="none";
    document.getElementById("congDownArrow").style.display="block";
    document.getElementById("entertainUpArrow").style.display="none";
    document.getElementById("entertainDownArrow").style.display="block";
    document.getElementById("redUpArrow").style.display="none";
    document.getElementById("redDownArrow").style.display="block"; 
    document.getElementById("conventionUpArrow").style.display="none";
    document.getElementById("conventionDownArow").style.display="block"; 
} 


/*javascript media queries  */
(function () {           
    function resize() {
        if (window.matchMedia('only screen and (max-width: 576px)').matches) {
            if(hamevalue%2 ==0){
              document.getElementById("hamburgerImage1").style.display="block";
                document.getElementById("hamburgerImage2").style.display="none";
                document.getElementById("headerNavbar").style.display= "none";                
            }
            else if(hamevalue%2 != 0){
                document.getElementById("hamburgerImage2").style.display="block";
                document.getElementById("hamburgerImage1").style.display="none"; 
            }
                               
        } 
        else if (window.matchMedia('only screen and (min-width: 577px) and '+'(max-width: 1800px)').matches) {
            document.getElementById("hamburgerImage2").style.display="none";             
            document.getElementById("hamburgerImage1").style.display="none";   
            document.getElementById("headerNavbar").style.display= "block";                
        }  
    }
 
    window.addEventListener('resize', resize, false);
    resize();
}());