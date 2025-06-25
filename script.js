const searchBtn = document.getElementById("searchBtn");
const wordInput = document.getElementById("wordInput");
const result = document.getElementById("result");

searchBtn.addEventListener("click", () => {
  const word = wordInput.value.trim();
  if (!word) {
    result.innerHTML = `<p class="text-red-500">Please enter a word.</p>`;
    return;
  }

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((res) => {
      if (!res.ok) throw new Error("Word not found");
      return res.json();
    })
    .then((data) => {
      const entry = data[0];
      const phonetics = entry.phonetics[0]?.text || "";
      const audio = entry.phonetics[0]?.audio || "";
      const meanings = entry.meanings;

      let html = `
        <h2 class="text-lg font-medium">${entry.word}</h2>
        <p class="text-gray-500">${phonetics}</p>
        ${audio ? `<audio controls class="mt-2"><source src="${audio}" type="audio/mp3" /></audio>` : ""}
      `;

      meanings.forEach((meaning) => {
        html += `
          <div class="pt-3">
            <p class="text-gray-700 font-medium italic">${meaning.partOfSpeech}</p>
            <ul class="list-disc list-inside mt-1 space-y-1 text-gray-700">
              ${meaning.definitions
                .map(
                  (def) =>
                    `<li>
                      ${def.definition}
                      ${def.example ? `<br><span class="text-gray-400">"${def.example}"</span>` : ""}
                    </li>`
                )
                .join("")}
            </ul>
          </div>
        `;
      });

      result.innerHTML = html;
    })
    .catch((err) => {
      result.innerHTML = `<p class="text-red-500">Word not found. Try something else.</p>`;
    });
});
