'use strict'
let selectRow =null;
let target ="";
// ---------------------delete data----------------------
document.querySelector(".btn").addEventListener('click', (e) =>{
  target = e.target;
  if(target.classList.contains('delete')){
    target.parentElement.parentElement.remove();
  }
})

function clear(){
  document.querySelector(".ajout").value="";
}

// --------------------add-----------------
document.querySelector('.add').addEventListener('click', (e) =>{
  e.preventDefault();
  // get value
  const ajouter = document.querySelector('.ajout').value;
  //validate
    // if(selectedRow == null) {
      const list = document.querySelector(".btn");
      const row = document.createElement("tr");
      row.innerHTML = ` <td>${ajouter}</td>
                        <td>
                        <a href="#" class="edit">Edit</a>
                        <a href="#" class="delete">Delete</a>
                      `;
                        list.appendChild(row);
                        selectRow = null;
})

document.querySelector('.update').addEventListener('click', (e) =>{
  e.preventDefault();
  // get value
  const ajouter = document.querySelector('.ajout').value;
  //validate
    // if(selectedRow == null) {
      const list = document.querySelector(".btn");
      const row = document.createElement("tr");
      row.innerHTML = ` <td>${ajouter}</td>
                        <td>
                        <a href="#" class="edit">Edit</a>
                        <a href="#" class="delete">Delete</a>
                      `;
                        list.appendChild(row);
                        selectRow = null;  
})
// // -----------------------edit-----------------------------------

document.querySelector('.edit').addEventListener('click', (e) => {
  target = e.target;
  if (target.classList.contains('edit')){
    selectedRow = target.parentElement.parentElement;
    document.querySelector('.ajouter').value = selectedRow.children.textcontent;
  }
})




