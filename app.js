$(document).ready(function () {
  //attach event listeners to buttons

  //create function stub for read/wite/delete
    //research local storage

  // $().on('click', function(){
  //
  // });

  $('.store-btn').on('click', function(event){
    localStorage.setItem("username", "John");
  });

  $('.get-btn').on('click', function(event){
    console.log(localStorage.getItem('username'));
  });

  $('.delete-btn').on('click', function(event){
    console.log(localStorage.removeItem('username'));
  });

});
