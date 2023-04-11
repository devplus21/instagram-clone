export const GLOBALTYPES = {
  AUTH: 'AUTH',
  ALERT: 'ALERT',
  STATUS: 'STATUS',
  STATUS_POST: 'STATUS_POST',
  STATUS_EXERCISE: 'STATUS_EXERCISE',
  STATUS_USER: 'STATUS_USER',
  STATUS_USER: 'STATUS_USER',
  MODAL: 'MODAL',
  SOCKET: 'SOCKET',
};

export const EditData = (data, id, post) => {
  const newData = data.map((item) => (item._id === id ? post : item));
  return newData;
};

export const DeleteData = (data, id) => {
  const newData = data.filter((item) => item._id !== id);
  return newData;
};
