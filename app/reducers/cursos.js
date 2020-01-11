import {
  FILTER_TIME,
  FILTER_BUILDING,
  GET_INITIAL_LIST,
  API_AVAILABLE_ERROR,
  API_AVAILABLE_RESULT,
  GET_ROOM_INFO,
  API_ROOM_INFO_RESULT,
} from '../actions/cursos';

const initialState = {
  cursosDisponibles: {
    listado: [],
  },
  detalleCursos: {
    detalles: {}
  },
};

const fetchAvailable = (state, action) => {
  const cursosDisponibles = {
    isFetching: true,
    building: action.building || state.cursosDisponibles.building,
    time: action.time || state.cursosDisponibles.time,
    listado: [],
  };

  if (
    action.time === state.cursosDisponibles.time ||
    action.building === state.cursosDisponibles.building
  ) {
    cursosDisponibles.listado = state.cursosDisponibles.listado;
  }

  return cursosDisponibles;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INITIAL_LIST:
    case FILTER_TIME:
    case FILTER_BUILDING:
      return {
        ...state,
        cursosDisponibles: fetchAvailable(state, action),
      };
    case API_AVAILABLE_RESULT:
      return {
        ...state,
        cursosDisponibles: {
          isFetching: false,
          building: action.building,
          time: action.time,
          listado: action.result,
        },
      };
    case GET_ROOM_INFO:
      return {
        ...state,
        detalleCursos: {
          isFetching: true,
          detalles: state.detalleCursos.detalles,
        }
      };
    case API_ROOM_INFO_RESULT:
      let detail = state.detalleCursos.detalles;
      detail[action.curso] = action.result;
      return {
        ...state,
        detalleCursos: {
          isFetching: false,
          detalles: detail,
        }
      }
    case API_AVAILABLE_ERROR:
    default:
      return state;
  }
};

export default reducer;
