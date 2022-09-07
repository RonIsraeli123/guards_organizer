import moment from 'moment';
import arrayShuffle from 'array-shuffle';

import { MINUTE_TIME_UNITE } from './const';

export const calculateGuards = (
  guardsNames,
  givenStartTime,
  givenEndTime,
  shiftTimeInMinuteUnit,
  isRandomOrder
) => {
  let guardNameArray = guardsNames;

  if (isRandomOrder) {
    guardNameArray = [...arrayShuffle([...guardsNames])];
  }

  let startShifts = moment(givenStartTime);
  let endShifts = moment(givenEndTime);

  const sumTime = endShifts.diff(moment(givenStartTime), MINUTE_TIME_UNITE);

  // if shift guard is all time they need to guard
  if (sumTime < shiftTimeInMinuteUnit) {
    return {
      name: guardNameArray[0],
      startTime: startShifts,
      endTime: endShifts,
    };
  }

  const guardResult = addGuards(
    guardNameArray,
    givenStartTime,
    givenEndTime,
    shiftTimeInMinuteUnit
  );
  return guardResult;
};

const addGuards = (
  guardNameArray,
  givenStartTime,
  givenEndTime,
  shiftTimeInMinuteUnit
) => {
  let guardResult = [];
  let counter = 0;
  let endShifts = moment(givenEndTime);

  let startShift = moment(givenStartTime);
  while (startShift.isBefore(endShifts)) {
    const diffStartShiftEndShifts = endShifts.diff(
      startShift,
      MINUTE_TIME_UNITE
    );
    const endShift = moment(startShift).add(
      shiftTimeInMinuteUnit,
      MINUTE_TIME_UNITE
    );
    // if guard have more then one shift
    if (counter === guardNameArray.length) {
      counter = 0;
    }
    if (diffStartShiftEndShifts > shiftTimeInMinuteUnit) {
      // normal insert
      guardResult.push({
        name: guardNameArray[counter],
        startTime: moment(startShift),
        endTime: moment(endShift),
      });
    } else {
      // last guard with partial guard
      guardResult.push({
        name: guardNameArray[counter],
        startTime: moment(startShift),
        endTime: moment(endShifts),
      });
    }
    startShift.add(shiftTimeInMinuteUnit, MINUTE_TIME_UNITE);
    counter++;
  }
  return guardResult;
};
