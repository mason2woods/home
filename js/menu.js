<!-- 头部（logo + 日期） -->
document.write ("<div class='head'>");
    document.write ("<div class='head_div'>");
        document.write ("<div class='head_left'>您好，欢迎来到<span>个人导航之家</span>！</div>");
		document.write ("<div class='head_left'> <span id='cg'></span> </div>");
		document.write ("<div class='head_left'> <span id='clock'></span> </div>");
        document.write ("<div class='head_right'><span class='to_ri_sp2'>按 Ctrl+D 加入收藏</span></div>");
    document.write ("</div>");
document.write ("</div>");
document.write ("<div class='clear'></div>");
    document.write ("<div class='header'>");
	
document.write ("<div class='top'>");
    document.write ("<div class='logo'><a href='https://dogecoin.com/' target='_blank'><img src='images/doge.png' width='81' height='100' alt='DOGE' title='Dogecoin' /></a></div>");
    document.write ("<div class='date'>");
        document.write ("<div class='weather'><iframe width='455' scrolling='no' height='75' frameborder='0' allowtransparency='true' src='https://i.tianqi.com/index.php?c=code&id=9'></iframe></div>");
        document.write ("<a href='https://www.getmonero.org/'target='_blank'><div class='adv1'><img src='images/monero-logo.png' width='300' height='85' alt='门罗币' title='Home | Monero - secure, private, untraceable' /></div></a>");
    document.write ("</div>");
document.write ("</div>");
document.write ("<div class='clear'></div>");
<!-- 头部（logo + 日期） end -->

<!-- 搜索栏 -->
document.write ("<div class='search'>");
    document.write ("<div class='ruzhu'><a href='https://turtlecoin.lol/' target='_blank'><img src='images/TurtleCoin.png' width='200' height='55' alt='TurtleCoin' title='TurtleCoin.lol - A Fun, Fast, and Easy Way to Send Money To Friends and Businesses' /></a></div>");
    document.write ("<div class='sea'> ");
        document.write ("<div class='sea_left'><p>百度搜索</p></div>");
          document.write ("<div class='container'>");
              document.write ("<div class='bgDiv'>");
                document.write ("<input type='text' class='search-input-text' value='' autofocus placeholder='请输入关键词'>");
                  document.write ("<input type='button' value='搜索一下' class='search-input-button' id='btn'>");
                    document.write ("<div class='suggest'>");
						 document.write ("<ul id='search-result'>");
						 document.write ("</ul>");
                    document.write ("</div>");
              document.write ("</div>");
          document.write ("</div>");
    document.write ("</div>");
document.write ("</div>");
document.write ("<div class='search_bottom'></div>");
document.write ("<div class='clear'></div>");
document.write ("</div>");
document.write ("<div class='clear'>");
document.write ("</div>");
<!-- 搜索栏 end -->

$(document).ready(function(){

	 $(".suspend").mouseover(function() {
        $(this).stop();
        $(this).animate({width: 160}, 400);
    })

    $(".suspend").mouseout(function() {
        $(this).stop();
        $(this).animate({width: 40}, 400);
    });
	
});