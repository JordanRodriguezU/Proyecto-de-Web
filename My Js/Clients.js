/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Clients = {
    tbCls: function () {
        tbClients = localStorage.getItem("tbClients");
        tbClients = JSON.parse(tbClients);
        if (tbClients === null) {
            tbClients = [];

        }
        return tbClients;
    },
    AddClients: function () {
        var Clientes = Clients.tbCls();
        var long = Clientes.length;
        var mayor = 0;
        if (long === 0) {
            mayor = 1;
        } else {
            var clientmay = JSON.parse(Clientes[long - 1]);
            var idmay = parseInt(clientmay.Id);
            mayor = idmay + 1;
        }



        //Clientes.length+1;


        var newClient = JSON.stringify({Id: mayor, First: $("#First_name").val(), Last: $("#last_name").val(), Tel: $("#Telephone").val()});
        Clientes.push(newClient);
        localStorage.setItem("tbClients", JSON.stringify(Clientes));
        // alert("The Data Was Saved");
        Materialize.toast('The Data Was Saved', 3000, 'rounded');
        //Materialize.toast('<span>Data Was Saved</span><a class=&quot;btn-flat yellow-text&quot; href=New_User.html;#!&quot;>Ok<a>', 5000);


    },
    AllClients: function () {
        var Clientes = Clients.tbCls();

        $('tbody').html("");
        for (var i in Clientes) {
            var Client = JSON.parse(Clientes[i]);
            $('tbody').append("<tr><td><strong>" + Client.Id + "</strong></td><td><strong>" + Client.First + " " + Client.Last + "</strong></td>" + "<td><strong>" + Client.Tel + "</strong></td>" + "<td>"

                    + "<a href='Edit_Client.html' onclick='Clients.EditClients(this)' data-position='left' data-delay='50' data-tooltip='Update' class='btn tooltipped Edit'  id='editar'><img class='iconosdeaccion' src='Imgs/Edit_Client.png'></a>"
                    + "<a href='Delete_Client.html' onclick='Clients.DeleteClients(this)' data-position='left' data-delay='50' data-tooltip='Delete' class='btn tooltipped Delete' id='eliminar'><img class='iconosdeaccion' src='Imgs/delete.png'></a>"
                    //<a class="btn tooltipped" data-position="left" data-delay="50" data-tooltip="Delete" isd="eliminar"><img class="iconosdeaccion" src="Imgs/delete.png"></a> 
//                        "<a href='Edit_User.html' onclick='Users.EditUsers(this)' class='Edit'  id='editar'><img class='iconosdeaccion' src='Imgs/Edit_Client.png'></a>"
//
//                        +"<a href='Delete_User.html' onclick='Users.DeleteUsers(this)' class='Delete' id='eliminar'><img class='iconosdeaccion' src='Imgs/delete.png'></a>" 
                    + "</td>");
            $("#tblmovil").append("<option class='options' value='" + Client.Id + "/" + Client.First + "/" + Client.Last + "/" + Client.Tel + "'>" + Client.Id + " " + Client.First + "</option>");
        }
        //alert("Datos Cargados Correctamente");


    },
//    ClickOpt: function (etiqueta) {
//        debugger;
//        var opts = $("#tblmovil option.options");
//        for (var i = 0; i < opts.length; i++)
//        {
//            if (opts[i] === etiqueta) {
//                localStorage.setItem("Index", i);
//
//            }
//        }
//
//    },
    DeleteClients: function (etiqueta) {
        var deletes = $("a#eliminar.btn.tooltipped.Delete");
        for (var i = 0; i < deletes.length; i++)
        {
            if (deletes[i] === etiqueta) {
                localStorage.setItem("Index", i);

            }
        }

    },
    EditClients: function (etiqueta) {
        var Edits = $("a#editar.btn.tooltipped.Edit");
        for (var i = 0; i < Edits.length; i++)
        {
            if (Edits[i] === etiqueta) {
                localStorage.setItem("Index", i);

            }
        }
    },
    Fill: function () {
        var Clientes = Clients.tbCls();
        debugger;
        var idbuscar = parseInt(localStorage.getItem("IdClient"));
        if (screen.width < 500) {
            for (var i in Clientes) {
                var Client = JSON.parse(Clientes[i]);
                var id = parseInt(Client.Id);
                if (id === idbuscar) {
                    $("#First_name").val(Client.First);
                    $("#last_name").val(Client.Last);
                    $("#Telephone").val(Client.Tel);

                }
            }
        } else {
            var index = parseInt(localStorage.getItem("Index"));
            var cliente = JSON.parse(Clientes[index]);
            $("#First_name").val(cliente.First);
            $("#last_name").val(cliente.Last);
            $("#Telephone").val(cliente.Tel);
        }
    },
    Edit: function () {
        var Clientes = Clients.tbCls();
        var idbuscar = parseInt(localStorage.getItem("IdClient"));
        if (screen.width < 500) {
            for (var i in Clientes) {
                var Client = JSON.parse(Clientes[i]);
                var id = parseInt(Client.Id);
                if (id === idbuscar) {
                    Clientes[i] = JSON.stringify({Id: Client.Id, First: $("#First_name").val(), Last: $("#last_name").val(), Tel: $("#Telephone").val()});
                    localStorage.setItem("tbClients", JSON.stringify(Clientes));
                }
            }
        } else {
            var index = parseInt(localStorage.getItem("Index"));
            var client = JSON.parse(Clientes[index]);
            Clientes[index] = JSON.stringify({Id: client.Id, First: $("#First_name").val(), Last: $("#last_name").val(), Tel: $("#Telephone").val()});
            localStorage.setItem("tbClients", JSON.stringify(Clientes));
        }
    },
    EtiH3: function () {
        var Clientes = Clients.tbCls();
        var idbuscar = parseInt(localStorage.getItem("IdClient"));
        if (screen.width < 500) {
            for (var i in Clientes) {
                var Client = JSON.parse(Clientes[i]);
                var id = parseInt(Client.Id);
                if (id === idbuscar) {
                    $("#TextoDelete").html("Are you sure you want to delete the Client with name" + " '" + Client.First + " " + Client.Last + "'");
                }
            }
        } else {
            var index = parseInt(localStorage.getItem("Index"));
            var Client = JSON.parse(Clientes[index]);
            $("#TextoDelete").html("Are you sure you want to delete the Client with name" + " '" + Client.First + " " + Client.Last + "'");
        }
    },
    Delete: function () {
        var Clientes = Clients.tbCls();
        var idbuscar = parseInt(localStorage.getItem("IdClient"));
        if (screen.width < 500) {
            for (var i in Clientes) {
                var Client = JSON.parse(Clientes[i]);
                var id = parseInt(Client.Id);
                if (id === idbuscar) {
                    Clientes.splice(i, 1);
                    localStorage.setItem("tbClients", JSON.stringify(Clientes));
                }
            }
        } else {
            var index = parseInt(localStorage.getItem("Index"));
            Clientes.splice(index, 1);
            localStorage.setItem("tbClients", JSON.stringify(Clientes));
        }
    }
    ,
    Cargar: function () {
        //debugger;
        var valor = $("#tblmovil").val();
        // Materialize.toast(valor, 3000, 'rounded');

        var matrix = valor.toString().split("/");
        $("#id").html(matrix[0]);
        localStorage.setItem("IdClient", matrix[0]);
        $("#Name").html(matrix[1]);
        $("#Last").html(matrix[2]);
        $("#Telep").html(matrix[3]);


    }
};
