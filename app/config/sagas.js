import { takeEvery, select, call, put } from 'redux-saga/effects';

// 1. filter building
// 2. filter time
// 3. initial app load

import {
  FILTER_BUILDING,
  FILTER_TIME,
  GET_INITIAL_LIST,
  API_AVAILABLE_ERROR,
  API_AVAILABLE_RESULT,
  GET_ROOM_INFO,
  API_ROOM_INFO_RESULT,
  API_ROOM_INFO_ERROR,
} from '../actions/cursos';

const API_URL = 'https://hivesrv.herokuapp.com'

const getAvailableRooms = (time, building) =>
  fetch(`${API_URL}/v1/cursos/disponible/${time}/${building}`);

const fetchAvailableRooms = function* (action) {
  try {
    let building = action.building;
    let time = action.time;
    if (time === undefined) {
      time = yield select(state => state.cursos.cursosDisponibles.time || new Date().getHours());
    }
    if (building === undefined) {
      building = yield select(state => state.cursos.cursosDisponibles.building || '');
    }

    const response = yield call(getAvailableRooms, time, building);
    const result = yield response.json();
    console.log('fetch res', response);
    yield put({ type: API_AVAILABLE_RESULT, result, time, building });
  } catch (e) {
    console.log(e);
    yield put({ type: API_AVAILABLE_ERROR, error: 'Error' });
  }
};

const getRoomInfo = room => fetch(`${API_URL}/v1/cursos/detalle/${room}`);

const fetchRoomInfo = function* (action) {
  try {
    let curso = action.room;
    const response = yield call(getRoomInfo, curso);
    const result = yield response.json();
    console.log('fetch info res', response);
    yield put({type: API_ROOM_INFO_RESULT, result, curso});
  } catch(e) {
    console.log(e);
    yield put({type: API_ROOM_INFO_ERROR, error: 'Error al buscar detalle de curso'});
  }
}

const rootSaga = function* rootSaga() {
  yield takeEvery(GET_INITIAL_LIST, fetchAvailableRooms);
  yield takeEvery(FILTER_BUILDING, fetchAvailableRooms);
  yield takeEvery(FILTER_TIME, fetchAvailableRooms);
  yield takeEvery(GET_ROOM_INFO, fetchRoomInfo);
};

export default rootSaga;
