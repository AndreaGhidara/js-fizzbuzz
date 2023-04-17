let container = document.createElement("div");
container.id = "container";
document.querySelector("body").append(container);

for (var i = 1; i < 101; i++) {
    let box = document.createElement("div");
    box.className = "box";

    if (i % 15 == 0) {
        let textBox = document.createTextNode("fizzBuzz");
        box.appendChild(textBox);
        
        document.getElementById("container").append(box);
        box.style.backgroundColor = "Green"
        
        // console.log("FizzBuzz");
    }

    else if (i % 3 == 0){
        let textBox = document.createTextNode("fizz");
        box.appendChild(textBox);
        
        document.getElementById("container").append(box);
        box.style.backgroundColor = "red"
        
        console.log("Fizz");
    }

    else if (i % 5 == 0) {
        let textBox = document.createTextNode("buzz");
        box.appendChild(textBox);
        
        document.getElementById("container").append(box);
        box.style.backgroundColor = "Blue"
        
        console.log("Buzz");
    }
    

    else {
        let textBox = document.createTextNode(i);
        box.appendChild(textBox);
        
        document.getElementById("container").append(box);
        
        console.log(i);
    }
}