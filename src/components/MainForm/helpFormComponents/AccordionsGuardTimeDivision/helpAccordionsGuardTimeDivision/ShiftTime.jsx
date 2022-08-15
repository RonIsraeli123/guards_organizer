import React from 'react'

export const ShiftTime = () => {
  const { setMinuteHour } = props;

  const [options] = useState([
    { value: 'hour', label: 'שעות' },
    { value: 'minute', label: 'דקות' },
  ]);

  return (
    <div>
      <TextField id="input-with-icon-grid" type="number" label="זמן שמירה" value={props.valueGuardTime} onChange={(e) => props.onChangeGuardTime(e)} />
      <Selector
        className="select"
        placeholder={props.minuteHour === "hour" ? 'שעות' : 'דקות'}
        value={props.value.value}
        onChange={(e) => setMinuteHour(e.value)}
        options={options}
        defaultValue={options[1]}
      />
    </div>
  )
}
