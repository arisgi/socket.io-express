export const enterRoom = (payload) => {
  return {
    type: 'ENTER_ROOM',
    payload,
  };
};

export const leaveRoom = (payload) => {
  return {
    type: 'LEAVE_ROOM',
    payload,
  };
};

export const sendMessage = (payload) => {
  return {
    type: 'SEND_MESSAGE',
    payload,
  };
};
