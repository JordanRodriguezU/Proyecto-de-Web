/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var Chambas = {
    tbChambas: function () {
        tbchambas = localStorage.getItem("tbChambas");
        tbchambas = JSON.parse(tbchambas);
        if (tbchambas === null) {
            tbchambas = [];

        }
        return tbchambas;
    },
    tbCls: function () {
        tbClients = localStorage.getItem("tbClients");
        tbClients = JSON.parse(tbClients);
        if (tbClients === null) {
            tbClients = [];

        }
        return tbClients;
    },
    LlenarData: function ()
    {
        var Clientes = Chambas.tbCls();
        for (var i in Clientes) {
            var Client = JSON.parse(Clientes[i]);
            $("#Clientes").append("<option value='" + Client.First + " " + Client.Last + "' />");

        }
    },
    AllChambas: function () {
        var chambas = Chambas.tbChambas();

        $('tbody').html("");
        for (var i in chambas) {
            var champ = JSON.parse(chambas[i]);
            $('tbody').append("<tr><td><strong>" + champ.Id + "</strong></td><td><strong>" + champ.Client + "</strong></td>" + "<td><strong>" + champ.Description + "</strong></td>" + "<td><strong>" + champ.Date + "</strong></td>" + "<td><strong>" + champ.Notes + "</strong></td>" + "<td>"

                    + "<a href='Edit_Chamba.html' onclick='Chambas.EditChamba(this)' data-position='left' data-delay='50' data-tooltip='Update' class='btn tooltipped Edit'  id='editar'><img class='iconosdeaccion' src='Imgs/Edit_Client.png'></a>"
                    + "<a href='Delete_Chamba.html' onclick='Chambas.DeleteChamba(this)' data-position='left' data-delay='50' data-tooltip='Delete' class='btn tooltipped Delete' id='eliminar'><img class='iconosdeaccion' src='Imgs/delete.png'></a>"
                    //<a class="btn tooltipped" data-position="left" data-delay="50" data-tooltip="Delete" id="eliminar"><img class="iconosdeaccion" src="Imgs/delete.png"></a> 
//                        "<a href='Edit_User.html' onclick='Users.EditUsers(this)' class='Edit'  id='editar'><img class='iconosdeaccion' src='Imgs/Edit_Client.png'></a>"
//
//                        +"<a href='Delete_User.html' onclick='Users.DeleteUsers(this)' class='Delete' id='eliminar'><img class='iconosdeaccion' src='Imgs/delete.png'></a>" 
                    + "</td>");
            $("#tblmovil").append("<option value='" + champ.Id + "/" + champ.Client + "/" + champ.Description + "/" + champ.Date + "/" + champ.Notes + "'>" + champ.Client + "</option>");
        }
        //alert("Datos Cargados Correctamente");


    },
    AddChamba: function () {
        var chambas = Chambas.tbChambas();
        var long = chambas.length;
        var mayor = 0;
        if (long === 0) {
            mayor = 1;
        } else {
            var cmay = JSON.parse(chambas[long - 1]);
            var idmay = parseInt(cmay.Id);
            mayor = idmay + 1;
        }



        //Clientes.length+1;


        var newchamba = JSON.stringify({Id: mayor, Client: $("#Clients").val(), Description: $("#textarea1").val(), Date: $("#datepick").val(), Notes: $("#Notes").val()});
        chambas.push(newchamba);
        localStorage.setItem("tbChambas", JSON.stringify(chambas));
        // alert("The Data Was Saved");
        Materialize.toast('The Data Was Saved', 3000, 'rounded');
        //Materialize.toast('<span>Data Was Saved</span><a class=&quot;btn-flat yellow-text&quot; href=New_User.html;#!&quot;>Ok<a>', 5000);


    },
    DeleteChamba: function (etiqueta) {
        var deletes = $("a#eliminar.btn.tooltipped.Delete");
        for (var i = 0; i < deletes.length; i++)
        {
            if (deletes[i] === etiqueta) {
                localStorage.setItem("Index", i);
                var x = i;

            }
        }
    },
    EditChamba: function (etiqueta) {
        var Edits = $("a#editar.btn.tooltipped.Edit");
        for (var i = 0; i < Edits.length; i++)
        {
            if (Edits[i] === etiqueta) {
                localStorage.setItem("Index", i);

            }
        }
    },
    Fill: function () {
        var chambas = Chambas.tbChambas();
        var idbuscar = parseInt(localStorage.getItem("IdChamba"));
        if (screen.width < 550) {
            for (var i in chambas) {
                var champ = JSON.parse(chambas[i]);
                var id = parseInt(champ.Id);
                if (id === idbuscar) {
                    $("#Clients").val(champ.Client);
                    $("#textarea1").val(champ.Description);
                    $("#picker").val(champ.Date);
                    $("#textarea2").val(champ.Notes);


                }
            }

        }
        else {
            var index = parseInt(localStorage.getItem("Index"));
            var champ = JSON.parse(chambas[index]);
            $("#Clients").val(champ.Client);
            $("#textarea1").val(champ.Description);
            $("#picker").val(champ.Date);
            $("#textarea2").val(champ.Notes);
        }

    },
    Edit: function () {
        var chambas = Chambas.tbChambas();
        var idbuscar = parseInt(localStorage.getItem("IdChamba"));
        if (screen.width < 550) {
            for (var i in chambas) {
                var champ = JSON.parse(chambas[i]);
                var id = parseInt(champ.Id);
                if (id === idbuscar) {
                    chambas[i] = JSON.stringify({Id: champ.Id, Client: $("#Clients").val(), Description: $("#textarea1").val(), Date: $("#picker").val(), Notes: $("#textarea2").val()});
                    localStorage.setItem("tbChambas", JSON.stringify(chambas));
                }
            }
        } else {
            var index = parseInt(localStorage.getItem("Index"));
            var champ = JSON.parse(chambas[index]);
            chambas[index] = JSON.stringify({Id: champ.Id, Client: $("#Clients").val(), Description: $("#textarea1").val(), Date: $("#picker").val(), Notes: $("#textarea2").val()});
            localStorage.setItem("tbChambas", JSON.stringify(chambas));
        }
    },
    Delete: function () {
        var chambas = Chambas.tbChambas();
        var idbuscar = parseInt(localStorage.getItem("IdChamba"));
        if (screen.width < 550) {
            for (var i in chambas) {
                var Champ = JSON.parse(chambas[i]);
                var id = parseInt(Champ.Id);
                if (id === idbuscar) {
                    chambas.splice(i, 1);
                    localStorage.setItem("tbChambas", JSON.stringify(chambas));
                }
            }
        } else {
            var index = parseInt(localStorage.getItem("Index"));
            chambas.splice(index, 1);
            localStorage.setItem("tbChambas", JSON.stringify(chambas));
        }
    },
    EtiH3: function () {
        var chambas = Chambas.tbChambas();
        var idbuscar = parseInt(localStorage.getItem("IdChamba"));
        if (screen.width < 550) {
            for (var i in chambas) {
                var champ = JSON.parse(chambas[i]);
                var id = parseInt(champ.Id);
                if (id === idbuscar) {
                    $("#TextoDelete").html("Are you sure you want to delete the Chamba with name" + " '" + champ.Client + "' and Id " + champ.Id);
                }
            }
        } else {
            var index = parseInt(localStorage.getItem("Index"));
            var champ = JSON.parse(chambas[index]);
            $("#TextoDelete").html("Are you sure you want to delete the Chamba with name" + " '" + champ.Client + "' and Id " + champ.Id);
        }
    },
        Cargar: function () {
        //debugger;
        var valor = $("#tblmovil").val();
        // Materialize.toast(valor, 3000, 'rounded');

        var matrix = valor.toString().split("/");
        $("#id").html(matrix[0]);
        localStorage.setItem("IdChamba", matrix[0]);
        $("#client").html(matrix[1]);
        $("#txtdescrip").html(matrix[2]);
        $("#date").html(matrix[3]);
        $("#txt2").html(matrix[4]);



    },
        UserEnter: function () {
        if (localStorage.getItem("UserLog")!=="Admin") {
            $("#usuariodropdown").append(localStorage.getItem("UserLog"));
            $("li.admin").css("display","none");
        }
        else{
             $("#usuariodropdown").append("Admin");
        }
    }
};

