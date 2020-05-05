$(document).ready(function() {


  $('#smilebox').click(function(){
    var smileZ = eval($("#smilebox").css("z-index"));
    var tranqZ = eval($("#tranqbox").css("z-index"));
    var dustZ = eval($("#dustbox").css("z-index"));
        if (smileZ < tranqZ || smileZ < dustZ) {
      console.log(smileZ);
      var added = tranqZ+dustZ;
      $("#smilebox").css("z-index", added);
      var smileZ = added;
    }
    console.log(smileZ);
  });
  $('#tranqbox').click(function(){
    var smileZ = eval($("#smilebox").css("z-index"));
    var tranqZ = eval($("#tranqbox").css("z-index"));
    var dustZ = eval($("#dustbox").css("z-index"));
      if (tranqZ < smileZ || tranqZ < dustZ) {
        $("#tranqbox").css("z-index", smileZ+dustZ);
        var tranqZ = added;
      }
      console.log($("#tranqbox").css("z-index"));
    });
  $('#dustbox').click(function(){
    var smileZ = eval($("#smilebox").css("z-index"));
    var tranqZ = eval($("#tranqbox").css("z-index"));
    var dustZ = eval($("#dustbox").css("z-index"));
    if (dustZ < smileZ || dustZ < tranqZ) {
      $("#dustbox").css("z-index", smileZ+tranqZ);
      var dustZ = added;
    }
    console.log($("#dustbox").css("z-index"));
 });

});
