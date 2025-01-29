function Addelement() {
   let ol = document.getElementById("list");
   let input = document.getElementById("t");
   let inputvalue = input.value.trim();
   let li = ol.getElementsByTagName("li");
   let found = false;
   for (let i = 0; i < li.length; i++) {
      if (inputvalue === li[i].textContent) {
         found = true;
         break;
      }
   }
   if (inputvalue !== "" && !found) {
      let newLi = document.createElement("li");
      newLi.textContent = inputvalue;
      ol.appendChild(newLi);
      input.value = "";
   } else {
      alert("Please Enter a Valid Item or Item Already Exists");
   }
}
function deleteelement() {
   let ol = document.getElementById("list");
   let input = document.getElementById("t");
   let inputvalue = input.value.trim();
   let found = false;
   if (inputvalue !== "") {
      let items = ol.getElementsByTagName("li")
      let found = false;
      for (let i = 0; i < items.length; i++) {
         if (items[i].textContent === inputvalue) {
            ol.removeChild(items[i]);
            found = true;
            break;
         }
      }
      if (!found) {
         alert("Element Not Found")
      }
      inputvalue = "";
   } else {
      alert("Please Enter An Elemnt to Delete")
   }
}
