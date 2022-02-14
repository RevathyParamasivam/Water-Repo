$(document).ready(function(){
  $("#panel1Content").on('shown.bs.collapse',function(){
    $(".panel1Icon").removeClass("fa-arrow-down").addClass("fa-arrow-up");
  });
  $("#panel1Content").on('hidden.bs.collapse',function(){
    $(".panel1Icon").removeClass("fa-arrow-up").addClass("fa-arrow-down");
  });
  $("#panel2Content").on('shown.bs.collapse',function(){
    $(".panel2Icon").removeClass("fa-arrow-down").addClass("fa-arrow-up");
  });
  $("#panel2Content").on('hidden.bs.collapse',function(){
    $(".panel2Icon").removeClass("fa-arrow-up").addClass("fa-arrow-down");
  });
  $("#panel3Content").on('shown.bs.collapse',function(){
    $(".panel3Icon").removeClass("fa-arrow-down").addClass("fa-arrow-up");
  });
  $("#panel3Content").on('hidden.bs.collapse',function(){
    $(".panel3Icon").removeClass("fa-arrow-up").addClass("fa-arrow-down");
  });
  
  $(".check").on('click',function(e){
    // console.log('clicked');
    $("#panel1Content").collapse('show');
    $("#panel2Content").collapse('show');
    $("#panel3Content").collapse('show');
  });
  
  $(".doCheck").on('click',function(e){
    // $("#panel1Content").collapse({toggle:true});
    // $("#panel2Content").collapse({toggle:false});
    // $("#panel3Content").collapse({toggle:false});
    $("#panel1Content").collapse('hide');
    $("#panel2Content").collapse('hide');
    $("#panel3Content").collapse('hide');
  });
});