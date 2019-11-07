/* Button D*/	
window.onload=function(){
	
	/*Button-D_1*/
		var ButtonD02_1 = document.getElementById("Button-D02_1");
		var ButtonD03_1 = document.getElementById("Button-D03_1");
		var ButtonD09_1 = document.getElementById("Button-D09_1");
	
		ButtonD09_1.addEventListener("mouseover", function(){	
			ButtonD02_1.style.WebkitFilter = "brightness(.5)";
			ButtonD03_1.style.opacity = 1;
		});
			
		ButtonD09_1.addEventListener("mouseout", function(){
			ButtonD02_1.style.WebkitFilter = "brightness(1)";
			ButtonD03_1.style.opacity = 0;
		});
		

};