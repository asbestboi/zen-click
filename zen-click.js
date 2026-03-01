(() => {
  let idx = 0;
  const words = [
    "Beautiful","is","better","than","ugly.",
    "Explicit","is","better","than","implicit.",
    "Simple","is","better","than","complex.",
    "Complex","is","better","than","complicated.",
    "Flat","is","better","than","nested.",
    "Sparse","is","better","than","dense.",
    "Readability","counts.","Special","cases",
    "aren't","special","enough","to","break","the",
    "rules.","Although","practicality","beats",
    "purity.","Errors","should","never","pass",
    "silently.","Unless","explicitly","silenced.",
    "In","the","face","of","ambiguity,","refuse",
    "the","temptation","to","guess.","There",
    "should","be","one--","and","preferably",
    "only","one","--obvious","way","to","do","it.",
    "Although","that","way","may","not","be",
    "obvious","at","first","unless","you're","Dutch.",
    "Now","is","better","than","never.","Although",
    "never","is","often","better","than","*right*",
    "now.","If","the","implementation","is","hard",
    "to","explain,","it's","a","bad","idea.","If",
    "the","implementation","is","easy","to","explain,",
    "it","may","be","a","good","idea.","Namespaces",
    "are","one","honking","great","idea","--",
    "let's","do","more","of","those!"
  ];

  function nextWord() {
    const w = words[idx];
    idx = (idx + 1) % words.length;
    return w;
  }

  document.addEventListener("click", (e) => {
    const el = document.createElement("span");
    el.className = "zen-word";
    el.textContent = nextWord();

    const x = e.pageX;
    const y = e.pageY;

    el.style.left = `${x}px`;
    el.style.top = `${y - 20}px`;

    document.body.appendChild(el);

    el.animate(
      [
        { transform: "translateY(0px)", opacity: 1 },
        { transform: "translateY(-160px)", opacity: 0 }
      ],
      { duration: 1500, easing: "ease-out" }
    );

        const anim = el.animate(
      [
        { transform: "translateY(0px)", opacity: 1 },
        { transform: "translateY(-160px)", opacity: 0 }
      ],
      {
        duration: 1500,
        easing: "ease-out",
        fill: "forwards"
      }
    );

    anim.onfinish = () => el.remove();
  });
})();