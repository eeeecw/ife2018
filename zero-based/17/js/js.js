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
            for(var j = 1 ;j < i;j++){
                var td = document.createElement("td");
                var text = document.createTextNode(j+" x "+i+" = "+j*i); 
                td
            }
        }
    }
}
