
document.getElementById("btn-complit").addEventListener('click',function(event){
    event.preventDefault();
    
    alert('bord updated sccessfully')
    const retand=document.getElementById("container");
    const setDate=new Date().toLocaleTimeString();

    const div=document.createElement("div");
    div.innerHTML=`
    <p id="clearss" class="mt-4 mx-2  bg-gray-100 shadow-lg rounded-sm p-1">you habe complated the task and Fix Mobile Button Issue at ${setDate}</p>
    `
    retand.appendChild(div);
    const Task=document.getElementById("Assigned").innerText;
    const convartedTask=parseInt(Task);
    const hedar=document.getElementById("hedar-text").innerText;
    const convartedHedar=parseInt(hedar)
    const btn=document.getElementById("btn-complit")
    btn.classList.add("bg-blue-100");
    btn.disabled=true;

    // btn.disabled=true;

    
    if(convartedTask>0){
        document.getElementById("Assigned").innerText=convartedTask-1;
        if(convartedHedar>0){
            document.getElementById("hedar-text").innerText=convartedHedar+1;
            if((convartedTask -1===0)){
                alert('Congratulation you have completed all task')
            }

        }
        else{
            alert('thik nai')

        }
    }
    else{
        alert('thik nai')
    }
})
document.getElementById("btn-com").addEventListener('click',function(event){
    event.preventDefault();
    alert('bord updated sccessfully')
    const retand=document.getElementById("container");
    const setDate=new Date().toLocaleTimeString();
    const div=document.createElement("div");
    div.innerHTML=`
    <p id="clearsss" class="mt-4 mx-2 bg-gray-100 shadow-lg rounded-sm p-1"> You have completed the task Add Dark Mode at ${setDate} </p>
    `
    retand.appendChild(div)
    const Task=document.getElementById("Assigned").innerText;
    const convartedTask=parseInt(Task);
    const hedar=document.getElementById("hedar-text").innerText;
    const convartedHedar=parseInt(hedar)
    const btn=document.getElementById("btn-com");
    btn.classList.add("bg-blue-100");
    btn.disabled=true;
    if(convartedTask>0){
        document.getElementById("Assigned").innerText=convartedTask-1;
        if(convartedHedar>0){
            document.getElementById("hedar-text").innerText=convartedHedar+1;
             if((convartedTask -1===0)){
                alert('Congratulation you have completed all task')
            }

        }
        else{
            alert('thik nai')

        }
    }
    else{
        alert('thik nai')
    }
})
document.getElementById("btn-comp").addEventListener('click',function(event){
    event.preventDefault();
    alert('bord updated sccessfully')
    const retand=document.getElementById("container");
    const setDate=new Date().toLocaleTimeString();
    const div=document.createElement("div");
    div.innerHTML=`
    <p id="clearssr" class="mt-4 mx-2 bg-gray-100 shadow-lg rounded-sm p-1"> complated the task and Optimize Home page at ${setDate} </p>
    `
    retand.appendChild(div)
    
    const Task=document.getElementById("Assigned").innerText;
    const convartedTask=parseInt(Task);
    const hedar=document.getElementById("hedar-text").innerText;
    const convartedHedar=parseInt(hedar)
    const btn=document.getElementById("btn-comp");
    btn.classList.add("bg-blue-100");
    btn.disabled=true;
    if(convartedTask>0){
        document.getElementById("Assigned").innerText=convartedTask-1;
        if(convartedHedar>0){
            document.getElementById("hedar-text").innerText=convartedHedar+1;
            if((convartedTask -1===0)){
                alert('Congratulation you have completed all task')
            }
        }
        else{
            alert('thik nai')

        }
    }
    else{
        alert('thik nai')
    }
})
document.getElementById("btn-compl").addEventListener('click',function(event){
    event.preventDefault();
    alert('bord updated sccessfully')
    const retand=document.getElementById("container");
    const setDate=new Date().toLocaleTimeString();
    const div=document.createElement("div");
    div.innerHTML=`
    <p id="clearssi" class="mt-4 mx-2 bg-gray-100 shadow-lg rounded-sm p-1"> complated the task and Add new emoji 🤲 at ${setDate} </p>
    `
    retand.appendChild(div)
    const Task=document.getElementById("Assigned").innerText;
    const convartedTask=parseInt(Task);
    const hedar=document.getElementById("hedar-text").innerText;
    const convartedHedar=parseInt(hedar)
    const btn=document.getElementById("btn-compl")
    btn.classList.add("bg-blue-100");
    btn.disabled=true;
    if(convartedTask>0){
        document.getElementById("Assigned").innerText=convartedTask-1;
        if(convartedHedar>0){
            document.getElementById("hedar-text").innerText=convartedHedar+1;
            if((convartedTask -1===0)){
                alert('Congratulation you have completed all task')
            }

        }
        else{
            alert('thik nai')

        }
    }
    else{
        alert('thik nai')
    }
})
document.getElementById("btn-compli").addEventListener('click',function(event){
    event.preventDefault();
    alert('bord updated sccessfully')
    const retand=document.getElementById("container");
    const setDate=new Date().toLocaleTimeString();
    const div=document.createElement("div");
    div.innerHTML=`
    <p id="clearssf" class="mt-4 mx-2 bg-gray-100 shadow-lg rounded-sm p-1"> complated the task and Integrate OpenAI API at ${setDate} </p>
    `
    retand.appendChild(div)
    const Task=document.getElementById("Assigned").innerText;
    const convartedTask=parseInt(Task);
    const hedar=document.getElementById("hedar-text").innerText;
    const convartedHedar=parseInt(hedar)
    const btn=document.getElementById("btn-compli")
    btn.classList.add("bg-blue-100");
    btn.disabled=true;
    if(convartedTask>0){
        document.getElementById("Assigned").innerText=convartedTask-1;
        if(convartedHedar>0){
            document.getElementById("hedar-text").innerText=convartedHedar+1;
            if((convartedTask -1===0)){
                alert('Congratulation you have completed all task')
            }

        }
        else{
            alert('thik nai')

        }
    }
    else{
        alert('thik nai')
    }
})
document.getElementById("btn-complis").addEventListener('click',function(event){
    event.preventDefault();
    alert('bord updated sccessfully')
    const retand=document.getElementById("container");
    const setDate=new Date().toLocaleTimeString();
    const div=document.createElement("div");
    div.innerHTML=`
    <p id="clearssa" class="mt-4 mx-2 bg-gray-100 shadow-lg rounded-sm p-1"> complated the task and Improve Job searching at ${setDate} </p>
    `
    retand.appendChild(div)
    const Task=document.getElementById("Assigned").innerText;
    const convartedTask=parseInt(Task);
    const hedar=document.getElementById("hedar-text").innerText;
    const convartedHedar=parseInt(hedar)
    const btn=document.getElementById("btn-complis")
    btn.classList.add("bg-blue-100");
    btn.disabled=true;
    if(convartedTask>0){
        document.getElementById("Assigned").innerText=convartedTask-1;
        if(convartedHedar>0){
            document.getElementById("hedar-text").innerText=convartedHedar+1;
            if((convartedTask -1===0)){
                alert('Congratulation you have completed all task')
            }

        }
        else{
            alert('thik nai')

        }
    }
    else{
        alert('thik nai')
    }
    
})