
function superbowlWin(array){
    const winner = array.find( a => a.result === 'W')
 
    return winner === undefined ? winner : winner.year
}