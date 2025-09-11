// let nameInput = document.getElementById("bookmarkName");
// let urlInput = document.getElementById("bookmarkURL");
// let submitBtn = document.getElementById("submitBtn");
// let tableContent = document.getElementById("tableContent");

// let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

// function saveToLocalStorage() {
//   localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
// }

// function renderBookmarks() {
//   tableContent.innerHTML = "";
//   bookmarks.forEach((bookmark, index) => {
//     tableContent.innerHTML += `
//       <tr>
//         <td>${index + 1}</td>
//         <td>${bookmark.name}</td>
//         <td>
//           <a href="${bookmark.url}" target="_blank" class="btn btn-success">
//             <i class="fa-solid fa-eye pe-2"></i>Visit
//           </a>
//         </td>
//         <td>
//           <button class="btn btn-danger pe-2" onclick="deleteBookmark(${index})">
//             <i class="fa-solid fa-trash-can"></i> Delete
//           </button>
//         </td>
//       </tr>
//     `;
//   });
// }

// function isValidURL(url) {
//   const pattern = /^(https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\/\S*)?$/;
//   return pattern.test(url);
// }

// function validateInputs() {
//   let isValid = true;

//   if (nameInput.value.trim() === "") {
//     nameInput.classList.add("is-invalid");
//     isValid = false;
//   } else {
//     nameInput.classList.remove("is-invalid");
//     nameInput.classList.add("is-valid");
//   }

//   if (!isValidURL(urlInput.value.trim())) {
//     urlInput.classList.add("is-invalid");
//     isValid = false;
//   } else {
//     urlInput.classList.remove("is-invalid");
//     urlInput.classList.add("is-valid");
//   }

//   return isValid;
// }

// function addBookmark() {
//   if (!validateInputs()) return;

//   let name = nameInput.value.trim();
//   let url = urlInput.value.trim();

//   if (!url.startsWith("http://") && !url.startsWith("https://")) {
//     url = "https://" + url;
//   }

//   bookmarks.push({ name, url });
//   saveToLocalStorage();
//   renderBookmarks();
//   clearForm();
// }

// function clearForm() {
//   nameInput.value = "";
//   urlInput.value = "";
//   nameInput.classList.remove("is-valid");
//   urlInput.classList.remove("is-valid");
// }

// function deleteBookmark(index) {
//   bookmarks.splice(index, 1);
//   saveToLocalStorage();
//   renderBookmarks();
// }

// submitBtn.addEventListener("click", addBookmark);
// renderBookmarks();





// let nameInput = document.getElementById("name");
// let urlInput = document.getElementById("url");
// let nameIcon = document.getElementById("nameIcon");
// let urlIcon = document.getElementById("urlIcon");

// // لما المستخدم يكتب في خانة الاسم
// nameInput.addEventListener("input", function () {
//   let name = nameInput.value.trim();

//   if (name.length >= 3) {
//     nameIcon.textContent = "✅";
//     nameIcon.className = "icon valid";
//   } else {
//     nameIcon.textContent = "❌";
//     nameIcon.className = "icon invalid";
//   }
// });

// // لما المستخدم يكتب في خانة الرابط
// urlInput.addEventListener("input", function () {
//   let url = urlInput.value.trim();

//   if (url.includes(".")) {
//     urlIcon.textContent = "✅";
//     urlIcon.className = "icon valid";
//   } else {
//     urlIcon.textContent = "❌";
//     urlIcon.className = "icon invalid";
//   }
// });




let nameInput = document.getElementById("bookmarkName");
let urlInput = document.getElementById("bookmarkURL");
let submitBtn = document.getElementById("submitBtn");
let tableContent = document.getElementById("tableContent");

let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

function saveToLocalStorage() {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function renderBookmarks() {
  tableContent.innerHTML = "";
  bookmarks.forEach((bookmark, index) => {
    tableContent.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${bookmark.name}</td>
        <td>
          <a href="${bookmark.url}" target="_blank" class="btn btn-success">
            <i class="fa-solid fa-eye pe-2"></i>Visit
          </a>
        </td>
        <td>
          <button class="btn btn-danger pe-2" onclick="deleteBookmark(${index})">
            <i class="fa-solid fa-trash-can"></i> Delete
          </button>
        </td>
      </tr>
    `;
  });
}

function isValidURL(url) {
  const pattern = /^(https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\/\S*)?$/;
  return pattern.test(url);
}

function validateInputs() {
  let isValid = true;

  if (nameInput.value.trim().length < 3) {
    nameInput.classList.add("is-invalid");
    isValid = false;
  } else {
    nameInput.classList.remove("is-invalid");
    nameInput.classList.add("is-valid");
  }

  if (!isValidURL(urlInput.value.trim())) {
    urlInput.classList.add("is-invalid");
    isValid = false;
  } else {
    urlInput.classList.remove("is-invalid");
    urlInput.classList.add("is-valid");
  }

  return isValid;
}

function addBookmark() {
  if (!validateInputs()) return;

  let name = nameInput.value.trim();
  let url = urlInput.value.trim();

  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }

  bookmarks.push({ name, url });
  saveToLocalStorage();
  renderBookmarks();
  clearForm();
}

function clearForm() {
  nameInput.value = "";
  urlInput.value = "";
  nameInput.classList.remove("is-valid");
  urlInput.classList.remove("is-valid");
}

function deleteBookmark(index) {
  bookmarks.splice(index, 1);
  saveToLocalStorage();
  renderBookmarks();
}

submitBtn.addEventListener("click", addBookmark);
renderBookmarks();
