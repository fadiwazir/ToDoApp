const taskArr = []
function addTask() {
  let inputText = document.getElementById("input-text");
  const selectContainer = document.querySelector('ul');

  selectContainer.hidden = false
  selectContainer.innerHTML += `
  <div class="item">
    <li>${inputText.value}</li>
    <button class="delete-btn">Delete</button>
  </div>`
  taskArr.push(inputText.value)
  inputText.value = '';

}

function enterBtn() {
  inputText.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      console.log('is enter')
    } else {
      alert('Task Is empty')
    }
  })
}



