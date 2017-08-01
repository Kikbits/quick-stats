
var head=document.createElement("div");
head.className="filter";



// collapse

var $col= $(`<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
    <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingOne">
    <h4 class="panel-title">
    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
    Filters
</a>
</h4>
</div>
<div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
    <div class="panel-body">
    
	</div>
</div>
</div>`);

var ele=$col.find(".panel-body")[0];
ele.appendChild(head);
//
     //form function


function getform(name) {
 return   $(`<form>
 <div class="allign" class="row">
    		<label >${name}</label>
   		</div>
   		<div class="row">
  			<div class="col-xs-2">
    			<input type="text" class="form-control min" placeholder="Min">
    		</div>
    		<div class="col-xs-2">
     			<input type="text" class="form-control max" placeholder="Max">
     		</div>
		</div> 
</form>`)
}


    // Price
var name="Price";
var $priceForm =getform(name);
head.appendChild($priceForm[0]);
const priceFrom = $priceForm.find(".min")[0];
const priceTo = $priceForm.find(".max")[0];

     //Last24HourChange


var name="Last 24 Hour Change";
var $percent24Form =getform(name);
head.appendChild($percent24Form[0])
const percent24From = $percent24Form.find(".min")[0];
const percent24To = $percent24Form.find(".max")[0];

   // Volume

var name="Volume";
var $volumeForm =getform(name);
head.appendChild($volumeForm[0])
const volumeFrom = $volumeForm.find(".min");
const volumeTo = $volumeForm.find(".max");





   //button
var button=document.createElement("button");
button.innerText="Search";
button.className="btn btn-primary";
head.appendChild(button);



//Append with Body


var nxt=document.getElementById("nav-main").nextElementSibling;
nxt.parentNode.insertBefore($col[0],nxt);


                        //filter function
function filter(priceFrom,priceTo,percent24From,percent24To,volumeFrom,volumeTo) {

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
			if(isNaN(priceFrom.value))
			{
				priceFrom.value="";
			}
			if(isNaN(priceTo.value))
			{
				priceTo.value="";
			}
			if(isNaN(percent24From.value))
			{
				percent24From.value="";
			}
			if(isNaN(percent24To.value))
			{
				percent24To.value="";
			}
			if(isNaN(volumeFrom.value))
			{
				volumeFrom.value="";
			}
			if(isNaN(volumeTo.value))
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

	filter(priceFrom,priceTo,percent24From,percent24To,volumeFrom,volumeTo)
};
