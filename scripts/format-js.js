document.querySelectorAll("code").forEach((example) => {
  example.classList.add("language-javascript");
  hljs.highlightElement(example);
});
