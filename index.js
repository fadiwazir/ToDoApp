function addTask() {
  const inputText = document.getElementById("input-text").value;
  const selectContainer = document.querySelector('ul')
  selectContainer.innerHTML += `<li>${inputText}</li>`
}


