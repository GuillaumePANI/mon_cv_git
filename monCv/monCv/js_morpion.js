var joueur = true;
var text = "X"
var count = 0

function replaceCellContent(id) {
    var board = document.getElementsByTagName("td");
    var cell = document.getElementById(id);
    $('.anim').fadeOut(100)
    if (joueur != true) { text = "O"; }
    else { text = "X"; }
    console.log(cell);
    if (cell.innerHTML == "&nbsp;") {
        cell.innerHTML = text;
       
        console.log(joueur);
        console.log(count);
        console.log(board);

        if (
            //Conditions lignes
            (board[0].innerHTML != "&nbsp;" && board[0].outerText == board[1].outerText && board[0].outerText == board[2].outerText) ||
            (board[3].innerHTML != "&nbsp;" && board[3].outerText == board[4].outerText && board[3].outerText == board[5].outerText) ||
            (board[6].innerHTML != "&nbsp;" && board[6].outerText == board[7].outerText && board[6].outerText == board[8].outerText) ||
            //conditions colonnes
            (board[0].innerHTML != "&nbsp;" && board[0].outerText == board[3].outerText && board[0].outerText == board[6].outerText) ||
            (board[1].innerHTML != "&nbsp;" && board[1].outerText == board[4].outerText && board[1].outerText == board[7].outerText) ||
            (board[2].innerHTML != "&nbsp;" && board[2].outerText == board[5].outerText && board[2].outerText == board[8].outerText) ||
            //conditions diagonales
            (board[0].innerHTML != "&nbsp;" && board[0].outerText == board[4].outerText && board[0].outerText == board[8].outerText) ||
            (board[2].innerHTML != "&nbsp;" && board[2].outerText == board[4].outerText && board[2].outerText == board[6].outerText)) {


            if (joueur && count < 8) { $.notify({ message: 'Le joueur 1 a gagné !' }); }
            else if (!joueur && count < 8) { $.notify({ message: 'Le joueur 2 a gagné !' }, { type: 'danger' }); }
        }
        if (count == 8) {
            $.notify({ message: 'Le match était vraiment Nul !' })
        }


        cell.className = 'filled';
        joueur = !joueur;
        count++;
        console.log(count);
    }
    
};
function clearBoard() {
    var board = document.getElementsByTagName("td");
    for (var i = 0; i < board.length; i++) {
        board[i].innerHTML = "&nbsp;";
        count = 0;
        joueur = true;
        board[i].className = 'empty';
        $('.anim').fadeIn(3000)
    }
  
}
    $(document).ready(function () {
        $('.anim').fadeIn(1000);
    });



