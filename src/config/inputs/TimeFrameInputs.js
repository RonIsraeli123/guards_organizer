const now = new Date();

const year = now.getFullYear();

const month =
  now.getMonth().toString().length === 1
    ? '0' + (now.getMonth() + 1).toString()
    : now.getMonth() + 1;

const date =
  now.getDate().toString().length === 1
    ? '0' + now.getDate().toString()
    : now.getDate();

const hours =
  now.getHours().toString().length === 1
    ? '0' + now.getHours().toString()
    : now.getHours();

const minutes =
  now.getMinutes().toString().length === 1
    ? '0' + now.getMinutes().toString()
    : now.getMinutes();

const dateEnd =
  (now.getDate() + 1).toString().length === 1
    ? '0' + (now.getDate() + 1).toString()
    : now.getDate() + 1;

export const startGuardTime =
  year + '-' + month + '-' + date + 'T' + hours + ':' + minutes;

export const endGuardTime =
  year + '-' + month + '-' + dateEnd + 'T' + hours + ':' + minutes;

export const placeHolderStartTime = 'תחילת זמן';

export const placeHolderEndTime = 'סיום זמן';
