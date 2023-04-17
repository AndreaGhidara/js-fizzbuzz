let container = document.createElement("div");
container.id = "container";
document.querySelector("body").append(container);

for (var i = 1; i < 101; i++) {
    let box = document.createElement("div");
    box.className = "box";
    box.style.backgroundSize = "contain"

    if (i % 15 == 0) {
        let textBox = document.createTextNode("fizzBuzz");
        box.append(textBox);
        
        document.getElementById("container").append(box);
        box.style.backgroundColor = "green"
        box.style.backgroundImage = `url("https://storage.googleapis.com/sticker-prod/TfbAxbImliJyPpOosUyn/8.thumb128.webp")`;
        // console.log("FizzBuzz");
    }

    else if (i % 3 == 0){
        let textBox = document.createTextNode("fizz");
        box.append(textBox);
        
        document.getElementById("container").append(box);
        box.style.backgroundImage = `url("https://storage.googleapis.com/sticker-prod/TfbAxbImliJyPpOosUyn/0.thumb128.webp")`;
        box.style.backgroundColor = "red"
        
        
        console.log("Fizz");
    }

    else if (i % 5 == 0) {
        let textBox = document.createTextNode("buzz");
        box.append(textBox);
        
        document.getElementById("container").append(box);
        box.style.backgroundImage = `url("https://storage.googleapis.com/sticker-prod/TfbAxbImliJyPpOosUyn/1.thumb128.webp")`;
        box.style.backgroundColor = "blue";

        console.log("Buzz");
    }
    

    else {
        let textBox = document.createTextNode(i);
        box.append(textBox);
        
        document.getElementById("container").append(box);
        
        console.log(i);
    }
}