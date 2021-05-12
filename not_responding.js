while (true){
	var elem=document.getElementById("test");
	var img='<img src="test">'
	var data=elem.innerHTML;
	elem.innerHTML=data + img;
}
/*
<div id="test"></div>
<script>
while (true){
	var elem=document.getElementById("test");
	var img='<img src="test">'
	var data=elem.innerHTML;
	elem.innerHTML=data + img;
}
</script>
*/
