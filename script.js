document.getElementById("start-btn").addEventListener("click", () => {
  document.getElementById("start-btn").style.display = "none"; // Hide button after click
  startHacking();
});

function startHacking() {
  const lines = [
    "Initializing Hacking",
    "Reading your files",
    "Password files detected",
    "Sending all passwords and personal files to krishna_nautiyal",
    "Cleaning up"
  ];

  const outputDiv = document.getElementById("output");
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress-text");

  let dotCount = 0;
  let cycle = 0;
  let currentLine = 0;

  function hecker() {
    if (currentLine >= lines.length) {
      showProgressBar();
      return;
    }

    const line = document.createElement("p");
    const span = document.createElement("span");
    line.textContent = lines[currentLine];
    line.appendChild(span);
    outputDiv.appendChild(line);

    let interval = setInterval(() => {
      dotCount = (dotCount + 1) % 4;
      span.textContent = ". ".repeat(dotCount);

      if (dotCount === 0) cycle++;

      if (cycle === 3) {
        clearInterval(interval);
        dotCount = 0;
        cycle = 0;
        currentLine++;
        setTimeout(hecker, 100);
      }
    }, 100);
  }

  function showProgressBar() {
    document.getElementById("progress-container").style.display = "block";
    let percent = 0;

    const progressInterval = setInterval(() => {
      percent++;
      progressBar.style.width = percent + "%";
      progressText.textContent = percent + "%";

      if (percent >= 100) {
        clearInterval(progressInterval);
        setTimeout(() => {
          document.body.innerHTML = "";

          const notice = document.createElement("h1");
          const p = document.createElement("p");
          p.textContent = "(krishna__nautiyal has access to your system)"
          notice.textContent = "Your System is HACKED!!";
          notice.style.color = "#00FF00";
          notice.style.textAlign = "center";
          notice.style.marginTop = "30vh";
          notice.style.fontFamily = "monospace";
          notice.style.fontSize = "3rem";
          p.style.fontSize = "1rem";
          notice.appendChild(p);
          document.body.appendChild(notice);
        }, 1000);
      }
    }, 40);
  }

  hecker();
}
