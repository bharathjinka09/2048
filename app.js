document.addEventListener('DOMContentLoaded', () => {
  const gridDisplay = document.querySelector('.grid');
  const scoreDisplay = document.querySelector('#score');
  const resultDisplay = document.querySelector('#result');
  const newGame = document.querySelector('#new-game');
  const width = 4;
  let squares = [];
  let score = 0;
  
  function createBoard() {
    for(let i = 0; i < width * width; i++) {
      let square = document.createElement('div');
      square.innerHTML = '';
      gridDisplay.appendChild(square);
      squares.push(square);
    }
    
    generate();
    generate();
  }
  
  function styleNumbers() {
    for(let i = 0; i < squares.length; i++) {
      if(!squares[i].classList.contains('two') && squares[i].innerHTML == 2) {
        squares[i].className = '';
        squares[i].classList.add('two');
      }
      if(!squares[i].classList.contains('four') && squares[i].innerHTML == 4) {
        squares[i].className = '';
        squares[i].classList.add('four');
      }
      if(!squares[i].classList.contains('eight') && squares[i].innerHTML == 8) {
        squares[i].className = '';
        squares[i].classList.add('eight');
      } 
      if(!squares[i].classList.contains('sixteen') && squares[i].innerHTML == 16) {
        squares[i].className = '';
        squares[i].classList.add('sixteen');
      } 
      if(!squares[i].classList.contains('thirty-two') && squares[i].innerHTML == 32) {
        squares[i].className = '';
        squares[i].classList.add('thirty-two');
      } 
      if(!squares[i].classList.contains('sixty-four') && squares[i].innerHTML == 64) {
        squares[i].className = '';
        squares[i].classList.add('sixty-four');
      } 
      if(!squares[i].classList.contains('one-twenty-eight') && squares[i].innerHTML == 128) {
        squares[i].className = '';
        squares[i].classList.add('one-twenty-eight');
      } 
      if(!squares[i].classList.contains('two-fifty-six') && squares[i].innerHTML == 256) {
        squares[i].className = '';
        squares[i].classList.add('two-fifty-six');
      } 
      if(!squares[i].classList.contains('five-twelve') && squares[i].innerHTML == 512) {
        squares[i].className = '';
        squares[i].classList.add('five-twelve');
      } 
      if(!squares[i].classList.contains('ten-twenty-four') && squares[i].innerHTML == 1024) {
        squares[i].className = '';
        squares[i].classList.add('ten-twenty-four');
      } 
      if(!squares[i].classList.contains('twenty-forty-eight') && squares[i].innerHTML == 2048) {
        squares[i].className = '';
        squares[i].classList.add('twenty-forty-eight');
      } 
      
      if(squares[i].innerHTML == '') {
        squares[i].className = '';
      }
    }
  }
  
  createBoard();
  styleNumbers();
  
  function generate() {
    let randomNumber = Math.floor(Math.random() * squares.length);
    if(squares[randomNumber].innerHTML == '') {
      squares[randomNumber].innerHTML = 2;
    } else 
      generate();
  }
  
  function moveRight() {
    for(let i = 0; i < squares.length; i++) {
      if(i % 4 === 0) {
        let totalOne = squares[i].innerHTML;
        let totalTwo = squares[i + 1].innerHTML;
        let totalThree = squares[i + 2].innerHTML;
        let totalFour = squares[i + 3].innerHTML;
        let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];
        
        let filteredRow = row.filter(num => num);
        let missing = width - filteredRow.length;
        let zeros = Array(missing).fill('');
        let newRow = zeros.concat(filteredRow);
        squares[i].innerHTML = newRow[0];
        squares[i + 1].innerHTML = newRow[1];
        squares[i + 2].innerHTML = newRow[2];
        squares[i + 3].innerHTML = newRow[3];
      }
    }
  }
  
  function moveLeft() {
    for(let i = 0; i < squares.length; i++) {
      if(i % 4 === 0) {
        let totalOne = squares[i].innerHTML;
        let totalTwo = squares[i + 1].innerHTML;
        let totalThree = squares[i + 2].innerHTML;
        let totalFour = squares[i + 3].innerHTML;
        let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];
        
        let filteredRow = row.filter(num => num);
        let missing = width - filteredRow.length;
        let zeros = Array(missing).fill('');
        let newRow = filteredRow.concat(zeros);
        squares[i].innerHTML = newRow[0];
        squares[i + 1].innerHTML = newRow[1];
        squares[i + 2].innerHTML = newRow[2];
        squares[i + 3].innerHTML = newRow[3];
      }
    }
  }
  
  function moveDown() {
    for(let i = 0; i < width; i++) {
      let totalOne = squares[i].innerHTML;
      let totalTwo = squares[i + width].innerHTML;
      let totalThree = squares[i + (width * 2)].innerHTML;
      let totalFour = squares[i + (width * 3)].innerHTML;
      
      let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];
      let filteredColumn = column.filter(num => num);
      let missing = width - filteredColumn.length;
      let zeros = Array(missing).fill('');
      let newColumn = zeros.concat(filteredColumn);
      
      squares[i].innerHTML = newColumn[0];
      squares[i + width].innerHTML = newColumn[1];
      squares[i + (width * 2)].innerHTML = newColumn[2];
      squares[i + (width * 3)].innerHTML = newColumn[3];
    }
  }
  
  function moveUp() {
    for(let i = 0; i < width; i++) {
      let totalOne = squares[i].innerHTML;
      let totalTwo = squares[i + width].innerHTML;
      let totalThree = squares[i + (width * 2)].innerHTML;
      let totalFour = squares[i + (width * 3)].innerHTML;
      
      let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];
      let filteredColumn = column.filter(num => num);
      let missing = width - filteredColumn.length;
      let zeros = Array(missing).fill('');
      let newColumn = filteredColumn.concat(zeros);
      
      squares[i].innerHTML = newColumn[0];
      squares[i + width].innerHTML = newColumn[1];
      squares[i + (width * 2)].innerHTML = newColumn[2];
      squares[i + (width * 3)].innerHTML = newColumn[3];
    }
  }
  
  function combineRow() {
    for(let i = 0; i < squares.length - 1; i++) {
      if(squares[i].innerHTML === squares[i + 1].innerHTML) {
        let combinedTotal = (isNaN(parseInt(squares[i].innerHTML)) ? 0 : parseInt(squares[i].innerHTML)) + (isNaN(parseInt(squares[i + 1].innerHTML)) ? 0 : parseInt(squares[i + 1].innerHTML));
        squares[i].innerHTML = combinedTotal;
        squares[i + 1].innerHTML = '';
        score += combinedTotal;
        scoreDisplay.innerHTML = score;
      }
    }
  }
  
  function combineColumn() {
    for(let i = 0; i < squares.length - width; i++) {
      if(squares[i].innerHTML === squares[i + width].innerHTML) {
        let combinedTotal = (isNaN(parseInt(squares[i].innerHTML)) ? 0 : parseInt(squares[i].innerHTML)) + (isNaN(parseInt(squares[i + width].innerHTML)) ? 0 : parseInt(squares[i + width].innerHTML));
        squares[i].innerHTML = combinedTotal;
        squares[i + width].innerHTML = '';
        score += combinedTotal;
        scoreDisplay.innerHTML = score;
      }
    }
  }
  
  function checkForWin() {
    for(let i = 0; i < squares.length; i++) {
      if(squares[i].innerHTML == 2048) {
        resultDisplay.innerHTML = 'You Win!!!';
        resultDisplay.style.opacity = 1;
        document.removeEventListener('keyup', control);
      }
    }
  }
  
  function checkCombine() {
    let noCombine = false;
    let zeros = 0;
    for(let i = 0; i < squares.length; i++) {
      if(squares[i].innerHTML == '')
        zeros++;
    }
    
    for(let i = 0; i < squares.length - 1; i++) {
      if(squares[i].innerHTML === squares[i + 1].innerHTML) {
        noCombine = true;        
      } 
    }
    
    for(let i = 0; i < squares.length - width; i++) {
      if(squares[i].innerHTML === squares[i + width].innerHTML) {
        noCombine = true;        
      } 
    }
    
    if(!noCombine && zeros === 0) {
      resultDisplay.innerHTML = 'You Lose!';
      resultDisplay.style.opacity = 1;
      document.removeEventListener('keyup', control);
    }
  }
  
  document.addEventListener('keyup', control);
  
  function control(e) {
    if(e.keyCode === 39) {
      keyRight();
    } else if(e.keyCode === 37) {
      keyLeft();
    } else if(e.keyCode === 40) {
      keyDown();
    } else if(e.keyCode === 38) {
      keyUp();
    }
    
    checkForWin();
    checkCombine();
    styleNumbers();
  }
  
  function keyRight() {
    moveRight();
    combineRow();
    moveRight();
    generate();
  }
  
  function keyLeft() {
    moveLeft();
    combineRow();
    moveLeft();
    generate();
  }
  
  function keyDown() {
    moveDown();
    combineColumn();
    moveDown();
    generate();
  }
  
  function keyUp() {
    moveUp();
    combineColumn();
    moveUp();
    generate();
  }
  
  newGame.addEventListener('click', () => {
    gridDisplay.innerHTML = '';
    squares = [];
    createBoard();
    styleNumbers();
    score = 0;
    scoreDisplay.innerHTML = score;
    resultDisplay.style.opacity = 0;
    setTimeout(() => {
      resultDisplay.innerHTML = '';
    }, 1000);
    
    document.addEventListener('keyup', control);
  });
});