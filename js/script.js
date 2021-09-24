let box = document.querySelectorAll('.box');
console.log(box);

for (let index = 0; index < box.length; index++) {
  box[index].addEventListener('click', (event) => {
    console.log(event.target);
    let taskPrompt = prompt('Digite a tarefa');
    let task = document.createElement('p');
    task.innerText = taskPrompt;
    box[index].append(task);
  });
}