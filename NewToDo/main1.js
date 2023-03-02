showData();
let input = document.querySelector("#input")

let form1 = document.querySelector(".form1")
// let save =document.querySelector("#save");
let ul=document.getElementById("ul");


form1.addEventListener('submit',(e)=>{
    event.preventDefault()
    let value1 = input.value;
    if(value1 === ''){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Text field cannot be empty',
            
          }) ;
          return;
        }
    let item = document.createElement('ul');
    item.className="text-center ";
    item.setAttribute("ondragstart","dstart(event)")
    item.setAttribute("draggable","true")
    item.setAttribute("ondragover","dragoover()")
    const newItem = `
    <li>
         <span><h4>${value1}</h4></span>
        <input type="text" style="height:40px; margin-top:15px; "/>
        <div class="btn">   
            <button class ="btn btn-warning" onclick="addbtn()">Add</button>
            <button onclick="delbtn()" class="btn btn-danger ">X</button>
        </div>
    </li>
`;
item.innerHTML=newItem;
ul.append(item);
input.value=" ";

    })

    // 
    
    function addbtn(){

        let pNode = event.target.parentNode.parentNode.children
        
        // console.log( pNode);       
        // let value = input.value;
        console.log(pNode);
        const val=pNode[1].value;

        if(val===''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Text field cannot be empty',
                
              }) ;
            return;
        }
        // let val="hello"
        console.log(event.target.parentNode.parentNode);
         
        let item = document.createElement('li');
        item.setAttribute("ondragstart","dstart(event)")
        item.setAttribute("draggable","true")
        item.setAttribute("ondragover","dragoover()")
        const newItem = `
     <div>   
    <span><h4>${val}</h4></span>
    <input type="text" style="height:40px; margin-top:15px; "/>
    <div> 
        <button onclick="addbtn()" class="btn btn-warning mt-1">Add</button>
        <button onclick="delbtn()" class="btn btn-danger mt-1">X</button>
    </div>
    </div>
       
`;
        item.innerHTML=newItem;
        let li = event.target.parentNode.parentNode;
        li.appendChild(item);

        val.innerHTML=" ";
    }

    function delbtn(){
        let Element=event.target.parentNode.parentNode.parentNode;
        console.log(event.target.parentNode+"is parent node");
        Element.remove();
        localStorage.removeItem("div")
    }



    var row;
    function dstart() {
        
        row = event.target;
    }
    function dragoover() {
        var e= event;
        e.preventDefault();
    
        let children = Array.from(e.target.parentNode.parentNode.children);
        console.log(children);
        if (children.indexOf(e.target.parentNode) > children.indexOf(row))
        
           { e.target.parentNode.after(row);
        }
            
        else
            e.target.parentNode.before(row);
    }

    // console.log(save);
   
    
        function save(){
       let mainDiv = document.getElementById("ul");
    //    console.log(mainDiv.innerHTML);
       console.log(mainDiv.innerHTML);
        localStorage.setItem("div", mainDiv.innerHTML);
        }
    
    
//  localStorage.removeItem("div")
    // window.onload(()=>showData());
    

    function showData() {
        let div = document.getElementById("ul");
        let data = localStorage.getItem("div");
        div.innerHTML = data;
    }




