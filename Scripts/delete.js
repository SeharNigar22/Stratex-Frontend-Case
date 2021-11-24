 //delete users 
  $("#users").on("click", ".delete-user", function() 
  {  
     //alert is displayed for confirmation
     if(confirm("Do you want to delete?"))
     {
        $(this).closest("tr").remove();
        toastr.success('user is deleted successfully');
     } 
  });

  $("#senior-users").on("click", ".delete-user", function() 
  {     
     //alert is displayed for confirmation
     if(confirm("Do you want to delete?"))
     {
        $(this).closest("tr").remove();
        toastr.success('user is deleted successfully');
     }    
  });

  $("#wfm-users").on("click", ".delete-user", function() 
  {  
     //alert is displayed for confirmation   
     if(confirm("Do you want to delete?"))
     {
        $(this).closest("tr").remove();
        toastr.success('user is deleted successfully');
     }    
  });