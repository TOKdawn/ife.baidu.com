function firstClick() {
    var str = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '他出生在英格兰一个富有的银行家家里。巴贝奇具有极高的数学天赋，曾担任剑桥大学“路卡辛讲座”的数学教授。20岁时，他决心制造一台自动计算器，以取代人工制作数学用表的落后方式。他用10年时间研制成功了第一台差分机，运算精度达到了6位小数，这种机器取代了人工计算数学函数表，非常适合于编制航海和天文方面的数学用表。1834年，巴贝奇又设计出了“分析机”。遗憾的是，这份天才的设计超前于当时的工业水平，巴贝奇耗尽家财和生命也没能完成分析机的制造。为了纪念巴贝奇，在20世纪90年代，专家们根据巴贝奇的设计图纸，按原样制造出了一台分析机，如图1.4所示。九泉之下的巴贝奇若知道这一消息，当感欣慰。';
    sAlert1(str);
}
function secClick() {
    var str = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '19世纪诗人拜伦的女儿，数学家。在阿达27岁时，她成为巴贝奇科学研究上的合作伙伴，承担了为分析机编制函数计算程序的重任。分析机的研制缺少资金，阿达忍痛两次把丈夫家中祖传的珍宝送进当铺，以维持日常开销。贫困交夹，无休无止脑力劳动，使阿达的健康状况急剧恶化。1852年，阿达去世，死时年仅36岁。在短暂的一生中，她发明了穿孔机程序，建立了循环和子程序的概念，为计算机程序设计“算法”，写出了第一份“程序设计流程图”。阿达编制的这些程序，即使到了今天，电脑软件界的后辈仍然不敢轻易改动一条指令。人们公认她是世界上第一位程序员，把她誉为“计算机之母”。';
    sAlert1(str);
}
function thirdClick() {
    var str = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '生于英国伦敦，是著名的数学家和逻辑学家，被称为计算机科学之父、人工智能之父，是计算机逻辑的奠基者。牛津大学著名数学家安德鲁·哈吉斯这样评价他:“他为人间留下了智慧，留下了深邃的思想，后人必须为之思索几十年、上百年甚至永远。”图灵25岁首创的“图灵机”概念如石破天惊，而立之年探讨的仿真系统和自动程序设计概念如仙人指路，不惑之“晚年”开创的人工智能和“图灵测试”如开山辟路，无一不是超前的科学预见，无一不展现着这位天才的过人智慧。 图灵如划破夜空的耀眼流星，身后的光芒持续照亮着探索计算机未来的路途，人们无法想象一个没有图灵的计算机世界会多么昏暗寂寞。世界计算机界设立了“图灵奖”，一年一度由美国计算机学会颁发给世界上最优秀的计算机科学家，是计算机领域至高无上的荣誉，是计算机科学界的诺贝尔奖。';
    sAlert1(str);
}
function fourClick() {
    var str = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '美藉匈牙利人。冯·诺依曼是普林斯顿大学、宾夕法尼亚大学、哈佛大学、伊斯坦堡大学、马里兰大学、哥伦比亚大学和慕尼黑高等技术学院等院校的荣誉博士。他是美国国家科学院、秘鲁国立自然科学院和意大利国立林且学院等院校的院士。1946年6月，他写了一篇题为《关于离散变量自动电子计算机的草案》的论文，第一次提出了在数字计算机内部存储程序的概念。这是所有现代电子计算机的范式，被称为“冯诺依曼结构”，按这一结构建造的电脑称为存储程序计算机，又称为通用计算机。时至今日，我们所使用的电脑都有一个共同的名字，叫“冯诺依曼机”。鉴于冯·诺依曼在发明电子计算机中起到的关键性作用，他被西方人誉为“计算机之父”。';
    sAlert1(str);
}


function sAlert1(str){
    var msgw,msgh,bordercolor;
    msgw=600;//提示窗口的宽度
    msgh=300;//提示窗口的高度
    titleheight=25 //提示窗口标题高度
    bordercolor="#336699";//提示窗口的边框颜色
    titlecolor="#99CCFF";//提示窗口的标题颜色

    var sWidth,sHeight;
    sWidth=document.body.offsetWidth;
    sHeight=screen.height;
    var bgObj=document.createElement("div");
    bgObj.setAttribute('id','bgDiv');
    bgObj.style.position="absolute";
    bgObj.style.top="0";
    bgObj.style.background="#777";
    bgObj.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=3,opacity=25,finishOpacity=75";
    bgObj.style.opacity="0.6";
    bgObj.style.left="0";
    bgObj.style.width=sWidth + "px";
    bgObj.style.height=sHeight + "px";
    bgObj.style.zIndex = "10000";
    document.body.appendChild(bgObj);

    var msgObj=document.createElement("div")
    msgObj.setAttribute("id","msgDiv");
    msgObj.setAttribute("align","center");
    msgObj.style.background="white";
    msgObj.style.border="1px solid " + bordercolor;
    msgObj.style.position = "absolute";
    msgObj.style.left = "50%";
    msgObj.style.top = "50%";
    msgObj.style.font="12px/1.6em Arial,Helvetica,sans-serif";
    msgObj.style.marginLeft = "-225px" ;
    msgObj.style.marginTop = -75+document.documentElement.scrollTop+"px";
    msgObj.style.width = msgw + "px";
    msgObj.style.height =msgh + "px";
    msgObj.style.textAlign = "center";
    msgObj.style.lineHeight ="25px";
    msgObj.style.zIndex = "10001";

     var title=document.createElement("h4");
     title.setAttribute("id","msgTitle");
     title.setAttribute("align","right");
     title.style.margin="0";
     title.style.padding="3px";
     title.style.background=bordercolor;
     title.style.filter="progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);";
     title.style.opacity="0.75";
     title.style.border="1px solid " + bordercolor;
     title.style.height="18px";
     title.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif";
     title.style.color="white";
     title.style.cursor="pointer";
     title.innerHTML="关闭";
     title.onclick=function(){
          document.body.removeChild(bgObj);
          document.getElementById("msgDiv").removeChild(title);
          document.body.removeChild(msgObj);
      }
      document.body.appendChild(msgObj);
      document.getElementById("msgDiv").appendChild(title);
      var txt=document.createElement("p");
      txt.style.margin="2em 0"
      txt.setAttribute("id","msgTxt");
      txt.innerHTML= str;
      document.getElementById("msgDiv").appendChild(txt);
}
