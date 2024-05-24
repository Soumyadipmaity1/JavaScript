const myobj ={
    js: 'Javascript',
    py: 'Python',
    rb: 'Ruby',
    java: 'Java',
swift: 'Swift'

};

for (const key in myobj) {
        const element = myobj[key];
        
        console.log(key + ':-' + element);
}

const programming = ['Javascript', 'Python', 'Ruby', 'Java', 'Swift'];

for (const key in programming) {
        const element = programming[key];
        
        console.log(key + ':-' + element);
}


const map = new Map();
map.set("IN", "India");
map.set("USA", "United States");
map.set("UK", "United Kingdom");
console.log(map);

for (const key in map) {
    console.log(key );

    
}