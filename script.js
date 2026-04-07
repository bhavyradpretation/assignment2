async function loadData() {
  const display = document.getElementById("users");
  const btn = document.querySelector(".load_button");
  btn.disabled = true;
  display.textContent = "Loading users...";
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error("something went wrong");
    const data = await res.json();
    const fragment = document.createDocumentFragment();
    data.forEach((user) => {
      const p = document.createElement("p");
      p.textContent = user.name;
      fragment.appendChild(p);
    });

    display.textContent = "";
    display.appendChild(fragment);
  } catch (err) {
    display.innerHTML = `<span style="color:red;">Error: ${err.message}</span>`;
  } finally {
    btn.disabled = false;
  }
}
