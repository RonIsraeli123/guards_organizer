import moment from 'moment';
import arrayShuffle from 'array-shuffle';

export const calculateGuards = (
  personsNames,
  givenStartTime,
  givenEndTime,
  guardTime,
  minuteHour,
  isRandom
) => {
  let shuffledNames = personsNames;
  if (isRandom) {
    shuffledNames = arrayShuffle(personsNames);
  }
  let counter = 0;
  let guards = [];
  let startTime = moment(givenStartTime);
  while (
    !(moment(startTime).add(guardTime, minuteHour) > moment(givenEndTime))
  ) {
    let endTime = moment(startTime).add(guardTime, minuteHour);
    if (counter === shuffledNames.length) {
      counter = 0;
    }
    guards.push({
      name: shuffledNames[counter],
      startTime: startTime,
      endTime: endTime,
    });
    startTime = endTime;
    counter++;
  }
  if (startTime < moment(givenEndTime)) {
    if (
      moment(startTime).add(guardTime / 4, minuteHour) > moment(givenEndTime)
    ) {
      guards[counter - 1].endTime = moment(givenEndTime);
    } else if (counter === shuffledNames.length) {
      counter = 0;
      guards.push({
        name: shuffledNames[counter],
        startTime: startTime,
        endTime: moment(givenEndTime),
      });
    }
  }
  return guards;
};
