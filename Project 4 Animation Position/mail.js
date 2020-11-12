
var input=prompt("To continue Press yes else Press no: ");
while(input=="yes"){
    var sum=0;
    var id=prompt("Enter the product number: ");
    choice=Number(id);
    if(id>5){
        alert("Wrong input");
        continue;
    }
    var quan=Number(prompt("Enter the quantity: "));
    switch(choice){
        case 0:
            break;
        case 1:
            sum+=quan*2.98;
            break;
        case 2:
            sum+=quan*4.50;
            break;
        case 3:
            sum+=quan*9.98;
            break;
        case 4:
            sum+=quan*4.49;
            break;
        case 5:
            sum+=quan*6.87;
            break;
    }
    document.getElementById(id).innerHTML=sum;
    input=prompt("To continue Press yes else Press no: ");
}