function hslToPastel(h) {
  return `hsl(${h}, 80%, 75%)`;
}

let hue = 0;

document.addEventListener("mousemove", function (e) {
  const sparklesPerMove = 5;
  for (let i = 0; i < sparklesPerMove; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";

    const angle = Math.random() * 2 * Math.PI;
    const radius = Math.random() * 15;

    const offsetX = Math.cos(angle) * radius;
    const offsetY = Math.sin(angle) * radius;

    sparkle.style.left = e.pageX + offsetX + "px";
    sparkle.style.top = e.pageY + offsetY + "px";

    const pastelColor = hslToPastel((hue + i * 30) % 360);
    sparkle.style.background = pastelColor;
    sparkle.style.boxShadow = `0 0 12px ${pastelColor}`;

    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1200);
  }

  hue = (hue + 7) % 360;
});
