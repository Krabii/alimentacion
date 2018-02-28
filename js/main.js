$(document).ready(function(){

   // jQuery methods go here...
   
   $.get("js/alimentos.json", function(json) {
    //console.log(json); // this will show the info it in firebug console
    var alimentos=JSON.parse(json);
    //console.log(alimentos);
    $('#example').DataTable( {
    	//"ajax": "js/alimentos.json",
    	data : alimentos.data,
    	"columns": [
    	{ "data": "name" },
    	{ "data": "properties" }
    	]
    } );
},"text");
}); 