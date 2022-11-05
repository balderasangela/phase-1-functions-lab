// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    if (distance >= 42) {
    return (distance - 43 ) + 1
    } else  (distance <= 42) ;{
    return (distance * (-1)) + 42

}}

function distanceFromHqInFeet(distance) {
    let feet = 264 
    return distanceFromHqInBlocks(distance) * feet
}

function distanceTravelledInFeet(start,end) {
    return Math.abs(start - end) * 264
}

function calculatesFarePrice(start,destination) {
    let fare = distanceTravelledInFeet(start,destination) 
    if (fare <= 400){
        return 0
    } else if (fare >= 400 && fare <= 2000 ) {
        return (fare - 400) * 0.02
} else if (fare > 2000 && fare < 2500) {
    return 25
}else (fare > 2500);{
    return 'cannot travel that far'
}
}