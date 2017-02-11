//onclick listeners
"use strict";
(function () {



    //bring the onclick listeners into the scripot
    var checkbutton = document.getElementById("checkbutton");
    checkbutton.addEventListener("click", checkEntirePuzzle);

    var checkboxes = document.getElementById("checkboxes");
    checkboxes.addEventListener("click", checkBoxes);


    //define the grid
    var myArray = new Array(6);
    for (var i = 0; i < myArray.length; i++) {
        myArray[i] = new Array(6);
    }

    //manually place the objects into the array at their exact points
    myArray[0][0] = "red";
    myArray[0][1] = "gray";
    myArray[0][2] = "blue";
    myArray[0][3] = "blue";
    myArray[0][4] = "gray";
    myArray[0][5] = "gray";

    myArray[1][0] = "gray";
    myArray[1][1] = "gray";
    myArray[1][2] = "blue";
    myArray[1][3] = "blue";
    myArray[1][4] = "gray";
    myArray[1][5] = "red";

    myArray[2][0] = "gray";
    myArray[2][1] = "gray";
    myArray[2][2] = "gray";
    myArray[2][3] = "gray";
    myArray[2][4] = "gray";
    myArray[2][5] = "gray";

    myArray[3][0] = "gray";
    myArray[3][1] = "gray";
    myArray[3][2] = "gray";
    myArray[3][3] = "gray";
    myArray[3][4] = "gray";
    myArray[3][5] = "gray";

    myArray[4][0] = "gray";
    myArray[4][1] = "red";
    myArray[4][2] = "gray";
    myArray[4][3] = "gray";
    myArray[4][4] = "gray";
    myArray[4][5] = "blue";

    myArray[5][0] = "gray";
    myArray[5][1] = "gray";
    myArray[5][2] = "gray";
    myArray[5][3] = "gray";
    myArray[5][4] = "gray";
    myArray[5][5] = "gray";


//this next code is the correct answers of the array
    var myCorrectArray = new Array(6);
    for (var i = 0; i < myCorrectArray.length; i++) {
        myCorrectArray[i] = new Array(6);
    }

    myCorrectArray[0][0] = "red";
    myCorrectArray[0][1] = "red";
    myCorrectArray[0][2] = "blue";
    myCorrectArray[0][3] = "blue";
    myCorrectArray[0][4] = "red";
    myCorrectArray[0][5] = "blue";

    myCorrectArray[1][0] = "blue";
    myCorrectArray[1][1] = "red";
    myCorrectArray[1][2] = "blue";
    myCorrectArray[1][3] = "blue";
    myCorrectArray[1][4] = "red";
    myCorrectArray[1][5] = "red";

    myCorrectArray[2][0] = "red";
    myCorrectArray[2][1] = "blue";
    myCorrectArray[2][2] = "red";
    myCorrectArray[2][3] = "red";
    myCorrectArray[2][4] = "blue";
    myCorrectArray[2][5] = "blue";

    myCorrectArray[3][0] = "red";
    myCorrectArray[3][1] = "blue";
    myCorrectArray[3][2] = "blue";
    myCorrectArray[3][3] = "red";
    myCorrectArray[3][4] = "blue";
    myCorrectArray[3][5] = "red";

    myCorrectArray[4][0] = "blue";
    myCorrectArray[4][1] = "red";
    myCorrectArray[4][2] = "red";
    myCorrectArray[4][3] = "blue";
    myCorrectArray[4][4] = "red";
    myCorrectArray[4][5] = "blue";

    myCorrectArray[5][0] = "blue";
    myCorrectArray[5][1] = "blue";
    myCorrectArray[5][2] = "red";
    myCorrectArray[5][3] = "red";
    myCorrectArray[5][4] = "blue";
    myCorrectArray[5][5] = "red";


//write the objects onto the screen and put an onclick listener on each of those objects

    function makeTable(array) {
        var body = document.getElementsByClass("body")[0];
        var table = document.createElement('table');

        for (var i = 0; i < array.length; i++) {
            var row = document.createElement('tr');
            for (var j = 0; j < array[i].length; j++) {
                var cell = document.createElement('td');
                cell.textContent = array[i][j];
                cell.id = i + "" + j;
                cell.addEventListener("click", function () {

                    if (this.innerHTML != " ") {
                        if (this.style.backgroundColor == "red") {
                            this.style.backgroundColor = "blue";
                        }
                        else if (this.style.backgroundColor == "blue") {
                            this.style.backgroundColor = "gray";
                        }
                        else if (this.style.backgroundColor == "gray") {
                            this.style.backgroundColor = "red";
                        }
                        if (document.getElementById("checkboxes").checked) {
                            checkBoxes();
                        }
                    }

                });

                row.appendChild(cell);

                if (cell.innerText == "red") {
                    cell.setAttribute("class", "static");
                    cell.style.backgroundColor = "red";
                    cell.innerHTML = " ";
                } else if (cell.innerText == "blue") {
                    cell.setAttribute("class", "static");
                    cell.style.backgroundColor = "blue";
                    cell.innerHTML = " ";
                } else if (cell.innerText == "gray") {
                    cell.setAttribute("class", "fluid");
                    cell.style.backgroundColor = "gray";
                    cell.innerText = "";
                }
            }
            table.appendChild(row);
        }
        body.appendChild(table);
    }

    makeTable(myArray);





    function checkEntirePuzzle() {
        var check = 0;
        var wrong = 0;
        var cell = document.getElementsByTagName("td");
        for (var i = 0; i < myCorrectArray.length; i++) {
            for (var j = 0; j < myCorrectArray[i].length; j++) {
                for (var k = 0; k < cell.length; k++) {

                    if (cell[k].id == i + "" + j) {
                        if (cell[k].style.backgroundColor != myCorrectArray[i][j]) {
                            check -= 1;
                        } else {
                            check += 1;
                        }
                        if (check == 36) {
                            wrong = 2;
                            alert("the puzzle is complete");
                        }
                        else if (check < 36) {
                            if (cell[k].style.backgroundColor != "gray") {
                                if (cell[k].style.backgroundColor != myCorrectArray[i][j]) {
                                    wrong = 1;
                                }
                            }
                        }
                    }
                }
            }
        }
        if (wrong == 0) {
            alert("youre doing alright!");
        }
        if (wrong == 1) {
            alert("somethings not so good");
        }
        console.log(check);
    }


    function checkBoxes() {
        var cell = document.getElementsByTagName("td");
        for (var i = 0; i < myCorrectArray.length; i++) {

            for (var j = 0; j < myCorrectArray[i].length; j++) {

                for (var k = 0; k < cell.length; k++) {

                    if (cell[k].id == i + "" + j) {
                        if (cell[k].style.backgroundColor != myCorrectArray[i][j]) {
                            if (cell[k].style.backgroundColor != "gray") {
                                cell[k].style.border = "3px solid white ";
                            }
                            else {
                                cell[k].style.border = "";
                            }
                        }
                        else {
                            if (cell[k].className != 'static') {
                                cell[k].style.border = "";
                            }
                        }
                    }
                }
            }
        }
    }

})();

