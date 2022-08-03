$.fn.glide = function() {
	var glideLength = $('.glide-item');
	var fuInterval, fuIntervalTimeout, fuTimeout;
	var iPos = 0;	
	var iPrev, iForw;

	setTimeout(fuIntervalTimeout, 2000);
	
	fuIntervalTimeout = setInterval(function() {

		var iActive = $('.bfa-circle-dot').parent('.glide-link').data('glide');
		if ((glideLength.length - 1) == iActive) {
			iPrev = glideLength.length - 1;
			iActive = glideLength.length - 1;
			iForw = 0;
		} 
		else {
			iPrev = glideLength.length - 1;
			iActive = iActive;
			iForw = iActive + 1;
		}
		console.log([
			iPrev,
			iActive,
			iForw
		]);
		fuTimeout = setInterval(function() {
			iPos = (-1200 * iForw);
			$('.glide-item').css('left', iPos + 'px');
			clearInterval(fuTimeout);
		}, 1);
		
		/* glide-dot class */
		$('[data-glide="'+ (iActive) +'"]').children('.bfa-circle-dot').removeClass('bfa-circle-dot');
		$('[data-glide="'+ (iForw) +'"]').children('.bfa-circle').addClass('bfa-circle-dot');
		
	}, 3000);
	
	
	$('.glide-link').click(function(){
		var glideLink = $(this).data('glide');
		iActive = $('.bfa-circle-dot').parent('.glide-link').data('glide');
		
		$(glideLength[glideLink]).siblings().removeClass('glide-active');
		$(glideLength[glideLink]).addClass('glide-active');
		
		fuInterval = setInterval(function() {
			
			if (iActive < glideLink) {
				iPos = iPos - 100;
				if (iPos <= (-1200 * glideLink)) clearInterval(fuInterval);
			} else if (iActive > glideLink) {
				iPos = iPos + 100;
				if (iPos >= (-1200 * glideLink)) clearInterval(fuInterval);
			}

			$('.glide-item').css('left', iPos + 'px');
		}, 1);

		/* glide-dot class */
		$(this).parent().siblings().children('.glide-link').children('.bfa-circle-dot').removeClass('bfa-circle-dot');
		$(this).children('i').addClass('bfa-circle-dot');
		
	});
	return this;
}

$(document).ready(function (e) {
	$(".glide").glide();  
});

/*
	<section id="aside">
		<div class="container glide">
			
			<div class="glide-items">
				<div class="glide-item glide-active" style="background-color: #febc56; color: gray;"> 
					<div id="content" > 
						<i class="bfa-quote"></i>
						<p class="">Um mich herum ist nichts als Geld, Geld, Geld.
							<br>― Stephen Richards</p>
						<p class="">Die schwierigen Dinge zu tun unterscheidet Gewinner von Verlierern..
							<br>― Stephen Richards, Kosmische Ordnung: Du kannst erfolgreich sein</p>
					</div>
					<div id="sidebar">
						<p class="">Um mich herum ist nichts als Geld, Geld, Geld.
							<br>― Stephen Richards</p> <a class="button" href="wallet_new.html">Holen privaten Schlüssel</a> 
					</div>
				</div>
				
				<div class="glide-item" style="background-color: #8cc63f;"> 
					<div id="content" > 
						<i class="bfa-quote"></i>
						<p class="">Um mich herum ist nichts als Geld, Geld, Geld.
							<br>― Stephen Richards</p>
						<p class="">Die schwierigen Dinge zu tun unterscheidet Gewinner von Verlierern..
							<br>― Stephen Richards, Kosmische Ordnung: Du kannst erfolgreich sein</p>
					</div>
					<div id="sidebar">
						<p class="">Um mich herum ist nichts als Geld, Geld, Geld.
							<br>― Stephen Richards</p> <a class="button" href="wallet_new.html">Holen privaten Schlüssel</a> 
					</div>
				</div>
				
				<div class="glide-item" style="background-color: #0071bc;"> 
					<div id="content" > 
						<i class="bfa-quote"></i>
						<p class="">Um mich herum ist nichts als Geld, Geld, Geld.
							<br>― Stephen Richards</p>
						<p class="">Die schwierigen Dinge zu tun unterscheidet Gewinner von Verlierern..
							<br>― Stephen Richards, Kosmische Ordnung: Du kannst erfolgreich sein</p>
					</div>
					<div id="sidebar">
						<p class="">Um mich herum ist nichts als Geld, Geld, Geld.
							<br>― Stephen Richards</p> <a class="button" href="wallet_new.html">Holen privaten Schlüssel</a> 
					</div>
				</div>
								
				<div class="glide-item" style="background-color: #9e005d;"> 
					<div id="content" > 
						<i class="bfa-quote"></i>
						<p class="">Um mich herum ist nichts als Geld, Geld, Geld.
							<br>― Stephen Richards</p>
						<p class="">Die schwierigen Dinge zu tun unterscheidet Gewinner von Verlierern..
							<br>― Stephen Richards, Kosmische Ordnung: Du kannst erfolgreich sein</p>
					</div>
					<div id="sidebar">
						<p class="">Um mich herum ist nichts als Geld, Geld, Geld.
							<br>― Stephen Richards</p> <a class="button" href="wallet_new.html">Holen privaten Schlüssel</a> 
					</div>
				</div>
								
				<div class="glide-item" style="background-color: pink; color: gray;"> 
					<div id="content" > 
						<i class="bfa-quote"></i>
						<p class="">Um mich herum ist nichts als Geld, Geld, Geld.
							<br>― Stephen Richards</p>
						<p class="">Die schwierigen Dinge zu tun unterscheidet Gewinner von Verlierern..
							<br>― Stephen Richards, Kosmische Ordnung: Du kannst erfolgreich sein</p>
					</div>
					<div id="sidebar">
						<p class="">Um mich herum ist nichts als Geld, Geld, Geld.
							<br>― Stephen Richards</p> <a class="button" href="wallet_new.html">Holen privaten Schlüssel</a> 
					</div>
				</div>
				
			</div>
				
				
			<ul class="glide-nav">
				<li class="glide-nav-item">
					<a class="glide-link" data-glide="0" href="#">
						<i class="bfa-circle bfa-circle-dot"></i></a>
				</li>
				<li class="glide-nav-item">
					<a class="glide-link" data-glide="1" href="#">
						<i class="bfa-circle"></i></a>
				</li>
				<li class="glide-nav-item">
					<a class="glide-link" data-glide="2" href="#">
						<i class="bfa-circle"></i></a>
				</li>
				<li class="glide-nav-item">
					<a class="glide-link" data-glide="3" href="#">
						<i class="bfa-circle"></i></a>
				</li>
				<li class="glide-nav-item">
					<a class="glide-link" data-glide="4" href="#">
						<i class="bfa-circle"></i></a>
				</li>
			</ul>
				
				
		</div>
	</section>
*/

/* glide */
/*
.glide{
}
.glide-items{
	display: flex;
	overflow: clip;
}
.glide-item{
  height: 200px;
  background-color: #4CAF50;
	width: 100% !important;
	position: relative;
	min-width: 1200px;
	
	left: 0px;
display: block !important;
}
.glide-active{
	display: block !important;
}
.glide-nav{
	align-items: center;
	justify-content: center;
	display: flex;
	padding: 20px;
}
.glide-nav-item {
	float: left;
	align-items: center;
	justify-content: center;
}
.glide-link {
	text-decoration: none;
}
.bfa-circle:before,
.bfa-circle-dot:before{
	font-family: FontAwesome;
	position: inherit;
	font-size: 1em;
}
.bfa-circle:before{
	content: "\f111";
	font-size: 22px;
	color: #333;
	padding: 10px;
}
.bfa-circle-dot:before{
	content: "\f192";
	font-size: 22px;
	color: #7d7d7d;
	padding: 10px;
}
*/
/* end glide */