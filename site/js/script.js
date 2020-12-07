function outputCoulomb(){
	var charge1=document.getElementById("q1").value;
	var charge2=document.getElementById("q2").value;
	var dist=document.getElementById("r").value;
	var op1=(charge1*charge2*9000000000);
	var op2=(dist*dist);
	var res=op1/op2;
	document.cookie=res+" N";
		
}
function outputAcc(){
	var initial=document.getElementById("u").value;
	var final=document.getElementById("v").value;
	var time=document.getElementById("t").value;
	var acc=(final-initial)/time;
	document.cookie=acc+" m^2/s";
	
}

function outputCube(){
	var edge=document.getElementById("s").value;
	console.log(edge);
	var vol=edge*edge*edge;
	document.cookie=vol+" m^3";
}

function outputCylinder(){
	var radius=document.getElementById("r").value;
	var height=document.getElementById("h").value;
	var vol=3.14*radius*radius*height;
	document.cookie=vol+" m^3";
}

function outputSphere(){
	var radius=document.getElementById("rad").value;
	var vol=(4*3.14*radius*radius)/3;
	document.cookie=vol+" m^3";
}

function show(){
	document.getElementById("output").innerHTML="<h4>O/P:"+document.cookie+"</h4>";
}