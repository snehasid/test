function nextPrevious(sliderOption){
	var slider_image_list = document.getElementsByClassName("slider_img");
	var show_image_counter = 0;
	if(sliderOption == "next"){
		  for(var i in slider_image_list){
		    if(slider_image_list[i].classList.contains("hide")== false){
			  if(show_image_counter == 0){
			    var firstElement = slider_image_list[i];
			  }
			  show_image_counter++;
		      }else{
			    if(show_image_counter == 4){
				  firstElement.classList.add("hide");
				  slider_image_list[i].classList.remove("hide");
			      show_image_counter = 0;	
			  }
		  }
		}
	}else if(sliderOption == "previous"){
	    for(var i in slider_image_list){
		if(slider_image_list[i].classList.contains("hide")== true){
				var firstElement = slider_image_list[i];
		}else{
			show_image_counter++;
			if(show_image_counter == 4){
				firstElement.classList.remove("hide");
				slider_image_list[i].classList.add("hide");
			    show_image_counter = 0;	
			}
		}
	  }
	}
}