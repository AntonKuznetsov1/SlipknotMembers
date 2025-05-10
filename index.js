let counter = 0;
let collection = {};

function createObject(link, name, position, year){
    let obj = {
        link: link,
        name: name,
        position: position,
        year: year
    };
    collection[`object${counter}`] = obj;
    counter++; 
    return obj;
};

const members = [
    createObject("image0.png", "Corey Taylor", "Leading Vocals", "1997"),
    createObject("image1.png", "Joey Jordison", "Drums", "1995"),
    createObject("image2.png", "Shawn Crahan", "Percussion", "1995"), 
    createObject("image3.png", "Mick Thomson", "Guitar", "1996"),
    createObject("image4.png", "Sid Wilson", "Turntables", "1998"),
    createObject("image5.png", "Eloy Casagrande", "Drums", "2024"),
    createObject("image6.png", "Chris Fehn", "Percussion", "1998"), 
    createObject("image7.png", "Paul Gray", "Bass", "1995"), 
    createObject("image8.png", "Jim Root", "Guitar", "1999"),
    createObject("image9.png", "Craig Jones", "Samples & Keyboards", "1996"), 
    createObject("image10.png", "Michael Pfaff", "Percussion", "2019"),
    createObject("image11.png", "Alessandro Venturella", "Bass", "2014"),
    createObject("image12.png", "Donny Steele", "Guitar", "1995"),
    createObject("image13.png", "Jay Weinberg", "Drums", "2014")
];




const body = document.getElementById("mainContainer");

for (let i = 0; i < 14; i++) {
    const box = document.createElement("div");
    box.classList.add("innerContainer", "item");
    
    const image = document.createElement("img");
    image.classList.add("image", "item1");
    image.src = members[i].link;

    const h3name = document.createElement("h3");
    h3name.classList.add("name", "item1");
    h3name.innerHTML = members[i].name;

    const h4name = document.createElement("h4");
    h4name.classList.add("position", "item1");
    h4name.innerHTML = members[i].position;

    const years = document.createElement("h4");
    years.classList.add("years", "item1");
    years.innerHTML = members[i].year;

    box.appendChild(image);
    box.appendChild(h3name);
    box.appendChild(h4name);
    box.appendChild(years);
    
    body.appendChild(box);
}
console.log(document.getElementById("mainContainer"));

