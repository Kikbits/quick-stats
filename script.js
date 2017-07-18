var head=document.createElement("div");
head.className="filter"

         //Price
var priceNode = document.createElement("P");
var priceText = document.createTextNode("Price In USD"); 
priceNode.appendChild(priceText);

var priceFrom = document.createElement("input");
priceFrom.type= "text";
priceFrom.placeholder="Min";
var priceTo = document.createElement("input");
priceTo.type= "text";
priceTo.placeholder="Max";

head.appendChild(priceNode);
head.appendChild(priceFrom);
head.appendChild(priceTo);





     //Last24HourChange

var percent24Node=document.createElement("P");
var percent24Text=document.createTextNode("Last 24 Hour Change(%)");
percent24Node.appendChild(percent24Text);

var percent24From=document.createElement("input");
percent24From.type="text";
percent24From.placeholder="Min";
var percent24To=document.createElement("input");
percent24To.type="text";
percent24To.placeholder="Max";

head.appendChild(percent24Node);
head.appendChild(percent24From);
head.appendChild(percent24To);

   // Volume
var volumeNode=document.createElement("P");
var volumeText=document.createTextNode("Volume");
volumeNode.appendChild(volumeText);

var volumeFrom=document.createElement("input");
volumeFrom.type="text";
volumeFrom.placeholder="Min";
var volumeTo=document.createElement("input");
volumeTo.type="text";
volumeTo.placeholder="Max";

head.appendChild(volumeNode);
head.appendChild(volumeFrom);
head.appendChild(volumeTo);





var button=document.createElement("button");
button.innerText="Search";
head.appendChild(button);






var nxt=document.getElementById("nav-main").nextElementSibling;
nxt.parentNode.insertBefore(head,nxt);


                        //filter function
function filter(priceFrom,priceTo,percent24From,percent24To) {

		var arr = document.querySelectorAll("#currencies tbody tr , #currencies-all tbody tr");
		for (var i =0; i<=arr.length;i++) {
			var temp=arr[i];
			var price=temp.querySelector(".price").getAttribute("data-usd");
			var vol=temp.querySelector(".volume").getAttribute("data-usd");
			var percent24="";
			var perecentElem=temp.querySelector(".percent-24h");
			if(perecentElem)
			{
				var percent24=perecentElem.getAttribute("data-usd");
			}
			if(!(isNaN(priceFrom)))
			{
				priceFrom.value="";
			}
			if(!(isNaN(priceTo)))
			{
				priceTo.value="";
			}
			if(!(isNaN(percent24From)))
			{
				percent24From.value="";
			}
			if(!(isNaN(percent24To)))
			{
				percent24To.value="";
			}
			if(!(isNaN(volumeFrom)))
			{
				volumeFrom.value="";
			}
			if(!(isNaN(volumeTo)))
			{
				volumeTo.value="";
			}


			var hide = false;

			if (priceFrom.value != "" && parseFloat(price) < priceFrom.value) {
				hide = true;
			}

			if (priceTo.value != "" && parseFloat(price) > priceTo.value) {
				hide = true;
			}


			if (percent24From.value != "" && parseFloat(percent24) < percent24From.value) {
				hide = true;
			}


			if (percent24To.value != "" && parseFloat(percent24) > percent24To.value) {
				hide = true;
			}
			if (volumeFrom.value != "" && parseFloat(vol) < volumeFrom.value) {
				hide = true;
			}


			if (volumeTo.value != "" && parseFloat(vol) > volumeTo.value) {
				hide = true;
			}


			if (hide) {
				temp.style.display = 'none';
			}
			else
			{
				temp.style.display = ''
			}
		}
	}

		
button.onclick = function() {
	filter(priceFrom,priceTo,percent24From,percent24To)
};
