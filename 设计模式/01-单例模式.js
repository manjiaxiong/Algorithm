(function(w){
    var king=null;
    function King(name){
        if(!king){
            this.name=name;
            this.id=Math.random();
            king=this;
        }
        return king;
        // this.name=name;
        // this.id=Math.random();
    }
    King.prototype={
        constructor:King,
        work:function(){
            console.log(this.name+this.id+'有事早奏，无事退朝');//两个undefinde相加是NaN
            // console.log(this.name+this.id);
            // console.log(this.id);

        }
    }
    w.King=King;
})(window);
for(var i=0;i<5;i++){
    new King('康熙皇帝').work();
    // console.log(new King('康熙皇帝'));
}