"use strict";

const discription = document.querySelector("#discription"),
  createBtn = document.querySelector("#createBtn"),
  updateBtn = document.querySelector("#updateBtn"),
  deleteBtn = document.querySelector("#deleteBtn");

createBtn.addEventListener("click", create);
updateBtn.addEventListener("click", update);
deleteBtn.addEventListener("click", todoDelete);

function create() {
  const req = {
    dis: discription.value,
  };
}
function update() {
  const req = {};
  console.log("수정");
}

function todoDelete() {
  const req = {};
  console.log("삭제");
}
