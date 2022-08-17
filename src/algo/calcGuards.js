import moment from 'moment';
import arrayShuffle from 'array-shuffle';

export const calculateGuards = (
  guardsNames,
  startTime,
  endTime,
  shiftTime,
  timeUnit,
  isRandomOrder
) => {
  let shuffledNames = guardsNames;
  if (isRandomOrder) {
    shuffledNames = [...arrayShuffle([...guardsNames])];
  }
  let counter = 0;
  let guards = [];
  let startTimeMoment = moment(startTime);
  while (
    !(moment(startTimeMoment).add(shiftTime, timeUnit) > moment(endTime))
  ) {
    let endTime = moment(startTimeMoment).add(shiftTime, timeUnit);
    if (counter === shuffledNames.length) {
      counter = 0;
    }
    guards.push({
      name: shuffledNames[counter],
      startTime: startTimeMoment,
      endTime: endTime,
    });
    startTimeMoment = endTime;
    counter++;
  }
  if (startTimeMoment < moment(endTime)) {
    if (
      moment(startTimeMoment).add(shiftTime / 4, timeUnit) > moment(endTime)
    ) {
      guards[counter - 1].endTime = moment(endTime);
    } else if (counter === shuffledNames.length) {
      counter = 0;
      guards.push({
        name: shuffledNames[counter],
        startTimeMoment: startTimeMoment,
        endTime: moment(endTime),
      });
    }
  }
  return guards;
};
