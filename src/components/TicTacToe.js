
import React, { useState } from 'react';
import '../styles/TicTacToe.css'

const TicTacToe = () => {
    const [turnPlayer, setTurnPlayer] = useState('🔴')
    const [cells, setCells] = useState(Array(9).fill(''))
    const [winner, setWinner] = useState()

    const checkWinner = (squares) => {
        let combos = {
            accros: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
            ],
            down:
                [
                    [0, 3, 6],
                    [1, 4, 7],
                    [2, 5, 8],
            ],
            diag: [
                [0, 4, 8],
                [2, 4, 6],
            ],
        }
        for (let combo in combos) {
            combos[combo].forEach((pattern) => {
                if (
                    squares[pattern[0]] === '' ||
                    squares[pattern[1]] === '' ||
                    squares[pattern[2]] === ''
                ) {

                } else if (
                    squares[pattern[0]] === squares[pattern[1]] &&
                    squares[pattern[1]] === squares[pattern[2]]
                ) {
                    setWinner(squares[pattern[0]])

                }
            })
        }
    }


    const handleClick = (num) => {
        if (cells[num] !== '') {
            alert('Vous ne pouvez pas cliquez sur la même case')
            return
        }

        let squares = [...cells]

        if (turnPlayer === '🔴') {
            squares[num] = '🔴'
            setTurnPlayer('🔵')
        } else {
            squares[num] = '🔵'
            setTurnPlayer('🔴')
        }
        checkWinner(squares)
        setCells(squares)
    }

    const handleReplay = () => {
        setWinner(null)
        setCells(Array(9).fill(''))

    }


    const Cell = ({ num }) => {
        return <td onClick={() => handleClick(num)}>{cells[num]}</td>
    }

    return (
        <div className='container'>
            <h1>TIC TAC T<img className="img-psg" src="./paris-saint-germain-logo.png"></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E</h1>
            <p className="msg-turn">🎙 C'est au tour de {turnPlayer} de jouer !</p>
            <table>
                <tbody>
                    <tr>
                        <Cell num={0} />
                        <Cell num={1} />
                        <Cell num={2} />
                    </tr>
                    <tr>
                        <Cell num={3} />
                        <Cell num={4} />
                        <Cell num={5} />
                    </tr>
                    <tr>
                        <Cell num={6} />
                        <Cell num={7} />
                        <Cell num={8} />
                    </tr>
                </tbody>
            </table>
            {winner && (
                <>
                    <p className="msg-winner">Le joueur&nbsp; {winner}&nbsp; gagne la partie :)</p>
                    <button onClick={() => handleReplay()}>Rejouer !</button>
                </>
            )}
        </div>
    );
};

export default TicTacToe;