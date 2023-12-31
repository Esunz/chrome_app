//JSON
//JavaScript Object notation

//1. Object to JSON
//stringfy(obj)

let json = JSON.stringify(true);
console.log(json);



const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump:() => {
        console.log(`${name} can jump!`);
    },
    
    };
    
    json = JSON.stringify(rabbit);
    console.log(json);
    
    json = JSON.stringify(rabbit, ['name', 'color', ]);
    console.log(json);
    
    json = JSON.stringify(rabbit, (key, value) => {
        console.log(`key: ${key}, value: ${value}`);
        return value;
    });
    console.log(json);
    
    json = JSON.stringify(rabbit, (key, value) => {
        console.log(`key: ${key}, value: ${value}`);
        return key === 'name' ? 'ellie' : value;
    });
    console.log(json);

//2. JSON to Object
//parse(json)