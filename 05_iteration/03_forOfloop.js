// for of loop

["", "",""]
[{}, {}, {}]

const array = ["bat", "ball", "gloves", "helmet", "pads"];
for(const num of array){
    console.log(num);
}

const greetings = "hello world";    
for(const char of greetings){
    console.log(char);
}

// Map 

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States");
map.set("UK", "United Kingdom");
console.log(map);

for (const [key,value] of map) {
    console.log(key + ":-" + value);

    
}