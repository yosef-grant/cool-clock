let secondsProgress = document.getElementById('seconds-progress');
let minutesProgress = document.getElementById('minutes-progress');
let hoursProgress = document.getElementById('hours-progress');

function getTime() {
  const fullDate = new Date();
  let hours = fullDate.getHours();
  let mins = fullDate.getMinutes();
  let secs = fullDate.getSeconds();
  let date = fullDate.getDate();
  let month = fullDate.getMonth();
  let year = fullDate.getFullYear();
  let day = fullDate.getDay();

  hours < 10 ? (hours = '0' + hours) : hours;
  mins < 10 ? (mins = '0' + mins) : mins;
  secs < 10 ? (secs = '0' + secs) : secs;

  document.getElementById('hours').innerHTML = `${hours}`;
  document.getElementById('minutes').innerHTML = `${mins}`;
  document.getElementById('seconds').innerHTML = `${secs}`;

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

  let dateSuffix;

  if (date % 10 === 1) {
    dateSuffix = 'st';
  } else if (date % 10 === 2) {
    dateSuffix = 'nd';
  } else if (date % 10 === 3) {
    dateSuffix = 'rd';
  } else dateSuffix = 'th';

  document.getElementById('day').innerHTML = `${day}`;
  document.getElementById(
    'month'
  ).innerHTML = `the ${date}${dateSuffix} of ${month}`;
  document.getElementById('year').innerHTML = `${year}`;

  secondsProgress.style.setProperty('--percentage', `${secs * 6.1}deg`);
  minutesProgress.style.setProperty('--percentage', `${mins * 6.1}deg`);
  hoursProgress.style.setProperty('--percentage', `${hours * 15.1}deg`);

  let timeOfDay = document.getElementById('time-of-day');

  if (hours >= 6 && hours < 19) {
    timeOfDay.innerHTML = `
        <img src='./assets/day.png' alt='daytime'/>
        `;
  } else {
    timeOfDay.innerHTML = `
        <img src='./assets/night.png' alt='nighttime'/>
        `;
  }
}

setInterval(getTime, 100);

// UPDATES

// add international + city times
