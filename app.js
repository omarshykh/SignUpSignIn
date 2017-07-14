        //var myUser =[];
        //var myPassword=[];


       /* function signUp(){
            var username = document.getElementById("username").value;
             var password = document.getElementById("password").value;
             if(username=="" && password=="")
             {
                 alert("Enter Username and Password!");
                }
                else if(username=="" && password!="")
             {
                 alert("Enter Username!");
                }
                else if(username!="" && password=="")
             {
                 alert("Enter Password!");
                }
                else if(username!="" && password!="")
             {
                myUser.push(username);
             myPassword.push(password);
            document.getElementById("username").value="";
            document.getElementById("password").value="";
            alert("User created Successfully!");
                }

        }*/

        function signUp(){
            var users = localStorage.getItem("users");
            if(users !== null){
                users = JSON.parse(users);
            }
            else if (users === null){
                users=[];
            }

            var userEmail = document.getElementById("username").value;
             var userPassword = document.getElementById("password").value;

            var user ={
                email: userEmail,
                password : userPassword
            };
            users.push(user);
            users = JSON.stringify(users);
            localStorage.setItem('users',users);
            document.getElementById("username").value="";
            document.getElementById("password").value="";
		alert("User Registered Successfully!");
        }

        function signInn(){
            var userEmail = document.getElementById("username").value;
             var userPassword = document.getElementById("password").value;
            var users = localStorage.getItem("users");
            if(users !== null){
                users = JSON.parse(users);
            }
            else if (users == null){
                users=[];
            }
            var authentication=false;

            for(var i=0; i< users.length;i++){
                if(users[i].email === userEmail && users[i].password === userPassword)
                {
                    authentication=true;
                }
            }

            if(authentication == true){
                alert("Login successful");
            }
            else{
                alert("Login failed");
            }
                document.getElementById("username").value="";
                 document.getElementById("password").value="";

        }

        /*function login(){
            var flag=false;
            var username = document.getElementById("username").value;
             var password = document.getElementById("password").value;
             if(username=="" && password=="")
             {
                 alert("Enter Username and Password!");
                }
                else if(username=="" && password!="")
             {
                 alert("Enter Username!");
                }
                else if(username!="" && password=="")
             {
                 alert("Enter Password!");
                }
                else if(username!="" && password!="")
             {
                 for(var i=0;i<myUser.length;i++)
             {
                if(myUser[i]==username && myPassword[i]==password)
                {
                    flag=true;
                }
             }
             if(flag== true){
                 alert("Login Successful !!");
                 document.getElementById("username").value="";
                 document.getElementById("password").value="";
             }
            else {
                 alert("No such User found !!");
                document.getElementById("username").value="";
                 document.getElementById("password").value="";
             }

             }
             
        }*/
