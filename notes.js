

const easymde = new EasyMDE({
  element: document.getElementById('my-text-area'),
});

function clearNotes() {
    easymde.value("");
}

function loadNotes() {
  const saved = localStorage.getItem("saveNotes") || "";
  easymde.value(saved);
}

function saveNotes() {
  localStorage.setItem("saveNotes", easymde.value());
  console.log("Saved:", easymde.value());


      const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    document.getElementById("saveDate").innerHTML = "Saved at: " + formattedTime;

}




document.getElementById("saveBtn").addEventListener("click", saveNotes);
document.getElementById("clearBtn").addEventListener("click", clearNotes);


window.onload = loadNotes;
