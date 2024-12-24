let fanName = prompt("Enter Your Fan Name category");
let brandName = prompt("Enter your brand");
let fanColor = prompt("Enter Your Fan Color");
let fanSize = prompt("Enter Your Fan Size 40/48/56");
let fanWatt = +prompt("Enter your watt 120/50/30");
let fanConsumption = +prompt("Enter your consumption 100/50/20");
let fanPrice = +prompt("Enter your price 13500 /12000/10000 /18000");


if(isNaN(fanName)){
    document.write(`<h3> Your Select Fan Name is ${fanName} </h3> <br>`); 
    }else{
        document.write(`<h3> Your Select Fan Name is not valid </h3> <br>`);
    }if(brandName === fanName){
        document.write(`<h3> ${brandName} brand is available </h3>  <br>`);
    }else{
        document.write(`<h3> please put the valid brand name </h3>  <br>`);
    }if (fanColor === "white" || fanColor === "black" || fanColor === "offwhite"){
        document.write(`<h3> ${fanColor} color is available </h3> <br>`);
    }else if(fanColor === "red" || fanColor === "blue" || fanColor === "green"){
        document.write(`<h3> please put the valid color </h3> <br>`);
    }else if( fanColor === "yellow" || fanColor === "pink" || fanColor === "purple"){
        document.write(`<h3> please put the incorrect color choose</h3> <br>`);
    }if(isNaN(fanColor)){
            document.write(`<h3> choose the ${fanColor} </h3> <br>`);
    }else{
        document.write(`<h3> please put the valid color name not number ${fanColor} </h3> <br>`);
    }
    if (fanSize <= 40){
        document.write(`<h3> This size is available ${fanSize} </h3>  <br>`);
    }else if(fanSize <= 48){
     document.write(`<h3> This size is available ${fanSize} </h3>  <br>`);
    }else if(fanSize <= 56){
        document.write(`<h3> your size isn't available but 40 and 48 size is available & This Size is not available ${fanSize} </h3>  <br>`);
    }else{
        document.write(`<h3> put the size please </h3> <br>`);
    }if(fanWatt === 120){
        document.write(`<h3> Your watt is available </h3> <br>`);
    }else if(fanWatt === 50){
        document.write(`<h3> your watt is available </h3> <br>`);
    }else if (fanWatt === 30){
        document.write(`<h3> your watt isn't available </h3> <br>` );
    }else{
        document.write(`<h3> put the watt please </h3> <br>`);
    }if( fanConsumption === 100 ){
        document.write( `<h3> one day consumpt for 1 unit </h3> <br>` );
    }else if( fanConsumption === 50 ){
            document.write( `<h3> one day consumpt for 0.5 unit </h3> <br>` );
    }else if( fanConsumption === 20 ){
            document.write(`<h3> one day consumpt for 0.2 unit </h3>  <br>` );
    }else if(fanConsumption === 0){
       document.write(`<h3> This is not available 0 Consumption fan </h3>  <br>`)
    }else{
            document.write(`<h3> put the consumpt value please  </h3> <br>` );
    }if(fanPrice === 13000 ){
        document.write(`<h2> This ${fanName} fan is not available in this price range. The price of this fan is 13500 . </h2> <br>`);
    }else if(fanPrice === 12000){
        document.write(`<h2> This ${fanName} fan is available in this price range.`);
    }else if(fanPrice === 10000){
        document.write(`<h2> This ${fanName} fan is available in this price range.`);
    }else if(fanPrice === 18000){
    document.write(`<h2> This ${fanName} fan is available in this price range.`);
    }else{
        document.write(`<h2> please put the actual price range not a this ${fanPrice} </h2> <br>`);
    }