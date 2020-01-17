import React from 'react';

function Square(props) {
  const color = props.value === 'X' ? [255, 26, 26, 1] : [26, 26, 255, 1];
  return (
    <button width={0.15} height={0.15} textColor={color} roundness={0.1} onClick={props.onClick}>
      {props.value || ''}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={event => this.props.onClick(i)}
      />
    );
  }

  render() {
    const items = [];
    for (let i = 0; i < 9; i++) {
      items.push(this.renderSquare(i));
    }
    return <gridLayout rows={3} columns={3} width={0.5} height={0.5}>{items}</gridLayout>;
  }
}

export class GameTicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        // <listViewItem key={move}>
        <view key={move}>
          <button roundness={0.1} textSize={0.03} onClick={event => this.jumpTo(move)}>
            {desc}
          </button>
        </view>
        // </listViewItem>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <view name="game">
        <view name="game-board" localPosition={[-0.5, 0.5, 0]}>
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </view>
        <view name="game-info" localPosition={[0, 0.5, 0]}>
          <text textSize={0.05} alignment='top-left'>{status}</text>
          <linearLayout defaultItemAlignment={'top-center'} localPosition={[0, -0.08, 0]}>{moves}</linearLayout>
        </view>
      </view>
    );
  }
}

// ========================================

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
