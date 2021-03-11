// Assigning Variables from DOM

let secondsProgress = document.getElementById('seconds-progress');
let minutesProgress = document.getElementById('minutes-progress');
let hoursProgress = document.getElementById('hours-progress');

// Main function
// ***START *** //
function getTime() {
  const fullDate = new Date();
  let hours = fullDate.getHours();
  let mins = fullDate.getMinutes();
  let secs = fullDate.getSeconds();
  let date = fullDate.getDate();
  let month = fullDate.getMonth();
  let year = fullDate.getFullYear();
  let day = fullDate.getDay();

  // 0 added to single digits to give digital aesthetic

  hours < 10 ? (hours = '0' + hours) : hours;
  mins < 10 ? (mins = '0' + mins) : mins;
  secs < 10 ? (secs = '0' + secs) : secs;

  document.getElementById('hours').innerHTML = `${hours}`;
  document.getElementById('minutes').innerHTML = `${mins}`;
  document.getElementById('seconds').innerHTML = `${secs}`;

  /* DAYS */
  switch (day) {
    case 0:
      day = 'Sunday';
      break;
    case 1:
      day = 'Monday';
      break;
    case 2:
      day = 'Tuesday';
      break;
    case 3:
      day = 'Wednesday';
      break;
    case 4:
      day = 'Thursday';
      break;
    case 5:
      day = 'Friday';
      break;
    case 6:
      day = 'Saturday';
  }

  /* MONTHS */

  switch (month) {
    case 0:
      month = 'January';
      break;
    case 1:
      month = 'February';
      break;
    case 2:
      month = 'March';
      break;
    case 3:
      month = 'April';
      break;
    case 4:
      month = 'May';
      break;
    case 5:
      month = 'June';
      break;
    case 6:
      month = 'July';
    case 7:
      month = 'August';
      break;
    case 8:
      month = 'September';
      break;
    case 9:
      month = 'October';
      break;
    case 10:
      month = 'November';
      break;
    case 11:
      month = 'December';
  }

  // Date suffixes - st, nd, rd, th

  let dateSuffix;

  if (date % 10 === 1 && date !== 11) {
    // need to single out 11-13 as they use 'th' and break the rule
    dateSuffix = 'st';
  } else if (date % 10 === 2 && date !== 12) {
    dateSuffix = 'nd';
  } else if (date % 10 === 3 && date !== 13) {
    dateSuffix = 'rd';
  } else dateSuffix = 'th';

  // Setting up the DOM

  document.getElementById('day').innerHTML = `${day}`;
  document.getElementById(
    'month'
  ).innerHTML = `the ${date}${dateSuffix} of ${month}`;
  document.getElementById('year').innerHTML = `${year}`;

  secondsProgress.style.setProperty('--percentage', `${secs * 6.1}deg`); // 6.1 to ensure a full circle before restarting
  minutesProgress.style.setProperty('--percentage', `${mins * 6.1}deg`);
  hoursProgress.style.setProperty('--percentage', `${hours * 15.1}deg`);

  let timeOfDay = document.getElementById('time-of-day');

  if (hours >= 6 && hours < 19) {
    // time of day arbitary. in future would be useful to have this based on a sunrise/set cycle
    timeOfDay.innerHTML = `
        <img src='./assets/day.png' alt='daytime'/>
        `;
  } else {
    timeOfDay.innerHTML = `
        <img src='./assets/night.png' alt='nighttime'/>
        `;
  }
}
// *** END *** //

// Callback function; interval set to update every second
setInterval(getTime, 100);

// UPDATES
// add international + city times
