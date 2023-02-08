window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("btn");
  const output = document.getElementById("output");

  function changeColor() {
    const colorValue = changeRGBColor();
    root.style.backgroundColor = colorValue;
    output.textContent = colorValue;
    output.style.color = colorValue;
  }
  changeColor();
  btn.addEventListener("click", changeColor);
  output.addEventListener("click", () => {
    let text = output.textContent;
    navigator.clipboard.writeText(text);
    output.textContent = "COPIED";

    setTimeout(() => {
      output.textContent = text;
    }, 1000);
  });
}

function changeRGBColor() {
  let R = Math.floor(Math.random() * 255);
  let G = Math.floor(Math.random() * 255);
  let B = Math.floor(Math.random() * 255);
  return `#${R.toString(16)}${G.toString(16)}${B.toString(16)}`;
}
