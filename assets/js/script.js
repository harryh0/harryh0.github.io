$(document).ready(function() {
	
	// hover function on cows and pigs

	$("#cowpic").hover(function() {
		$(this).attr("src", function(index, attr) {
			return attr.replace(".png", "-hover.png");;
		});
		}, function() {
		$(this).attr("src", function(index, attr) {
			return attr.replace("-hover.png", ".png");;
		});
	})

	$("#pigpic").hover(function() {
		$(this).attr("src", function(index, attr) {
			return attr.replace(".png", "-hover.png");;
		});
		}, function() {
		$(this).attr("src", function(index, attr) {
			return attr.replace("-hover.png", ".png");;
		});
	});

	//Implement the "slide to left" when the user clicks on #carousel-next here
    $("#carousel-next").click(function () {

        var mar_left_val = parseInt($('#carousel').css('margin-left').replace("px", ""));
        if (mar_left_val == -3840) {
            return false;
        } else {
        	mar_left_val -= 960;
            $("#carousel").css("margin-left", mar_left_val.toString() + "px");
        }
        setTimeout(function(){}, 5000);

    });
    
    //Implement the "slide to right" when the user clicks on #carousel-prev here
    $("#carousel-prev").click(function () {
        var mar_left_val = parseInt($('#carousel').css('margin-left').replace("px", ""));
        if (mar_left_val == 0) {
            return false;
        } else {
        	mar_left_val += 960;
            $("#carousel").css("margin-left", mar_left_val.toString() + "px");
        }
        setTimeout(function(){}, 5000);
    });


});