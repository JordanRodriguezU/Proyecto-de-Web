/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




var Users = {
    tbUsrs: function () {
        tbUsers = localStorage.getItem("tbUsers");
        tbUsers = JSON.parse(tbUsers);
        if (tbUsers === null) {
            tbUsers = [];

        }
        return tbUsers;
    },
    AddUsers: function () {
        var usuarios = Users.tbUsrs();

        var newUser = JSON.stringify({User: $("#user").val(), Password: $("#pass").val()});
        usuarios.push(newUser);
        localStorage.setItem("tbUsers", JSON.stringify(usuarios));
       // alert("The Data Was Saved");
       Materialize.toast('The Data Was Saved', 3000, 'rounded');
        //Materialize.toast('<span>Data Was Saved</span><a class=&quot;btn-flat yellow-text&quot; href=New_User.html;#!&quot;>Ok<a>', 5000);


    },
    AllUsers: function () {
        var usuarios = Users.tbUsrs();

        $('#BodyTable').html("");
        for (var i in usuarios) {
            var users = JSON.parse(usuarios[i]);
            $('tbody').append("<tr><td><strong>" + users.User + "</strong></td><td><strong>" + users.Password + "</strong></td><td>"
                       
               + "<a href='Edit_User.html' onclick='Users.EditUsers(this)' data-position='left' data-delay='50' data-tooltip='Update' class='btn tooltipped Edit'  id='editar'><img class='iconosdeaccion' src='Imgs/Edit_Client.png'></a>"
                +"<a href='Delete_User.html' onclick='Users.DeleteUsers(this)' data-position='left' data-delay='50' data-tooltip='Delete' class='btn tooltipped Delete' id='eliminar'><img class='iconosdeaccion' src='Imgs/delete.png'></a>"
                 //<a class="btn tooltipped" data-position="left" data-delay="50" data-tooltip="Delete" id="eliminar"><img class="iconosdeaccion" src="Imgs/delete.png"></a> 
//                        "<a href='Edit_User.html' onclick='Users.EditUsers(this)' class='Edit'  id='editar'><img class='iconosdeaccion' src='Imgs/Edit_Client.png'></a>"
//
//                        +"<a href='Delete_User.html' onclick='Users.DeleteUsers(this)' class='Delete' id='eliminar'><img class='iconosdeaccion' src='Imgs/delete.png'></a>" 
                    +"</td>");
        }
        //alert("Datos Cargados Correctamente");


    },
    DeleteUsers: function (etiqueta) {
        var deletes = $("a#eliminar.btn.tooltipped.Delete");
        for (var i = 0; i < deletes.length; i++)
        {
            if (deletes[i] === etiqueta) {
                localStorage.setItem("Index", i);

            }
        }
    },
    EditUsers: function (etiqueta) {
        var Edits = $("a#editar.btn.tooltipped.Edit");
        for (var i = 0; i < Edits.length; i++)
        {
            if (Edits[i] === etiqueta) {
                localStorage.setItem("Index", i);

            }
        }
    }
    ,
            Delete: function () {
                var users = Users.tbUsrs();
                var index = parseInt(localStorage.getItem("Index"));
                users.splice(index, 1);
                localStorage.setItem("tbUsers", JSON.stringify(users));
            },
    EtiH3: function () {
        var users = Users.tbUsrs();
        var index = parseInt(localStorage.getItem("Index"));
        var user = JSON.parse(users[index]);
        $("#TextoDelete").html("Are you sure you want to delete the user with name" + " '" + user.User + "'");
    },
    Fill: function () {
        var users = Users.tbUsrs();
        var index = parseInt(localStorage.getItem("Index"));
        var user=JSON.parse(users[index]);
        $("#Name").val(user.User);
        $("#Password").val(user.Password);
    },
    Edit:function() {
        var users = Users.tbUsrs();
        var index = parseInt(localStorage.getItem("Index"));
        users[index]=JSON.stringify({User: $("#Name").val(), Password: $("#Password").val()});
        localStorage.setItem("tbUsers", JSON.stringify(users));
    }

};