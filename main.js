function finder() {
    var find1 = document.getElementById("wordFinder");
    var find = document.getElementById("wordFinder").value;
    var toFind = document.getElementById("wordToFind").value;
    for (var i = 0; i < find.length; i++) {
        var found = find.indexOf(toFind);
        var foundWord = find.slice(found, (toFind.length + found));
    }
    document.write(foundWord);
}