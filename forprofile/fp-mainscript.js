var searchInput = document.getElementById("trackSelector")

searchInput.oninput = function(){
  if($(this).val().length >0) {
   $("#search-btn").click();
   }else{
   $("#search-container").empty();
   } 
}
  
  var searchFormConfig = {
      url: "https://artists.mixviberecords.com",
     numPost: 100,
     summaryPost: false,
     summaryLength: 0,
     resultTitle: "",
     noResult: "<img style='width:50px;height:50px;' src='data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGZpbGw9JyNGRkZGRkYnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzInIHZpZXdCb3g9JzAgMCAyNCAyNCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdtMTIuMDAyIDIxLjUzNGM1LjUxOCAwIDkuOTk4LTQuNDggOS45OTgtOS45OThzLTQuNDgtOS45OTctOS45OTgtOS45OTdjLTUuNTE3IDAtOS45OTcgNC40NzktOS45OTcgOS45OTdzNC40OCA5Ljk5OCA5Ljk5NyA5Ljk5OHptMC0xLjVjLTQuNjkgMC04LjQ5Ny0zLjgwOC04LjQ5Ny04LjQ5OHMzLjgwNy04LjQ5NyA4LjQ5Ny04LjQ5NyA4LjQ5OCAzLjgwNyA4LjQ5OCA4LjQ5Ny0zLjgwOCA4LjQ5OC04LjQ5OCA4LjQ5OHptMC02LjVjLS40MTQgMC0uNzUtLjMzNi0uNzUtLjc1di01LjVjMC0uNDE0LjMzNi0uNzUuNzUtLjc1cy43NS4zMzYuNzUuNzV2NS41YzAgLjQxNC0uMzM2Ljc1LS43NS43NXptLS4wMDIgM2MuNTUyIDAgMS0uNDQ4IDEtMXMtLjQ0OC0xLTEtMS0xIC40NDgtMSAxIC40NDggMSAxIDF6JyBmaWxsLXJ1bGU9J25vbnplcm8nLz48L3N2Zz4=' alt='Artist Profile Not Found'> No Profiles Found!",
     resultThumbnail: true,
     thumbSize: 50,
  };
  function getId(a){return document.getElementById(a)}var config=searchFormConfig,input=getId("trackSelector"),resultContainer=getId("search-container"),resultLoader=getId("search-loader"),skeleton="";function showResult(l){var k=l.feed.entry?l.feed.entry:"",a,g,e;skeleton="<span class='d'>"+config.resultTitle+" &quot;"+input.value+"&quot;</span>";skeleton+='<ol class="artistlist">';if(k===""){skeleton+="<li style='pointer-events: none;'>"+config.noResult+"</li>"}for(var d=0;d<config.numPost;d++){if(d==k.length){break}var b=new RegExp(input.value,"ig"),f=k[d],h=f.title.$t;for(var c=0;c<f.link.length;c++){if(f.link[c].rel=="alternate"){a=f.link[c].href;break}}g=("summary" in f&&config.summaryPost===true)?f.summary.$t:"";if(config.resultThumbnail===true){var e;try {thumburl = f.media$thumbnail.url;} catch (error) {ss = f.content.$t;aa = ss.indexOf("<img");bb = ss.indexOf('src="', aa);cc = ss.indexOf('"', bb + 5);dd = ss.substr(bb + 5, cc - bb - 5);if (aa != -1 && bb != -1 && cc != -1 && dd != "") {thumburl = dd;} else thumburl = "https://cdn.jsdelivr.net/gh/mvrec/serv@master/img/dt-artists.svg";}}g=g.replace(/<br ?\/?>/ig," ").replace(/<.*?>/g,"").replace(/[<>]/g,"");if(g.length>config.summaryLength){g=g.substring(0,config.summaryLength)+"..."}g=g.replace(b,""+input.value+"");skeleton+='<li><img style="width:'+config.thumbSize+"px;height:"+config.thumbSize+'px;" src="'+ thumburl +'" crossorigin="anonymous" /><p><a href="'+a+'" class="inactiveLink" target="_blank">'+h+"</a>"+g+"</p></li>"}skeleton+="</ol>";resultContainer.innerHTML=skeleton;resultLoader.style.display="none";resultContainer.style.display="block"}(function(){var a=document.createElement("script");a.type="text/javascript";a.id="search-feed-script";document.getElementsByTagName("head")[0].appendChild(a)})();function updateScript(){resultContainer.style.display="none";resultLoader.style.display="block";var a=getId("search-feed-script"),b=document.createElement("script"),c=input.value;b.id="search-feed-script";b.type="text/javascript";b.src=config.url+"/feeds/posts/default?alt=json-in-script&q="+c+"&max-results="+config.numPost+"&callback=showResult";a.parentNode.removeChild(a);document.getElementsByTagName("head")[0].appendChild(b);loadUrl();return false}function resetField(){if(input.value===""){resultContainer.style.display="none";resultLoader.style.display="none"}};

var coverImage;
function loadUrl(){
setTimeout(function () {
$("ol.artistlist li").click(function(e, element) {
  var gethref = $(this).find('img').attr('src');
  var getname = $(this).find('a').text();
//  document.getElementById('namebox').innerHTML = gethref;
  $("#search-container").hide('slow');
  $("#selectTrack").fadeOut();
  $("#selectTrack").css("transform", `translateX(100%)`);
  $("#form").fadeIn(2000);
  $("#form").css("transform", `translateX(0)`);
  
 // document.getElementById('artist-url').value = gethref;
 // document.getElementById('checkurl').href = gethref;
  document.getElementById('tkTitleSelector').value = getname;
  coverImage = gethref;
  process();
});     
 }, 2000);
}
  
$('#artist-url').bind('input', function() { 
  var gethrefinput = $(this).val()
  document.getElementById('checkurl').href = gethrefinput;  
});  
