import { jsonLoader } from "./utils"

function render(data, targetElement) {
  targetElement.innerHTML += `
<div class="article">
    <h3>${data.title}</h3>
    <div class="description">
        ${data.description}
    </div>
</div>
`
}

async function main() {
  const artList = document.getElementById("article-list")

  const data = await jsonLoader("/level-02.json")

  for (let i = 0; i < data.length; i++) {
    render(data[i], artList)
  }
}

document.addEventListener("DOMContentLoaded", main)
