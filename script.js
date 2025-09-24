function copyContract() {
  const contract = document.getElementById("contract").innerText;
  navigator.clipboard.writeText(contract).then(() => {
    alert("Contract copied!");
  });
}

// auto-update year in footer
document.getElementById("year").innerText = new Date().getFullYear();