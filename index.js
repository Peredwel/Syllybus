/**
 * Created by Carolyn on 2017-05-27.
 */

function checkPasswords(){
    var passWord1 = $("password1").val();
    var passWord2 = $("password2").val();

    if(passWord1 != passWord2){
        $("#match").html("Passwords do not match");
    }
}