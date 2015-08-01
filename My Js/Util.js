/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Utils = Utils || {
    UserEnter: ['Admin', '123'],
        tbUsrs: function () {
        tbUsers = localStorage.getItem("tbUsers");
        tbUsers = JSON.parse(tbUsers);
        if (tbUsers === null) {
            tbUsers = [];

        }
        return tbUsers;
    },
    OtherUser: function (nom,pass) {
        var usuarios = Utils.tbUsrs();
            for (var i in usuarios) {
            var users = JSON.parse(usuarios[i]);
            if ((users.User===nom)&&(users.Password===pass)) {
                localStorage.setItem("UserLog",users.User);
                return true;
                
            }
        }
        return false;
    },
    ValidateUser: function () {

        var user = $('#user').val();
        var pass = $('#pass').val();


        if (((user === "Admin") && (pass === "123")))
        {
            $('#btn').attr("href", "Dasboard.html");
            
            localStorage.setItem("UserLog", "Admin");
        }
        else if (Utils.OtherUser(user,pass) === true) {
            $('#btn').attr("href", "Dasboard.html");
        }
        else {
            alert("Lo Sentimos Los datos proporcionados Son Incorrectos");
        }
    },
    Html: function () {
        $("html").css({
            "padding-right": "0px",
            "overflow": "visible"
        });
    },
    ValidateUserEnter: function () {
        if (localStorage.getItem("UserLog")!=="Admin") {
            $("#Admin").css("display", "none");
            $(".row .col.s3").css("width", "33.33%");
            $("#usuariodropdown").append(localStorage.getItem("UserLog"));
        }
        else{
             $("#usuariodropdown").append("Admin");
        }
    }
};
