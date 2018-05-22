window.onload = function(){
    var t = document.getElementsByTagName("h1");
    var h1 = t[0];
        t = document.getElementsByTagName("h2");    
    var h2 = t[0];
    document.getElementById('task1').onclick = function(){
        var t = '';
        for(var i = 1 ; i < 101 ;i++){
            if( i % 3 == 0)
                t += 'PA ,';
            else
                t += i + " ,";
        }
        console.log(t.slice(0,-2));
        h1.innerHTML = "已经输出到控制台了哦";
        h2.innerHTML = "";
    }

    document.getElementById('task2').onclick = function(){
        var table = document.createElement("table");
        for(var i = 1 ;i < 10 ;i++){
            var tr = document.createElement("tr");
            for(var j = 1 ;j <= i;j++){
                var td = document.createElement("td");
                var text = document.createTextNode(j+" x "+i+" = "+j*i); 
                td.appendChild(text);
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        var body = document.getElementsByTagName('body');
        body = body[0];
        body.appendChild(table);
    }

    document.getElementById('task3').onclick = function(){
        var t = document.getElementsByTagName("h2");    
        var h2 = t[0];
        var myDate = new Date();
        var hour = myDate.getHours();
        var gree = '';
        if(hour >= 0 && hour < 5){//凌晨
            gree = "这么晚了，还在努力啊，早点休息嘛";            
        }else if(hour >=5 && hour <8){//早晨
                    gree = "Good Morning";
        }else if(hour >=8 && hour <11){//上午
            gree = "同学上午好哦~";            
        }else if(hour >=11 && hour <13){//中午
            gree = "中午应该午睡的哦";            
        }else if(hour >=13 && hour <16){//下午
            gree = "同学，下午好";            
        }else if(hour >=16 && hour <19){//傍晚
            gree = "天气正凉爽，出去走走？";            
        }else if(hour >=19){//晚上
            gree = "总结一下今天，明天继续奋力前行！";            
        }
        h2.innerHTML = gree;
    }
}
