function colo()
        {
            var col=["a.jpg","b.jpg","c.jpg","d.jpg","e.jpg","f.jpg","g.jpg","h.jpg"]
            var len=col.length;
           var ran=Math.random()*len;
           var rou=Math.round(ran)
           document.getElementById("a").style.backgroundImage="URL(../asset/images/"+col[rou]+")"
           var updatetime=setTimeout(function(){colo()},1000)
        }
function imgk(pic,heading,discription)
    {
      document.getElementById("bigscreen").removeAttribute("style")
      document.getElementById("imgheading").innerHTML=heading;
      document.getElementById("imgparagraph").innerHTML=discription;
      bigscreen.style.display="flex"
      fullimg.src=pic;
    }
    function imgv()
    {
        document.getElementById("bigscreen").setAttribute("style","display:none")
    }