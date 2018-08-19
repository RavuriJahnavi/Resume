//function json(file,callback){

	//var xhr=new XMLHttpRequest();
	//xhr.overrideMimeType("application/json");
	//xhr.open("GET",file,true);
	//xhr.onreadystatechange=function(){
		//if (xhr.readyState=="4" && xhr.status=="200") {
			//callback(xhr.responseText);
		//}
	//}
	//xhr.send(null);
//}
//json("data.json",function(text){
	//let d=JSON.parse(text);
	//console.log(d);
	//basics(d.basicdetails);
	//carrier(d.carrier);
	//edu(d.education);
	//techskills(d.skills);
	//achievements(d.achievements);
	//desc(d.description)
//})
fetch("data.json")
.then(function(response){
	return response.json();
})
.then(function(d){
	console.log(d);
	basics(d.basicdetails);
	carrier(d.carrier);
	edu(d.education);
	techskills(d.skills);
	achievements(d.achievements);
	desc(d.description);
})
var main=document.querySelector(".first");
var l=document.createElement("div");
l.classList.add("left");
l.setAttribute("id","nirula");
main.appendChild(l);
function basics(basicdetails){
var i=document.createElement("img");
i.src=basicdetails.image;
i.alt="profile photo";
l.appendChild(i);
var name=document.createElement("h3");
name.textContent=basicdetails.name;
l.appendChild(name);
var phone=document.createElement("h3");
phone.textContent=basicdetails.phone;
l.appendChild(phone);
var email=document.createElement("h3");
email.textContent=basicdetails.email;
l.appendChild(email);
var address=document.createElement("h3");
address.textContent=basicdetails.address;
l.appendChild(address);
}
var r=document.createElement("div");
r.classList.add("right");
main.appendChild(r);
function edu(e){
var e1=document.createElement("div");
e1.classList.add("education");
r.appendChild(e1);
var head=document.createElement("h2");
head.textContent="Educational Details";
e1.appendChild(head);
head.appendChild(document.createElement("HR"));
for (var i = 0 ;i < e.length;i++){
	var h=document.createElement("h2");
	h.textContent=e[i].course;
	e1.appendChild(h);
	var u=document.createElement("ul");
	e1.appendChild(u);
	var list=document.createElement("li");
	list.textContent=e[i].college;
	u.appendChild(list);
	var list1=document.createElement("li");
	list1.textContent=e[i].percent;
	list.appendChild(list1);
	}
}
function techskills(s){
	var d=document.createElement("div");
	d.textContent="Skills Set";
	r.appendChild(d);
	var tab=document.createElement("table");
	var row="";
	for(var i=0; i<s.length; i++){
		row+="<tr><td>"+s[i].name+"</td><td>"+s[i].value+"</td></tr>";
	}
	tab.innerHTML=row;
	d.appendChild(tab);
}
function carrier(car){
	var j=document.createElement("div");
	r.appendChild(j);
	var a=document.createElement("a");
	j.textContent="Carrier Objective";
	j.appendChild(a);
	a.appendChild(document.createElement("HR"));
	var i=document.createElement("para");
	var para=document.createElement("p");
	para.textContent=car.ca;
	j.appendChild(para);
}
function achievements(ach){
	var b=document.createElement("div");
	b.setAttribute("id",achievements);
	r.appendChild(b);
	var h=document.createElement("h2");
	h.textContent="Achievements";
	b.appendChild(h);
	h.appendChild(document.createElement("HR"));
	for(i in ach){
		var u=document.createElement("ul");
		b.appendChild(u);
		var list=document.createElement("li");
		list.textContent=ach[i];
		u.appendChild(list);
	}
}
function desc(D){
	var c1=document.createElement("div");
	r.appendChild(c1);
	var h1=document.createElement("h1");
	h1.textContent="Description";
	c1.appendChild(h1);
	h1.appendChild(document.createElement("HR"));
	var para=document.createElement("h3");
	para.textContent=D.des;
	c1.appendChild(para);
}









































