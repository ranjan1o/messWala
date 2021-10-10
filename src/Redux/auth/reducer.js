import {
  LOG_FAILURE,
  LOG_REQUEST,
  LOG_SUCCESS,
  REG_FAILURE,
  REG_REQUEST,
  REG_SUCCESS,
  OUT_FAILURE,
  OUT_REQUEST,
  OUT_SUCCESS,
  MESS_SUCCESS,
  MESS_FAILURE,
  MEAL_SUCCESS,
  MEAL_FAILURE,
  ONEMEAL_SUCCESS
} from "./actionTypes";


const init = { user: {}, Load: false, Error: false, token: "", reg: false, MessProfile: {}, Meal: {}, onemeal: {} };

export const authReducer = (state = { ...init }, { type, payload }) => {

  switch (type) {
    case LOG_REQUEST:
      return {
        ...state,
        Load: true,
        Error: false,
        reg: false,
      };
    case LOG_SUCCESS:
      console.log(payload);
      return {
        ...state,
        Load: false,
        user: payload.user,
        token: payload.token,
      };
    case LOG_FAILURE:
      return {
        ...state,
        Load: false,
        Error: true,
      };
    case REG_REQUEST:
      return {
        ...state,
        Load: true,
        Error: false,
        reg: true,
      };
    case REG_SUCCESS:
      return {
        ...state,
        Load: false,
        user: payload.user,
        token: payload.token,
      };
    case REG_FAILURE:
      return {
        ...state,
        Load: false,
        Error: true,
      };

    case OUT_REQUEST:
      return {
        ...state,
        Load: true,
        Error: false,
      };
    case OUT_SUCCESS:
      return {
        ...state,
        Load: false,
        user: {},
        token: "",
      };
    case OUT_FAILURE:
      return {
        ...state,
        Load: false,
        Error: true,
      };
    case MESS_SUCCESS:
      return {
        ...state,
        MessProfile: payload
      };
    case MESS_FAILURE:
      return {
        ...state,
        Load: false,
        Error: true,
      };
    case MEAL_SUCCESS:
      return {
        ...state,
        Meal: payload
      };
    case MEAL_FAILURE:
      return {
        ...state,
        Load: false,
        Error: true,
      };
    case ONEMEAL_SUCCESS:
      return {
        ...state,
        onemeal: payload
      };
    default:

      return state;
  }
};
