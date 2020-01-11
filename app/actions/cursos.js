export const FILTER_BUILDING = 'FILTER_BUILDING';
export const FILTER_TIME = 'FILTER_TIME';
export const GET_INITIAL_LIST = 'GET_INITIAL_LIST';

export const GET_ROOM_INFO = 'GET_ROOM_INFO';
export const API_ROOM_INFO_RESULT = 'API_ROOM_RESULT';
export const API_ROOM_INFO_ERROR = 'API_ROOM_ERROR';

export const API_AVAILABLE_RESULT = 'API_RESULT';
export const API_AVAILABLE_ERROR = 'API_ERROR';

export const filterEdificio = building => ({
  type: FILTER_BUILDING,
  building,
});

export const filterTime = time => ({
  type: FILTER_TIME,
  time,
});

export const getInitialList = time => ({
  type: GET_INITIAL_LIST,
  time,
});

export const getRoomInfo = room => ({
  type: GET_ROOM_INFO,
  room,
});