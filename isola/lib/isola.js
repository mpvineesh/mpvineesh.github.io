$(document).ready(function() {
	
	$('#myModal').on('hidden.bs.modal', function (e) {
		location.reload();
	})


    var squares = '';
    const size = 7;
    for (var i = 0; i < size; i++) {
        squares += "<div class='row'>";
        for (var j = 0; j < size; j++) {
            squares += "<div class='square ' id='sq" + i + "" + j + "'></div>";
        }
        squares += "</div>";
    }
    $(".player1").attr('prev-data', $(".player1").attr('data'));
    var player1 = "<div class='player draggable player1' id='' data='6,3'  prev-data='6,3'></div>";
    var player2 = "<div class='player draggable player2' id='' data='0,3'  prev-data='0,3'></div>";

    $(".game-container").html(squares);
    $("#sq63").html(player1);
    $("#sq03").html(player2);
    $("#player1-pos").html("6,3");
    $("#player2-pos").html("0,3");


    $(".droppable").droppable({
        hoverClass: "drop-hover",
        drop: function(event, ui) {
            var drop_p = $(this).offset();
            var drag_p = ui.draggable.offset();
            var left_end = drop_p.left - drag_p.left + 1;
            var top_end = drop_p.top - drag_p.top + 1;
            ui.draggable.animate({
                top: '+=' + top_end,
                left: '+=' + left_end
            });
        }
    });
    $("#draggable").draggable();
    $(".draggable").draggable({
        containment: ".game-container",
        revert: "invalid",
        cursor: "crosshair"
    });

    //$( ".draggable" ).draggable( "option", "scope", "drop" );
    var droppableOptions = {
        hoverClass: "drop-hover",
        drop: function(event, ui) {
            var drop_p = $(this).offset();
            var drag_p = ui.draggable.offset();
            var left_end = drop_p.left - drag_p.left + 1;
            var top_end = drop_p.top - drag_p.top + 1;
            ui.draggable.animate({
                top: '+=' + top_end,
                left: '+=' + left_end
            });
            var pl2 = $(".player1").attr('data');
            d = pl2.split(",");
            var x = d[0];
            var y = d[1];

            gameState[x][y] = 0;

            var d = $(this).attr("id");
            d = d.split("");
            var x = d[2];
            var y = d[3];
            gameState[x][y] = 1;
            $(".player1").attr('prev-data', pl2);
            $(".player1").attr('data', x + "," + y);

        }
    }
    //Game Code Initialization

    var gameState = Array.from({
        length: 7
    }, () => {
        var row = new Array(7);
        row.fill(0);
        return row;
    });

    gameState[0][3] = 2;
    gameState[6][3] = 1;
    var neighbours = findEmptyNeighbours(6, 3, gameState);
    //console.log(neighbours);	 
    //$(".square").droppable( 'disable' );
    neighbours.forEach(function(el) {
        $("#sq" + el.x + "" + el.y).droppable(droppableOptions).addClass("drop");
    });
	
	var toss= Math.floor((Math.random() * 2) + 1);
	if(toss == 2){
		var nextTurn = robotPlay(gameState, 2);
		gameState = processStep(gameState,nextTurn,$(".player2"),$(".player1"));
	}
	
		
    $("#done").on("click", function() {
        var p2 = $(".player1").attr('data');
        d = p2.split(",");
        var px = d[0];
        var py = d[1];
        restDroppable();
        var neighbours = findEmptyNeighbours(px, py, gameState);
        //console.log(neighbours);	 
        neighbours.forEach(function(el) {
            $("#sq" + el.x + "" + el.y).droppable(droppableOptions).addClass("drop");
        });
        var squaresToDisable = $(".make-disable");
        if ($(".player1").attr('data') == $(".player1").attr('prev-data')) {
            alert('Move your piece first');
            return false;
        }
        if (squaresToDisable.length != 2) {
            alert('Select 2 squares to empty');
            return false;
        } else {
            squaresToDisable.each(function(el) {
                var d = $(this).attr("id");
                d = d.split("");
                var x = d[2];
                var y = d[3];
                gameState[x][y] = -1;
                $(this).removeClass('make-disable').addClass('disabled');
            })
        }
        console.log("game state");
        console.log(gameState);
        var p1 = $(".player2").attr('data');
        d = p1.split(",");
        var x = d[0];
        var y = d[1];
        checkGameStatus(gameState, x, y, 1);
        var nextTurn = robotPlay(gameState, 2);
		gameState = processStep(gameState,nextTurn,$(".player2"),$(".player1"));
        /*var target = "sq" + nextTurn.next.x + "" + nextTurn.next.y;
        var pl2 = $(".player2").attr('data');
        d = pl2.split(",");
        var x = d[0];
        var y = d[1];
        gameState[x][y] = 0;
        var position = $("#" + target).position();
        var top = position.top;
        var left = position.left;
        $(".player2").animate({
            left: left + 'px',
            top: top + 'px'
        });
        var pos1 = "sq" + nextTurn.pos1.x + "" + nextTurn.pos1.y;
        var pos2 = "sq" + nextTurn.pos2.x + "" + nextTurn.pos2.y;
        gameState[nextTurn.next.x][nextTurn.next.y] = 2;
        gameState[nextTurn.pos1.x][nextTurn.pos1.y] = -1;
        gameState[nextTurn.pos2.x][nextTurn.pos2.y] = -1;
        $("#" + pos1).addClass('disabled').removeClass('drop').droppable('destroy');
        $("#" + pos2).addClass('disabled').removeClass('drop').droppable('destroy');

        $(".player2").attr('prev-data', pl2);
        $(".player1").attr('prev-data', $(".player1").attr('data'));
        $(".player2").attr('data', nextTurn.next.x + "," + nextTurn.next.y);
        var p1 = $(".player1").attr('data');
        d = p1.split(",");
        var x = d[0];
        var y = d[1];
        checkGameStatus(gameState, x, y, 2);
*/


    });


    $(".square").on("click", function() {
        var count = $(".make-disable").length;
        if ($(this).hasClass("player")) {
            return false;
        }
        if ($(this).hasClass("make-disable")) {
            $(this).removeClass("make-disable");
            return;
        }
        if (count == 2) {
            return false;
        } else {
            $(this).addClass("make-disable");
        }



    });
})


function processStep(gameState,nextTurn,player1,player2){
		 var target = "sq" + nextTurn.next.x + "" + nextTurn.next.y;
        //var pl2 = $(".player2").attr('data');
        var pl2 = $(player1).attr('data');
        d = pl2.split(",");
        var x = d[0];
        var y = d[1];
        gameState[x][y] = 0;
        var position = $("#" + target).position();
        var top = position.top;
        var left = position.left;
        $(player1).animate({
            left: left + 'px',
            top: top + 'px'
        });
        var pos1 = "sq" + nextTurn.pos1.x + "" + nextTurn.pos1.y;
        var pos2 = "sq" + nextTurn.pos2.x + "" + nextTurn.pos2.y;
        gameState[nextTurn.next.x][nextTurn.next.y] = 2;
        gameState[nextTurn.pos1.x][nextTurn.pos1.y] = -1;
        gameState[nextTurn.pos2.x][nextTurn.pos2.y] = -1;
		if($("#" + pos1).hasClass('drop'))
			$("#" + pos1).addClass('disabled').removeClass('drop').droppable('destroy');
		else	
			$("#" + pos1).addClass('disabled');
       
		if($("#" + pos2).hasClass('drop'))
			$("#" + pos2).addClass('disabled').removeClass('drop').droppable('destroy');
		else	
			$("#" + pos2).addClass('disabled');

        $(player1).attr('prev-data', pl2);
        $(player2).attr('prev-data', $(player2).attr('data'));
        $(player1).attr('data', nextTurn.next.x + "," + nextTurn.next.y);
        var p1 = $(player2).attr('data');
        d = p1.split(",");
        var x = d[0];
        var y = d[1];
        checkGameStatus(gameState, x, y, 2);
		return gameState;

}











function checkGameStatus(state, x, y, player) {
    var neighbours = findEmptyNeighbours(x, y, state);
    if (neighbours.length == 0) {
        //$("#result").html("Player "+player+" Won");
        $("#result-text").html("Player " + player + " Won");
        $('#myModal').modal('show');
    }
}


function restDroppable(state) {
    $(".drop").droppable('destroy');
    $(".drop").removeClass('drop');


}

function isNeighbour(px, py, i, j) {
    if (px == i && py == j)
        return false;
    else if (Math.abs(px - i) <= 1 && Math.abs(py - j) <= 1)
        return true;
    return false;
}

function findRandomSquare(next, pos, state, size) {
    var p = {};
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            if (state[i][j] == 0) {
                if (i != next.x && j != next.y && i != pos.x && j != pos.y) {
                    p = new Position(i, j);
                    break;
                }
            }
        }
    }

    return p;

}

function findEmptyNeighbours(x, y, state) {
    //console.log("xStart:"+xStart+",xEnd:"+xEnd+",yStart:"+yStart+",yEnd:"+yEnd);
    //console.log(state);
    var neighbours = [];
    var xStart = x > 0 ? x - 1 : x;
    var xEnd = x < 6 ? parseInt(x) + 1 : x;
    var yStart = y > 0 ? y - 1 : y;
    var yEnd = y < 6 ? parseInt(y) + 1 : y;
    // console.log("xStart:"+xStart+",xEnd:"+xEnd+",yStart:"+yStart+",yEnd:"+yEnd);
    for (var i = xStart; i <= xEnd; i++) {
        for (var j = yStart; j <= yEnd; j++) {
            //console.log("Error : x="+i+",y="+j + "state:"+state[i][j] )
            try {
                if (i == x && y == j) {
                    continue;
                } else {
                    if (state[i][j] == 0) {
                        neighbours.push(new Position(i, j));
                    }
                }

            } catch (e) {
                console.log("Error : x=" + i + ",y=" + j)
            }
        }
    }
    //console.log(neighbours);
    return neighbours;

}

function chooseNext(nextMoves) {
    var centerPos = nextMoves.filter(function(pos) {
        return pos.x != 6 && pos.y != 6;
    });
    if (centerPos.length == 0) {
        centerPos = nextMoves;
    }
    //console.log(Math.floor(centerPos.length/2));
    var pos = centerPos[Math.floor(centerPos.length / 2)];
    return pos;

}

function Position(x, y) {
    this.x = x;
    this.y = y;
    this.neighboursCount = 0;
    //this.relativeDistance = 0;
}




function robotPlay(initialState, player) {

    var size = 7;
    var oppPlayer = player == 1 ? 2 : 1;
    // Get the position of player
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            if (initialState[i][j] == player) {
                px = i;
                py = j;
            }
            if (initialState[i][j] == oppPlayer) {
                opx = i;
                opy = j;
            }
        }
    }

    //Find possible next moves
    var neighbours = findEmptyNeighbours(px, py, initialState);
    var nextMoves = [];
    var n = [];
    for (var i = 0; i < neighbours.length; i++) {
        n = findEmptyNeighbours(neighbours[i].x, neighbours[i].y, initialState);
        neighbours[i].neighboursCount = n.length;
        //neighbours[i].relativeDistance = Math.abs((size/2)-neighbours[i].x) + Math.abs((size/2)-neighbours[i].y);
    }
    neighbours.sort(function(a, b) {
        return a.neighboursCount - b.neighboursCount;
    });

    //console.log(neighbours);
    var bestMatch = neighbours[neighbours.length - 1];
    var bestMatches = neighbours.filter(function(pos) {
        return pos.neighboursCount == bestMatch.neighboursCount;
    });
    /*bestMatches.sort(function (a, b) {
		return a.relativeDistance - b.relativeDistance;
	});*/
    var next = chooseNext(bestMatches);
    //var next = bestMatches[bestMatches.length-1];

    //find empty squares
    var makeEmpty = [];
    var neighbours = findEmptyNeighbours(opx, opy, initialState);
    for (var i = 0; i < neighbours.length; i++) {
        n = findEmptyNeighbours(neighbours[i].x, neighbours[i].y, initialState);
        neighbours[i].neighboursCount = n.length;

    }

    neighbours.sort(function(a, b) {
        return a.neighboursCount - b.neighboursCount;
    });

    //Write code here
    //console.log(emptySquares);
    var result = {};
    result.next = next;
    // console.log(""+next.x+" "+next.y+"");
    if (neighbours.length > 1) {
        //console.log(""+neighbours[neighbours.length-1].x+" "+neighbours[neighbours.length-1].y+"");
        //  console.log(""+neighbours[neighbours.length-2].x+" "+neighbours[neighbours.length-2].y+"");
        result.pos1 = neighbours[neighbours.length - 1];
        result.pos2 = neighbours[neighbours.length - 2];
    } else {
		console.log('neighbours');
		console.log(neighbours);
        result.pos1 = neighbours[0];
        var randomSquare = findRandomSquare(new Position(neighbours[0].x, neighbours[0].y), new Position(next.x, next.y), initialState, size);
        result.pos2 = randomSquare;
        //console.log(""+neighbours[0].x+" "+neighbours[0].y+"");
        // console.log(""+randomSquare.x+" "+randomSquare.y+"");
    }
    return result;

}



