function nightDayHandler(self){
    if(self.value==="night"){
        self.value="day";
        Body.setColor("white");
        Body.setBackColor("black");
        Link.setColor("powderblue");
    }else{
        self.value='night';
        Body.setColor("black");
        Body.setBackColor("white");
        Link.setColor("blue");
    }
}

const Body = {
    setColor : function(color){
        document.querySelector('body').style.color = color; 
    },
    setBackColor : function(color){
        document.querySelector('body').style.backgroundColor = color; 
    },
}

const Link = {
    setColor : function(color){
        alist = document.querySelectorAll('a');
        let i = 0;
        while(i<alist.length){
            alist[i].style.color=color;
            i++;
        }
    },
}