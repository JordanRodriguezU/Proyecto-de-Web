/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var Invoices = {
    tbIncs: function () {
        tbInvoices = localStorage.getItem("tbInvoices");
        tbInvoices = JSON.parse(tbInvoices);
        if (tbInvoices === null) {
            tbInvoices = [];

        }
        return tbInvoices;
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
        var Clientes = Invoices.tbCls();
        for (var i in Clientes) {
            var Client = JSON.parse(Clientes[i]);
            $("#Clientes").append("<option value='" + Client.First + " " + Client.Last + "' />");

        }
    },
    AllInvoices: function () {
        var invoices = Invoices.tbIncs();

        $('tbody').html("");
        for (var i in invoices) {
            var Invoic = JSON.parse(invoices[i]);
            $('tbody').append("<tr><td><strong>" + Invoic.Id + "</strong></td><td><strong>" + Invoic.Client + "</strong></td>" + "<td><strong>" + Invoic.Description + "</strong></td>" + "<td><strong>" + Invoic.Date + "</strong></td>" + "<td><strong>" + Invoic.Amount + "</strong></td>" + "<td>"

                    + "<a href='Edit_Invoice.html' onclick='Invoices.EditInvoices(this)' data-position='left' data-delay='50' data-tooltip='Update' class='btn tooltipped Edit'  id='editar'><img class='iconosdeaccion' src='Imgs/Edit_Client.png'></a>"
                    + "<a href='Delete_Invoice.html' onclick='Invoices.DeleteInvoice(this)' data-position='left' data-delay='50' data-tooltip='Delete' class='btn tooltipped Delete' id='eliminar'><img class='iconosdeaccion' src='Imgs/delete.png'></a>"
                    //<a class="btn tooltipped" data-position="left" data-delay="50" data-tooltip="Delete" id="eliminar"><img class="iconosdeaccion" src="Imgs/delete.png"></a> 
//                        "<a href='Edit_User.html' onclick='Users.EditUsers(this)' class='Edit'  id='editar'><img class='iconosdeaccion' src='Imgs/Edit_Client.png'></a>"
//
//                        +"<a href='Delete_User.html' onclick='Users.DeleteUsers(this)' class='Delete' id='eliminar'><img class='iconosdeaccion' src='Imgs/delete.png'></a>" 
                    + "</td>");
            $("#tblmovil").append("<option value='" + Invoic.Id + "/" + Invoic.Client + "/" + Invoic.Description + "/" + Invoic.Date + "/" + Invoic.Amount + "'>" + Invoic.Client + "</option>");
        }
        //alert("Datos Cargados Correctamente");


    },
    AddInvoices: function () {
        var invoices = Invoices.tbIncs();
        var long = invoices.length;
        var mayor = 0;
        if (long === 0) {
            mayor = 1;
        } else {
            var clientmay = JSON.parse(invoices[long - 1]);
            var idmay = parseInt(clientmay.Id);
            mayor = idmay + 1;
        }



        //Clientes.length+1;


        var newInvoice = JSON.stringify({Id: mayor, Client: $("#Clients").val(), Description: $("#textarea1").val(), Date: $("#datepick").val(), Amount: $("#Amount").val()});
        invoices.push(newInvoice);
        localStorage.setItem("tbInvoices", JSON.stringify(invoices));
        // alert("The Data Was Saved");
        Materialize.toast('The Data Was Saved', 3000, 'rounded');
        //Materialize.toast('<span>Data Was Saved</span><a class=&quot;btn-flat yellow-text&quot; href=New_User.html;#!&quot;>Ok<a>', 5000);


    },
    DeleteInvoice: function (etiqueta) {
        debugger;
        var deletes = $("a#eliminar.btn.tooltipped.Delete");
        for (var i = 0; i < deletes.length; i++)
        {
            if (deletes[i] === etiqueta) {
                localStorage.setItem("Index", i);
                var x=i;

            }
        }
    },
    EditInvoices: function (etiqueta) {
        var Edits = $("a#editar.btn.tooltipped.Edit");
        for (var i = 0; i < Edits.length; i++)
        {
            if (Edits[i] === etiqueta) {
                localStorage.setItem("Index", i);

            }
        }
    },
    Fill: function () {
        var invoices = Invoices.tbIncs();
        var idbuscar = parseInt(localStorage.getItem("IdInvoice"));
        if (screen.width < 550) {
            for (var i in invoices) {
                var Invoice = JSON.parse(invoices[i]);
                var id = parseInt(Invoice.Id);
                if (id === idbuscar) {
                    $("#Clients").val(Invoice.Client);
                    $("#textarea1").val(Invoice.Description);
                    $("#picker").val(Invoice.Date);
                    $("#Amount").val(Invoice.Amount);


                }
            }

        }
        else {
            var index = parseInt(localStorage.getItem("Index"));
            var invoic = JSON.parse(invoices[index]);
            $("#Clients").val(invoic.Client);
            $("#textarea1").val(invoic.Description);
            $("#picker").val(invoic.Date);
            $("#Amount").val(invoic.Amount);
        }

    },
    Edit: function () {
        var invoices = Invoices.tbIncs();
        var idbuscar = parseInt(localStorage.getItem("IdInvoice"));
        if (screen.width < 550) {
            for (var i in invoices) {
                var invoic = JSON.parse(invoices[i]);
                var id = parseInt(invoic.Id);
                if (id === idbuscar) {
                    invoices[i] = JSON.stringify({Id: invoic.Id, Client: $("#Clients").val(), Description: $("#textarea1").val(), Date: $("#picker").val(),Amount: $("#Amount").val()});
                    localStorage.setItem("tbInvoices", JSON.stringify(invoices));
                }
            }
        } else {
            var index = parseInt(localStorage.getItem("Index"));
            var invoice = JSON.parse(invoices[index]);
            invoices[index] = JSON.stringify({Id: invoice.Id, Client: $("#Clients").val(), Description: $("#textarea1").val(), Date: $("#picker").val(),Amount: $("#Amount").val()});
            localStorage.setItem("tbInvoices", JSON.stringify(invoices));
        }
    },
        Delete: function () {
        var invoices = Invoices.tbIncs();
        var idbuscar = parseInt(localStorage.getItem("IdInvoice"));
        if (screen.width < 550) {
            for (var i in invoices) {
                var Client = JSON.parse(invoices[i]);
                var id = parseInt(Client.Id);
                if (id === idbuscar) {
                    invoices.splice(i, 1);
                    localStorage.setItem("tbInvoices", JSON.stringify(invoices));
                }
            }
        } else {
            var index = parseInt(localStorage.getItem("Index"));
            invoices.splice(index, 1);
            localStorage.setItem("tbInvoices", JSON.stringify(invoices));
        }
    },
        EtiH3: function () {
        var invoices = Invoices.tbIncs();
        var idbuscar = parseInt(localStorage.getItem("IdInvoice"));
        if (screen.width < 550) {
            for (var i in invoices) {
                var invoic = JSON.parse(invoices[i]);
                var id = parseInt(invoic.Id);
                if (id === idbuscar) {
                    $("#TextoDelete").html("Are you sure you want to delete the Invoice with name" + " '" + invoic.Client+"' and Id "+invoic.Id);
                }
            }
        } else {
            var index = parseInt(localStorage.getItem("Index"));
            var invoic = JSON.parse(invoices[index]);
            $("#TextoDelete").html("Are you sure you want to delete the Invoice with name" +" '" + invoic.Client+"' and Id "+invoic.Id);
        }
    },
    Cargar: function () {
        //debugger;
        var valor = $("#tblmovil").val();
        // Materialize.toast(valor, 3000, 'rounded');

        var matrix = valor.toString().split("/");
        $("#id").html(matrix[0]);
        localStorage.setItem("IdInvoice", matrix[0]);
        $("#client").html(matrix[1]);
        $("#txtdescrip").html(matrix[2]);
        $("#date").html(matrix[3]);
        $("#amount").html(matrix[4]);



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

