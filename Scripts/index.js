//declared the variables first so it could be used globally
var userArray=[];
var users;
var seniorUsers;
var wfm;
var i=0;
var j=0;
var k=0;

//Reading from json file
$.getJSON("/Data/employees.json", function(data) {
    debugger
    userArray=data.users;
    //filtering the users on the basis of role
    users= userArray.filter(user => user.role === 1);
    seniorUsers= userArray.filter(user => user.role === 2);
    wfm= userArray.filter(user => user.role === 3); 
    $.each(users, function (key, value) 
    {  
     i++;   
     $('#users').append('<tr><td class="index">' +i+ '</td><td>' + value.firstName + '</td><td>' + value.lastName + '</td> <td>User</td> <td><button type="button" class="btn btn-outline-danger btn-sm delete-user">Delete</button></tr>');
    });

    $.each(seniorUsers, function (key, value) 
    {
        j++;     
        $('#senior-users').append('<tr><td class="index">' +j+ '</td><td>' + value.firstName + '</td><td>' + value.lastName + '</td> <td>Senior Users</td><td><button type="button" class="btn btn-outline-danger btn-sm delete-user">Delete</button></tr>');
    });

    $.each(wfm, function (key, value) 
    {   
        k++;
        $('#wfm-users').append('<tr><td class="index">' +k+ '</td><td>' + value.firstName + '</td><td>' + value.lastName + '</td> <td>Wfm</td><td><button type="button" class="btn btn-outline-danger btn-sm delete-user">Delete</button></tr>');
    });
});

//Searching users
$(document).ready(function() {
    function SearchTable() {
      //bind on all your different inputs
      $("#search-user").on("keyup", function() {
        //get the input value, trimmed, and lowercased
        var value = this.value.trim().toLowerCase();
        //get the associated tables
        var $users = $('#users');
        var $seniorUsers = $('#senior-users');
        var $wfmUsers = $('#wfm-users');
        
        //show all the rows to "undo" previous filtering
        $users.find('tr').show();
        $seniorUsers.find('tr').show();
        $wfmUsers.find('tr').show();

        //only filter if the value is not blank
        if (value) {
          //find all the rows that do not match the filter, and hide them
          $users.find('tr').filter(function(){
              
            return this.innerText.toLowerCase().indexOf(value) < 0;
          }).hide();

          $seniorUsers.find('tr').filter(function(){
            return this.innerText.toLowerCase().indexOf(value) < 0;
          }).hide();

          $wfmUsers.find('tr').filter(function(){
            return this.innerText.toLowerCase().indexOf(value) < 0;
          }).hide();
        }
      });
    } 
    SearchTable();
  });

  

 
  
