Problem:1
function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}
var inputMile = feetToMile(5280);
console.log(inputMile)






Problem:2
function woodCalculator(chair, table, bed){ 
    var totalWood = (chair*1) + (table*3) + (bed*5);
    return totalWood;
}
var inputWood = woodCalculator(3, 5, 1);
console.log(inputWood)






Problem:3
function brickCalculator(floorNumber){
    
   if( floorNumber <=10 && floorNumber=>1){
       var brickNumber1 = 15000*floorNumber;
       return brickNumber1;
   }
   else if( floorNumber=>11 && floorNumber<=20){
       var brickNumber2 = ((floorNumber-10)*12000) + 150000;
       return brickNumber2;
   }
   else if(floorNumber > 20){
       var brickNumber3 = ((floorNumber-20)*10000) + 270000;
       return brickNumber3;
   }      
}
var inputFloor = brickCalculator(15);
console.log(inputFloor)








Problem:4
function tinyFriend(strings){
    var tiny = strings[0];
    

     for(var i = 0; i < strings.length; i++){
         var tinyString = strings[i];
         

         if(tinyString.length < tiny.length){
             tiny = tinyString;
         }
     }
     return tiny;
 }
 var result = tinyFriend(['biplob','etiya','c','payel','shanto','shupti','mia']);
 console.log(result)
