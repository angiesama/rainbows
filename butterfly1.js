butterfly_add = function() {
	var butterfly_url = 'http://pile.randimg.net/0/131/32893/butterflyz.png';
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
