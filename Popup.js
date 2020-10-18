



//     <div class="container">
//     <div class="row">
//       <div class="col-12">


//         <h1>Dynamically Add & Remove Items From List Using JavaScript</h1>
//         <hr>


//         <div class="input-group">
//           <input type="text" class="form-control" id="candidate" required>
//           <div class="input-group-append">
//             <button  id="btn btn-add" type="button">Add Item</button>
//             <button  id="btn btn-remove" type="button">Remove Item</button>
//           </div>
//         </div>

// <!-- ------------------------------------ -->
//         <ul id="dynamic-list">


//         </ul>

//       </div>
//     </div>
//   </div>








// This is the js add / remove

document.getElementById("btn btn-add").addEventListener('click', addItem);
document.getElementById("btn btn-remove").addEventListener('click', removeItem);



function addItem() {


    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var li = document.createElement("li");
    li.setAttribute('id', candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(li);
}


 function removeItem() {
     var ul = document.getElementById("dynamic-list");
     var candidate = document.getElementById("candidate");
    var item = document.getElementById(candidate.value);
     ul.removeChild(item);
 }