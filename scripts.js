const promptsFetch = fetch("prompts.json").then((content) => {
  return content.json();
});

promptsFetch.then((content) => {
  let keyArray = Object.keys(content);
  let promptKey = keyArray[~~(Math.random() * keyArray.length)];
  let prompt = content[promptKey];
  let promptDiv = document.createElement("div");
  promptDiv.id = "activity";
  promptDiv.innerHTML = prompt;
  document.querySelector("body").appendChild(promptDiv);
});
