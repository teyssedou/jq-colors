$(".color").each(function(){
	var color = $(this).attr("data-color");
	$(this).css("background-color", color)
	
	$(this).click(function(){
		if ($("#modify-texte").is(":checked")){
			$("p").css("color", color)
		}
		else{
			$(".main").css("background-color", color)
		}
	})


})
