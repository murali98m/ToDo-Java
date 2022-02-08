var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("butt1")[0];
var add = document.getElementById("butt2")[0];


btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
  }
 
  

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.querySelector('.butt').onclick = function(){
    if(document.querySelector('.boxdisplay input').value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        
        document.querySelector('#tasks').innerHTML += `
            <div class="dynamic-block">
                <span id="taskname"><h3>
                    ${document.querySelector('.boxdisplay input').value}</h3>
                </span>
                <hr>
                <div id="task1"></div>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
                <button class="add1">
                    <i class="fas fa-plus-circle" ></i>
                </button>
            </div>
        `;
       
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        var box = document.querySelectorAll(".add1")[0];

        box.onclick = function() {
        modal.style.display = "block";
        }
        document.querySelector('.butt').onclick = function(){
            if(document.querySelector('.boxdisplay input').value.length == 0){
                alert("Please Enter a Task")
            }
            else{
                
                document.querySelector('#task1').innerHTML += `<ul id="dynamic-box">
                <li class="item"> <input type="checkbox"  id="packers"  value="1"/>
                 <p>${document.querySelector('.boxdisplay input').value}</p><br>
                 <span class="delete1"><i class="fas fa-times"></i></span></li>
                 </ul>`;
               
                var current_tasks = document.querySelectorAll(".delete1");
                for(var i=0; i<current_tasks.length; i++){
                    current_tasks[i].onclick = function(){
                        this.parentNode.remove();
                    }
                }
        }
        }
     }
     
}


