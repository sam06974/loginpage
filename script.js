function submitlog() {
    event.preventDefault()
    username= document.getElementById("USERMAILLO").value;
    passwrd=document.getElementById("passwordlog").value;


    let user=localStorage.getItem(username);
    let data=JSON.parse(user);
    console.log(data);

    if( user==null )  {
        loginpage.innerHTML='wrong username';
    }
    else if(username==data.USERMAILLO&&passwrd==data.passwordlog)
    {
        loginpage.innerHTML='loged in';
    }
    else 
    {
        loginpage.innerHTML='wrongpassword';

    }

}