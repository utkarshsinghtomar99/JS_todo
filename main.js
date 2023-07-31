let userForm = document.getElementById('entering-details');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let numberInput = document.getElementById('number');
let relationsInput = document.getElementById('selecting-relations');
let puttingValues = document.getElementById('putting-values');


const saveTodo = (e) => {
  // 
  e.preventDefault();
  // 
  let newLi = document.createElement('li');
  // 
  let listName = nameInput.value;
  let listEmail = emailInput.value;
  let listNumber = numberInput.value;
  let listRelation = relationsInput.value;
  // 
  newLi.innerText = `Name: '${listName}', 
                     Email: '${listEmail}', 
                     Phone: '${listNumber}',
                     Relation: '${listRelation}'`;
  // 
  newLi.className = "list-group-item py-4";
  //
  let delBtn = document.createElement('button');
  delBtn.className = "btn btn-sm btn-danger float-end rounded-pill";
  delBtn.innerText = "Delete";
  let callBtn = document.createElement('a');
  callBtn.className = "btn btn-sm me-2 btn-success float-end rounded-pill";
  callBtn.setAttribute('href', `tel:+91${listNumber}`);
  callBtn.innerText = "Call";
  let waBtn = document.createElement('a');
  waBtn.className = "btn btn-sm me-2 float-end rounded-pill";
  waBtn.setAttribute('style', 'background-color: rgb(0, 255, 64)');
  waBtn.setAttribute('data-bs-theme', 'light');
  // waBtn.setAttribute('href', `url:+91${listNumber}`);
  waBtn.innerText = "Whatsapp";
  // 
  newLi.appendChild(delBtn);
  newLi.appendChild(callBtn);
  newLi.appendChild(waBtn);
  // 
  puttingValues.appendChild(newLi);
  // 
  userForm.reset();
  // 
}

userForm.addEventListener('submit', saveTodo);


puttingValues.addEventListener('click', (e) => {
  // e.preventDefault();
  if (e.target.className.includes("btn-danger")) {
    let li = e.target.parentElement;
    if (window.confirm("Are You Sure you want to delete all details related to this contact?")) {
      puttingValues.removeChild(li);
    }
  }
  else if (e.target.className.includes('btn-success')) {
    let callWindow = window.open(`tel:+91${numberInput.value}`);
    if (callWindow) {
      callWindow.close();
    }
  }
  else if (e.target.innerText.includes('Whatsapp')) {
    // let waWindow = window.open(`http://wa.me/${numberInput.value}`);
    const websiteUrl = `http://wa.me/${numberInput.value}`;

    // Open the website in a new tab or window
    window.open(websiteUrl, '_blank');
  }
})

