words = $("div.card.list-show table.tabular tbody tr");
txt = "";
for (var i=0; i<words.length; i++) {
    word = words[i].children;
    vraag = word[1].innerText.trim();
    antwoord = word[2].innerText.trim();
    txt += '"' + vraag + '","' + antwoord + '"\n';
}
console.log(txt);

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}


// Card heading
heading = $("div.card.list-show div.card-heading h2")[0].innerText.trim();

download(heading + ".txt", txt);
