document.querySelectorAll("code").forEach((example) => {
  if (example.classList.contains("html")) {
    example.classList.add("language-html");
  } else if (example.classList.contains("scss") || example.classList.contains("css")) {
    example.classList.add("language-scss");
  } else {
    example.classList.add("language-javascript");
  }
  hljs.highlightElement(example);
});
