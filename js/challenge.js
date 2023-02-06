let intervalID  
let numberOfLikes = 0

function increment() {
    let counter = document.getElementById("counter")
let num = parseInt(counter.innerText)
 counter.innerText = num+1
}

function startCounter() {
   intervalID = setInterval(increment, 1000)
}
startCounter()
 
let minus = document.getElementById("minus")

 minus.addEventListener('click', function(event){
    let num = parseInt(counter.innerText)
    counter.innerText = num-1

    
})

 let plus = document.getElementById("plus")

 plus.addEventListener('click', function(event){
    let num = parseInt(counter.innerText)
    counter.innerText = num+1 
    
 })

 let pause = document.getElementById("pause")

 pause.addEventListener('click', handleTimer); 
 

 function pauseTimer() {
   console.log(pauseTimer)
   clearInterval(intervalID)
   plus.disabled = true
   minus.disabled = true
   heart.disabled = true
   pause.innerText = 'resume'

   }
function handleTimer() {
   if (pause.innerText === 'pause') return (pauseTimer())
   if (pause.innerText === 'resume') return (resumeTimer())

   
   
}

   function resumeTimer() {
      startCounter()
      minus.disabled = false
      plus.disabled = false
      heart.disabled = false
      pause.innerText = 'pause'
   }

 let heart = document.getElementById("heart")
 heart.addEventListener('click', likeNumber)
   
 function likeNumber() {
let counter = document.getElementById("counter") 
   let li = document.createElement("li")
   li.innerText = ` ${counter.innerText} has been liked ${numberOfLikes+1} times `
   document.getElementsByClassName("likes")[0].appendChild(li)
 }

 
 const init = () => {
   const inputForm = document.querySelector('form');
   inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
      let toDo = event.target.children[0].value
      console.log(event.target.children[0].value)
   
      let list = document.getElementById("list")

      let p = document.createElement("p")
      p.innerHTML = toDo
      
      list.append(p)
      

 })
}
 document.addEventListener('DOMContentLoaded', init)

