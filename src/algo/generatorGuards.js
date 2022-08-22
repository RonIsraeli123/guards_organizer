import { calculateGuards } from './calcGuards';

export const guardsGeneratorResult = (
  guardsNames,
  startTime,
  endTime,
  shiftTimeInMinuteUnit,
  isRandomOrder,
  isEvenTime
) => {
  if (
    !isValid(guardsNames, startTime, endTime, shiftTimeInMinuteUnit, isEvenTime)
  ) {
    return [];
  }

  if (shiftTimeInMinuteUnit > 6 * 60) {
    alert('זמן השמירה יצא גדול מ6 שעות, אולי כדאי להגדיר זמן שמירה?');
  }

  const calculateGuardsResult = calculateGuards(
    guardsNames,
    startTime,
    endTime,
    shiftTimeInMinuteUnit,
    isRandomOrder
  );
  return calculateGuardsResult;
};

const isValid = (guardsNames, startTime, endTime, shiftTime, isEvenTime) => {
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
  }
  return true;
};
