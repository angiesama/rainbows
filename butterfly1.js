butterfly_add = function() {
	var var imagesArray = ["https://cloud.githubusercontent.com/assets/8966405/4468707/b50d3b1c-4902-11e4-9751-c61be79da65d.png", "https://cloud.githubusercontent.com/assets/8966405/4468708/b51c18e4-4902-11e4-930b-7ee5f43ccca4.png", "https://cloud.githubusercontent.com/assets/8966405/4468713/b520d06e-4902-11e4-831a-82f2883cc940.png", "https://cloud.githubusercontent.com/assets/8966405/4468709/b51ca9b2-4902-11e4-8111-e40df0d5686b.png", "https://cloud.githubusercontent.com/assets/8966405/4468710/b51d0a42-4902-11e4-98b1-8379917a3de9.png", "https://cloud.githubusercontent.com/assets/8966405/4468711/b51eb8ce-4902-11e4-87c1-909aead623fc.png", "https://cloud.githubusercontent.com/assets/8966405/4468712/b51ee510-4902-11e4-84b3-9ef724f80e0e.png"];
	
function displayImage(){

    
    var num = Math.floor(Math.random() * 8); // 0...8
    
    document.canvas.src = imagesArray[num];

}
	var count = 7;
	if (Math.random() > .7) {
	}
	file += Math.ceil(Math.random()*count) + '.gif';
	var div = document.createElement('div');
	div.style.position = 'fixed';
	
	var height = Math.random()*.9;
	if (typeof(window.innerHeight) == 'number') {
		height = height*window.innerHeight+'px';
	} else if(document.documentElement && document.documentElement.clientHeight) {
		height = height*document.documentElement.clientHeight+'px';
	} else {
		height = height*100+'%'; 
	}
	
	div.style.top = height;
	div.style.left = Math.random()*90 + '%';
	var img = document.createElement('img');
	img.setAttribute('src',butterfly_url);
	var body = document.getElementsByTagName('body')[0];
	body.appendChild(div);
	div.appendChild(img);
