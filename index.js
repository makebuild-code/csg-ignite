(async function () {
  const files = [
    'https://makebuild-code.github.io/csg-ignite/modal.js',
    'https://makebuild-code.github.io/csg-ignite/hide_toolkit.js',
    'https://makebuild-code.github.io/csg-ignite/accordions.js',
  ];

  for (const url of files) {
    const res = await fetch(url);
    const code = await res.text();
    eval(code);
  }
})();
