import React from 'react';
import { Button, View, Text, GridLayout, LinearLayout } from 'magic-script-components';

function Square(props) {
  const color = props.value === 'X' ? [1, 0.1, 0.1, 1] : [0.1, 0.1, 1, 1];
  return (
    <Button width={0.15} height={0.15} textColor={color} roundness={0.1} onClick={props.onClick}>
      {props.value || ''}
    </Button>
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
    return <GridLayout rows={3} columns={3} width={0.5} height={0.5}>{items}</GridLayout>;
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
        <View key={move}>
          <Button roundness={0.1} fontSize={0.03} onClick={event => this.jumpTo(move)}>
            {desc}
          </Button>
        </View>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <View name="game">
        <View name="game-board" position={[-0.5, 0.5, 0]}>
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </View>
        <View name="game-info" position={[0, 0.5, 0]}>
          <Text fontSize={0.05} position={[0.3, 0,0]} anchorPoint='top-left'>{status}</Text>
          <LinearLayout defaultItemAlignment={'top-center'} position={[0, -0.08, 0]}>{moves}</LinearLayout>
        </View>
      </View>
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
