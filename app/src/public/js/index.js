"use strict";

const discription = document.querySelector("#discription"),
  createBtn = document.querySelector("#createBtn"),
  updateBtn = document.querySelector("#updateBtn"),
  deleteBtn = document.querySelector("#deleteBtn");

createBtn.addEventListener("click", create);
updateBtn.addEventListener("click", update);
deleteBtn.addEventListener("click", todoDelete);

const dis = discription;

function create() {
  const req = {
    dis: dis.value,
  };

  fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => console.error("요청 중 에러 발생"));
}

function update() {
  const req = {
    dis: dis.value,
  };
  console.log("수정");

  fetch("/", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => console.error("요청 중 에러 발생"));
}

function todoDelete() {
  const req = { dis: dis.value };
  console.log("삭제");

  fetch("/", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => console.error("요청 중 에러 발생"));
}
