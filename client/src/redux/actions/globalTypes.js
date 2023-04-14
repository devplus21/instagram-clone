export const GLOBALTYPES = {
  AUTH: 'AUTH',
  ALERT: 'ALERT',
  THEME: 'THEME',
  STATUS: 'STATUS',
  MODAL: 'MODAL',
  SOCKET: 'SOCKET',
  ONLINE: 'ONLINE',
  OFFLINE: 'OFFLINE',
  STATUS_USER: 'STATUS_USER',
  STATUS_POST: 'STATUS_POST',
  STATUS_CLASS: 'STATUS_CLASS',
  STATUS_EXERCISE: 'STATUS_EXERCISE',
  STATUS_FORUM: 'STATUS_FORUM',
  STATUS_INTIVE: 'STATUS_INTIVE',
  CALL: 'CALL',
  PEER: 'PEER',
};

export const EditData = (data, id, post) => {
  const newData = data.map((item) => (item._id === id ? post : item));
  return newData;
};

export const DeleteData = (data, id) => {
  const newData = data.filter((item) => item._id !== id);
  return newData;
};
