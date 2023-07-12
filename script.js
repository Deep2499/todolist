let inputfield=document.querySelector(".inputfield");
    let addbutton=document.querySelector(".addbutton");
    let tasklist=document.querySelector(".tasklist");
    let show=document.querySelector(".show");
    let hide=document.querySelector(".hide");
    show.style.fontWeight="bold"
    hide.style.fontWeight="bold"
    show.style.display="none";
    let todos_array=[];
    let idn=0;
    const RenderTodos = () => {
      console.log(todos_array.length)
      tasklist.innerHTML = ''
      for(let i=0; i<todos_array.length; i=i+1) {
        let li = document.createElement("li");
        li.className = "list_item";
        let div = document.createElement("div");
        div.innerText=todos_array[i].task;
        let deletebutton = document.createElement("button");
        deletebutton.innerText="Delete";
        deletebutton.style.fontWeight="bold"
        deletebutton.className = "deletebutton"
        li.appendChild(div);
        li.appendChild(deletebutton);
        tasklist.appendChild(li);
        deletebutton.addEventListener("click", ()=>{delete_todo(todos_array[i].id)})

      }
    }

    hide.addEventListener("click", ()=>{
      hide.style.display="none"
      show.style.display="block"
      tasklist.style.display="none"
    })

    show.addEventListener("click", ()=>{
      hide.style.display="block"
      show.style.display="none"
      tasklist.style.display="block"
      RenderTodos();
    })

    const delete_todo = (id) => {
      console.log(todos_array.length)
      for(let i=0; i<todos_array.length; i=i+1) {
        if(todos_array[i].id==id) {
          todos_array.splice(i, 1);

          RenderTodos()
          break;
        }
      }
    }

    const add_todo = () => {
      console.log("added")
      let value=inputfield.value;
      idn++;
      if(value!=="") {
        todos_array.push({id: idn, task: value});
        document.querySelector(".inputfield").value="";
        RenderTodos();
      }
    }

    async function fetch_todos() {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const ans = await response.json();
      for(let i=0; i<ans.length; i=i+1) {
        todos_array.push({id: idn, task: ans[i].title});
        idn++;
      }
      RenderTodos();
    }

    fetch_todos();
