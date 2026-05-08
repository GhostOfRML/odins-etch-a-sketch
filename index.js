function createGrid(size) {
    let screen = document.querySelector(".sketch-screen")
    
    for (let i = 0 ;i <size ;i++ ){
        if (size > 101){
        alert ("The maximum size is 100!")
        }
        else {
        let column =document.createElement("div");
        column.classList.add("column")
        for (let j = 1;j <= size; j++ ){
            let row = document.createElement("div");
            row.classList.add("row")
            row.style.border= "2px solid black"
            column.appendChild(row);
        }
    screen.appendChild(column);}
    
    }
};
createGrid(prompt("Tell me a number up to 100"))