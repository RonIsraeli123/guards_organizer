import moment from 'moment';
import arrayShuffle from 'array-shuffle';

import { MINUTE_TIME_UNITE } from './const';

export const calculateGuards = (
  guardsNames,
  givenStartTime,
  givenEndTime,
  shiftTime,
  isRandomOrder
) => {
  let guardNameArray = guardsNames;

  if (isRandomOrder) {
    guardNameArray = [...arrayShuffle([...guardsNames])];
  }

  let counter = 0;
  let guards = [];
  let startShift = moment(givenStartTime);
  let endShift = moment(givenEndTime);

  const sumTime = endShift.diff(moment(givenStartTime), MINUTE_TIME_UNITE);

  // if shift guard is all time they need to guard
  if (sumTime < shiftTime) {
    guards.push({
      name: guardNameArray[counter],
      startTime: startShift,
      endTime: endShift,
    });
    return guards;
  }

  // until the end of shifts...
  while (
    !(
      moment(startShift).add(shiftTime, MINUTE_TIME_UNITE) >
      moment(givenEndTime)
    )
  ) {
    let endShift = moment(startShift).add(shiftTime, MINUTE_TIME_UNITE);
    if (counter === guardNameArray.length) {
      counter = 0;
    }
    guards.push({
      name: guardNameArray[counter],
      startTime: startShift,
      endTime: endShift,
    });
    startShift = endShift;
    counter++;
  }

  // the last shift, if small then the guard shift
  if (startShift.isBefore(endShift)) {
    if (startShift.add(shiftTime / 4, MINUTE_TIME_UNITE) > endShift) {
      guards[counter - 1].endTime = endShift;
    } else if (counter === guardNameArray.length) {
      counter = 0;
      guards.push({
        name: guardNameArray[counter],
        startTime: startShift,
        endTime: endShift,
      });
    }
  }
  return guards;
};
