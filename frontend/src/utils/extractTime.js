// export const extractTime = (dateString) => {
//     const date = new Date(dateString);
//     const hours = padZero(date.getHours())
//     const minutes = padZero(date.getMinutes())

//     return `${hours}:${minutes}`;
// }

export const extractTime = (dateString) => {
    const date = new Date(dateString);
    let hours = date.getHours();
    const minutes = padZero(date.getMinutes());
    const amPm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format
    if (hours > 12) {
        hours -= 12;
    } else if (hours === 0) {
        hours = 12;
    }

    return `${hours}:${minutes} ${amPm}`;
}

// helper function to pad single-digit numbers with a leading zero
function padZero(number){
    return number.toString().padStart(2, "0");
}