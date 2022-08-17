import { calculateGuards } from './calcGuards';

import moment from 'moment';

export const guardsGeneratorResult = (
  guardsNames,
  startTime,
  endTime,
  shiftTime,
  timeUnit,
  isRandomOrder,
  isEvenTime
) => {
  if (
    !isValid(guardsNames, startTime, endTime, shiftTime, timeUnit, isEvenTime)
  ) {
    return [];
  }
  if (isEvenTime) {
    const countGuards = guardsNames.length;
    const sumTime = moment(endTime).diff(moment(startTime), timeUnit);
    const evenGuardTime =
      sumTime / countGuards !== 0
        ? sumTime / countGuards
        : Math.ceil(sumTime / countGuards);
    if (evenGuardTime > 6 * 60) {
      alert('זמן השמירה יצא גדול מ6 שעות, אולי כדאי להגדיר זמן שמירה?');
    }
    shiftTime = evenGuardTime;
  }
  const calculateGuardsResult = calculateGuards(
    guardsNames,
    startTime,
    endTime,
    shiftTime,
    timeUnit,
    isRandomOrder
  );

  return calculateGuardsResult;
};

const isValid = (
  guardsNames,
  startTime,
  endTime,
  shiftTime,
  timeUnit,
  isEvenTime
) => {
  if (startTime === '' || endTime === '') {
    alert('יש להכניס תאריך התחלה ותאריך סיום');
    return false;
  }
  if (guardsNames.length <= 1) {
    alert('יש להכניס לפחות 2 שומרים');
    return false;
  }
  if (startTime >= endTime) {
    alert('זמן סוף השמירה חייב להיות גדול מזמן התחלת השמירה');
    return false;
  }
  if (!isEvenTime) {
    if (!shiftTime) {
      alert('יש להזין את משך זמן השמירה');
      return false;
    }
    if (shiftTime <= 0) {
      alert('שמירה חייבת להיות מעל 0 דקות');
      return false;
    }
    if (startTime >= endTime) {
      alert('זמן סוף השמירה חייב להיות גדול מזמן התחלת השמירה');
      return false;
    }
    if (!timeUnit === 'hour' || !timeUnit === 'minute') {
      alert('יחידת הזמן לא תקינה');
      return false;
    }
  }
  return true;
};
