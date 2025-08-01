const ListofPlayers = ({ players }) => {
    return (
        <div>
            {players.map((player, index) => (
                <div key={index} className="player">
                    <li>Mr. {player.name} <span>{player.score}</span></li>
                </div>
            ))}
        </div>
    )
}

export const ScoreBelow70 = ({ players }) => {
    const filteredPlayers = players.filter(player => player.score <= 70);

    return (
        <div>
            {<ListofPlayers players={filteredPlayers} />}
        </div>
    )
}
export const OddPlayers = ({ first, third, fifth }) => {
    return (
        <div>
            <h2>Odd Players</h2>
            <ListofPlayers players={[first, third, fifth]} />
        </div>
    )
}

export const EvenPlayers = ({ second, fourth, sixth }) => {
    return (
        <div>
            <h2>Even Players</h2>
            <ListofPlayers players={[second, fourth, sixth]} />
        </div>
    )
}

export default ListofPlayers;