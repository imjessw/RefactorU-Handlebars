$(function(){
	// console.log("doc is ready")
	var templateSource= $("#entry-template").html();
	var renderTemplate=Handlebars.compile(templateSource);
	console.log("still writing code")


	$('#searchBox').on('keyup', function(e){
		if(e.keyCode=== 13){
				console.log("key up pressed")
			var val=$(this).val()
			$.get('/search',{search:val},function(data){
				console.log("callback",data)
				$("#results").html(renderTemplate(data))
				console.log("a thousand years later... success")
			});
		}
	})

});
