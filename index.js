const button = document.querySelector(".prompt")
const screen = document.querySelector(".sketch-screen");


button.addEventListener("click" , () => {
    screen.innerHTML= "" ;
    createGrid(prompt("Tell me a number up to 100"))
});
function colorGen() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
   let rgb = (" + r + "," + g + "," + b + ");
};

function createGrid(size) {
    
    for (let i = 0 ;i <size ;i++ ){
        if (size > 100){
        alert ("The maximum size is 100!");
        return;
        }
        else {
        let column =document.createElement("div");
        
        )
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


screen.addEventListener("mouseover",() => {
    changeBackgroundColor();
} )

