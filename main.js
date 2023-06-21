var images = ["https://img.freepik.com/vector-premium/madre-feliz-dibujos-animados-abrazando-su-hijo_29190-4562.jpg","https://st2.depositphotos.com/1283262/9837/v/950/depositphotos_98370072-stock-illustration-cartoon-dad-dancing.jpg","https://imagenestotales.com/wp-content/uploads/2021/07/60582d0d4c4683e12d66952fb6552202.jpg","https://st3.depositphotos.com/7843760/14562/v/950/depositphotos_145625515-stock-illustration-cute-boy-with-backpack-cartoon.jpg"];
var names = ["Mamá","Papá","Hermana","Yo"];

var i = 0;
function update(){
    i++;
    var numbers_family = 4;
    if(i>numbers_family){
        i=0;
    }
    var updateimage = images[i];
    var updatenames = names[i];
    document.getElementById("family_member_image").src = updateimage;
    document.getElementById("family_member_name").innerHTML = updatenames;
}