let input = document.querySelector("#input");

let form1 = document.querySelector(".form1");

let ul = document.getElementById("ul");

form1.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value === "") {
    console.log("lsdf");
  } else {
    let value1 = input.value;
    let item = document.createElement("ul");
    item.className = "text-center ";
    const newItem = `
    <li>
         <span><h4>${value1}</h4></span>
        <input "/>
        <div class="btn"> 
            <button class ="btn btn-warning" onclick="addbtn()">Add</button>
            <button onclick="delbtn1()" class="btn btn-danger ">X</button>
        </div>
    </li>`;
    item.innerHTML = newItem;
    ul.append(item);
    value1.value = " ";
  }
});
//

function addbtn() {
  let pNode = event.target.parentNode.parentNode.children;

  // console.log( pNode);
  // let value = input.value;
  console.log(pNode);
  const val = pNode[1].value;
  // let val="hello"
  console.log(event.target.parentNode.parentNode);

  let item = document.createElement("li");
  // item.draggable=true;
  // item.ondragstart=dstart();
  // item.ondragover=dragoover();
  const newItem = `
     <div draggable=true ondragstart="dstart()" ondragover="dragoover()">   
    <span><h4>${val}</h4></span>
    <input type="text" style="height:40px; margin-top:15px; "/>
    <div> 
        <button onclick="addbtn()" class="btn btn-warning mt-1">Add</button>
        <button onclick="delbtn2()" class="btn btn-danger mt-1">X</button>
    </div>
    </div>
       
`;
  item.innerHTML = newItem;
  let li = event.target.parentNode.parentNode;
  li.appendChild(item);

  input.value = " ";
}

function delbtn1() {
  let parentElement = event.target.parentNode.parentNode.parentNode;
  parentElement.remove();
}
function delbtn2() {
  let parentElement = event.target.parentNode.parentNode;
  parentElement.remove();
}

var row;
function dstart() {
  row = event.target;
}
function dragoover() {
  var e = event;
  e.preventDefault();

  let children = Array.from(e.target.parentNode.parentNode.children);
  if (children.indexOf(e.target.parentNode) > children.indexOf(row))
    e.target.parentNode.after(row);
  else e.target.parentNode.before(row);
}
