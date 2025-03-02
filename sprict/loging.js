document.getElementById("sectionss").addEventListener("click",function(event){
    event.preventDefault();
    window.location.href="main.html"
})

const color=["ligthbule","yellow","red","green","tometo","pink","purple","blue"]

document.getElementById("thime").addEventListener('click',function(event){

    event.preventDefault();
    const randomColor=color[Math.floor(Math.random()*color.length)];
    
    
    
        document.body.style.backgroundColor=randomColor;
     
})

const current=new Date().toDateString();
console.log(current);
document.getElementById("update date").innerText=current;
