//add a user
$("#submit-btn").on("click",function(e)
{  
  var FirstName=$("#FirstName").val();
  var LastName=$("#LastName").val();
  var Role= parseInt($('#Role :selected').val());

  if(Role==1)
  {   
      var row=$('#users > tbody > tr').last();
      var index=parseInt(row.find('.index').text())+1; //This will get the serial# of last row and increment it for the new row
      $('#users').append('<tr><td class="index">' + index + '</td><td>' + FirstName + '</td><td>' + LastName + '</td> <td>User</td> <td><button type="button" class="btn btn-outline-danger btn-sm delete-user">Delete</button></tr>');      
  }
  else if(Role==2)
  {  
      var row=$('#senior-users > tbody > tr').last();
      var index=parseInt(row.find('.index').text())+1;  
      $('#senior-users').append('<tr><td class="index">' + index + '</td><td>' + FirstName + '</td><td>' + LastName + '</td> <td>Senior Users</td> <td><button type="button" class="btn btn-outline-danger btn-sm delete-user">Delete</button></tr>');      
  }
  else
  {
      var row=$('#wfm-users > tbody > tr').last();
      var index=parseInt(row.find('.index').text())+1;  
      $('#wfm-users').append('<tr><td class="index">' + index + '</td><td>' + FirstName + '</td><td>' + LastName + '</td> <td>Wfm</td> <td><button type="button" class="btn btn-outline-danger btn-sm delete-user">Delete</button></tr>');       
  }

  $("#add-user-modal").modal('hide');
  toastr.success('user is added successfully');
  $(this).prop('disabled', true);
  clearFields();
 });
 
 //it will clear fields after submit
 function clearFields()
 {
  $("#FirstName").val('');
  $("#LastName").val('');
  $('#Role').val('Select a role');
 }
 
 //This will enable the button again
 $('#FirstName, #LastName').bind('keyup', function() {
  if(allFilled()) $('#submit-btn').removeAttr('disabled');
 });
 
 //This will check if all the fields are filled
 function allFilled() {
  var filled = true;  
  if($("#FirstName").val() == '' || $("#LastName").val() == '' || $('#Role :selected').val() == '') filled = false;  
  return filled;
  }
