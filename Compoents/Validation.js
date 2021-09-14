export const mobileNumberCheck = (number) => {
    console.log(number.length)
    if (number.length <= 3) {
        alert('Please enter a valid number')
        return false
    } else {
        // alert('its a valid number')
        return true
    }
}

export const nameCheck = (number) => {
    console.log(number.length)
    if (number.length <= 2) {
        alert('Please enter a valid Name')
        return false
    } else {
        // alert('its a valid number')
        return true
    }
}