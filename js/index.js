$(function(){
	var today = new Date();
	var Date1 = String(today.getDate()).padStart(2, '0') + '/' + String(today.getMonth() + 1).padStart(2, '0') + '/' + today.getFullYear();
	
	$("#Date").append(Date1);
	
	//generate random script for showing random news based on articles, interviews, 
});