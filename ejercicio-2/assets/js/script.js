{
  const createFrame = (names) => {
    const arrayNames = [...names].reduce(
      (a, b) => (a.length > b.length ? a : b),
      names[0]
    );
    let content = content = "*".repeat(arrayNames.length + 4) + "\n";
    names.forEach((element) => {
      content +=
        "* " +
        element +
        " ".repeat(arrayNames.length - element.length + 1) +
        "*" +
        "\n";
    });
    content += "*".repeat(arrayNames.length + 4);
    return content;
  };

  console.log(createFrame(["midu", "madeval", "educalvolpz"]));
  /*
    // Resultado esperado:
          ***************
          * midu        *
          * madeval     *
          * educalvolpz *
          ***************
    */
  console.log(createFrame(["midu"]));
  /*
    // Resultado esperado:
          ********
          * midu *
          ********
    */
  console.log(createFrame(["a", "bb", "ccc"]));
  /*
    // Resultado esperado:
          *******
          * a   *
          * bb  *
          * ccc *
          *******
    */
  console.log(createFrame(["a", "bb", "ccc", "dddd"]));
}
