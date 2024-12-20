{
  const createXmasTree = (height, ornament) => {
    let content = "";
    let ocurrences = (height - 1) * 2;
    for (let i = 0; i < height; i++) {
      ocurrences = (height - i - 1) * 2;
      content += "_".repeat(ocurrences / 2);
      content += `${ornament}`.repeat(height * 2 - 1 - ocurrences);
      content += "_".repeat(ocurrences / 2) + "\n";
    }
      content +=
          "_".repeat(height - 1) +
          `${ornament}` +
          "_".repeat(height - 1) +
          "\n" +
          "_".repeat(height - 1) +
          `${ornament}` +
          "_".repeat(height - 1);
    return content;
  };

  const tree = createXmasTree(5, "*");
  console.log(tree);
  /*
    ____*____
    ___***___
    __*****__
    _*******_
    *********
    ____#____
    ____#____
    */

  const tree2 = createXmasTree(3, "+");
  console.log(tree2);
  /*
    __+__
    _+++_
    +++++
    __#__
    __#__
    */

  const tree3 = createXmasTree(6, "@");
  console.log(tree3);
  /*
    _____@_____
    ____@@@____
    ___@@@@@___
    __@@@@@@@__
    _@@@@@@@@@_
    @@@@@@@@@@@
    _____#_____
    _____#_____
    */
}
