function addTask() {
      let taskInput = document.getElementById("taskInput");
      let taskText = taskInput.value.trim();

      if (taskText === "") {
        alert("Please enter a task.");
        return;
      }

      const taskList = document.getElementById("taskList");

      const li = document.createElement("li");
      li.className = "task-item";
      li.textContent = taskText;

      // Toggle "done" class on click
      li.addEventListener("click", function () {
        li.classList.toggle("done");
      });

      // Stop propagation for delete button click
      let deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-btn";
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", function (e) {
        e.stopPropagation(); // prevent marking as done
        li.remove();
      });

      li.appendChild(deleteBtn);
      taskList.appendChild(li);
      taskInput.value = "";
    }