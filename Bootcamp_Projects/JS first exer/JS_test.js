// var fname=prompt("Enter your first name: ");
// var lname=prompt("Enter your last name: ");
// var age=prompt("Enter your age: ");
// console.log("Your full name is "+fname+" "+lname);
// console.log("Your are "+age+" years old");

// var age=prompt("Enter your age: ");
// alert("You have lived "+age*365+" days.");

var input=prompt("Enter your choice: ");

list=[];
while(input!=="quit"){
    if(input==="new"){
        var temp=prompt("Enter your task: ");
        list.push(temp);
        console.log("Task added to TODO list");
    }
    else if(input==="list"){
        console.log("************\n");
        list.forEach(function(item){
            console.log(item+"\n");
        });
        console.log("************");
    }
    else if(input==="delete"){
        var temp=prompt("Enter index of todo list: ");
        list.splice(temp, 1);
        prompt("Task removed from TODO list");
    }
    input=prompt("Enter your choice: ");
}