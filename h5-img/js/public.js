



function change(doc,win,size){
	var doc = doc.documentElement;
	if(size==1){
		doc.style.fontSize='90px';
	}else if(size==2){
		doc.style.fontSize='100px';
	}else if(size==3){
		doc.style.fontSize='110px';
	}else if(size==4){
		doc.style.fontSize='120px';
	}else{
		doc.style.fontSize='100px';
	}
}
change(document,window,2);



function setImg(){
	var w = $('body').width()
	var imgs = $('.article_context').find('img');

	imgs.each(function(i){
		imgs.eq(i).removeAttr('style')
		imgs.eq(i).removeAttr('height')
		imgs.eq(i).removeAttr('width')
		if(imgs.eq(i).width()>w){
			imgs.eq(i).width('100%')
		}
	})
}
setImg();



function setCenter(){
	var w = $(window).width();
	if(w>640){
		// $('.zhuan_top').css('marginLeft',(w-640)/2)
		$('.share_top').css('marginLeft',(w-640)/2)
		$('.open_box').css('marginLeft',(w-640)/2)
	}else{
		// $('.zhuan_top').css('marginLeft',0)
		$('.share_top').css('marginLeft',0)
		$('.open_box').css('marginLeft',0)
	}
}
setCenter()


$(function(){
	setImg();
	setCenter();

	$('.head_img img').each(function(i){
		var w = $(this).width();
		var h = $(this).height();
		if(w>h){
			$(this).height('100%')
		}else{
			$(this).width('100%');
		}
	})

	$('.z_img img').each(function(i){
		var w = $(this).width();
		var h = $(this).height();
		if(w>h){
			$(this).height('100%')
		}else{
			$(this).width('100%');
		}
	})

	$('.z_img2 img').each(function(i){
		var w = $(this).width();
		var h = $(this).height();
		if(w>h){
			$(this).height('100%')
		}else{
			$(this).width('100%');
		}
	})

	Array.prototype.contains = function(needle) {
		for (i in this) {
			if (this[i].indexOf(needle) > 0)
				return i;
		}
		return -1;
	}
 
	var device_type = navigator.userAgent;//获取userAgent信息
	var md = new MobileDetect(device_type);//初始化mobile-detect
	var os = md.os();//获取系统

	console.log(os + "---" + md.mobile());
	
	if(os == "AndroidOS"){
		var link = document.getElementById('cssLink')
		link.setAttribute('href','css/style_android.css')
	}	
})

window.onresize=function(){
	setImg();
	setCenter();
}




