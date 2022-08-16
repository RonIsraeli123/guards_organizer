import { calculateGuards } from '../../../../../algo/calcGuards';
import { useSelector, useDispatch } from 'react-redux';
import { setGuards } from '../../../../../redux/slices/GuardsResultSlice';

import moment from 'moment';

const guardsNames = useSelector((state) => state.guardsNames.guardsNames);
const startTime = useSelector((state) => state.timeFrame.startTime);
const endTime = useSelector((state) => state.timeFrame.endTime);
const shiftTime = useSelector((state) => state.shiftTime.shiftTime);
const timeType = useSelector((state) => state.shiftTime.type);

const dispatch = useDispatch();

export const dispatchGuards = (isRandom, evenTime) => {
  validation();
  if (evenTime) {
    const countGuards = guardsNames.length;
    const sumTime = moment(endDate).diff(moment(startDate), minuteHour);
    const evenguardTime =
      sumTime / countGuards != 0
        ? Math.floor(sumTime / countGuards)
        : Math.ceil(sumTime / countGuards);
    if (evenguardTime > 6 * 60) {
      alert('זמן השמירה יצא גדול מ6 שעות, אולי כדאי להגדיר זמן שמירה?');
    }
    shiftTime = evenguardTime;
  }
  dispatch(
    setGuards(
      calculateGuards(
        guardsNames,
        startTime,
        endTime,
        shiftTime,
        timeType,
        isRandom
      )
    )
  );
};

const validation = () => {
  if (startTime === '' || endTime === '') {
    return alert('יש להכניס תאריך התחלה ותאריך סיום');
  }
  if (guardsNames.length <= 1) {
    return alert('יש להכניס לפחות 2 שומרים');
  }
  if (startTime >= endTime) {
    return alert('זמן סוף השמירה חייב להיות גדול מזמן התחלת השמירה');
  }
  if (!evenTime) {
    if (!shiftTime) {
      return alert('יש להזין את משך זמן השמירה');
    }
    if (shiftTime <= 0) {
      return alert('שמירה חייבת להיות מעל 0 דקות');
    }
    if (startTime >= endTime) {
      return alert('זמן סוף השמירה חייב להיות גדול מזמן התחלת השמירה');
    }
  }
};
