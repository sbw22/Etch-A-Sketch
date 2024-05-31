const container = document.getElementById('container');
const btn = document.getElementById('sideChanger');
const body = document.querySelector('main');

let length = 16;

const createDiv = (row) => {
   // console.log('inside createDiv function');
    let newD = document.createElement('div');
    newD.setAttribute('class', 'section');
    
    row.appendChild(newD);
}


const createGrid = (length) => {
    //console.log('inside createGrid function');
    for(let k = 0; k < length; k++){

        let row = document.createElement('div');
        row.setAttribute('class', 'row');
        container.appendChild(row);

        for(let i = 0; i < length; i++){

            createDiv(row);
        }
    }
}

const deleteGrid = (oldLength) => {
    //console.log('inside deleteGrid function');
    for(i=0; i<oldLength; i++){
        console.log(container.removeChild(container.firstElementChild));
    }
   
}

btn.addEventListener('click', (event) => {
    let oldLength = length;
    length = prompt('New side length: ');
    if(length > 100){
        while(length > 100){
            length = prompt('Length cannot be longer than 100. Enter a new side length: ');
        }
    }
    deleteGrid(oldLength);
    createGrid(length);
});

createGrid(length);













