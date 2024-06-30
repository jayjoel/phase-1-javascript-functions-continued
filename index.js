// Function to express Saturday activities
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

// Function to express Monday activities
const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

// Function to wrap an adjective in a highlight symbol
function wrapAdjective(symbol = '*') {
    return function(adjective = 'special') {
        return `You are ${symbol}${adjective}${symbol}!`;
    }
}


