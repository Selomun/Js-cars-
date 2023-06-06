//hey this is invisible comment.
    var doCoolStuff=function(){
    var currentclassName=document.getElementById
    (`cool`).className;
    //changing class name
    if(currentclassName ==`cool`){
    document.getElementById(`cool`).className
    =`cool red`;
}else {
    document.getElementById(`cool`).className=
        "cool";
  }
}

var car={
    make:"Toyota",
    type:"corolla",
    color:"black",
    isturnedon: true,
    numerofwheels: 4,
    seats:[
           "seat1",
           "seat2",
           "seat3",
           "seat4",
           
    ],

   turnOn: function () {
     this.isturnedon= false;
   },
    
    fly:function(){
      alert("fly");

    },
    switchcar:function(){
      console.log("turn car"+ ison);
      if(ison==false){
          this.isturnedon=false;
      } else {
          this.isturnedon=true;
      }
    
    }
}
  console.log(`hello there famlies!`);
