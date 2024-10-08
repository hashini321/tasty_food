
import * as actionTypes from "./RestaurantActionTypes"

const initialState = {
    restaurants: [],
    usersRestaurant: null,
    restaurant: null,
    loading: false,
    error: null,
    events: [],
    restaurantsEvents: [],
    categories: [],
};

const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_RESTAURANTS_REQUEST:
        case actionTypes.GET_ALL_RESTAURANTS_REQUEST:
        case actionTypes.DELETE_EVENTS_REQUEST:
        case actionTypes.UPDATE_RESTAURANTS_REQUEST:
        case actionTypes.GET_RESTAURANTS_BY_ID_REQUEST:
        case actionTypes.CREATE_CATEGORY_REQUEST:
            return{
                ...state,
                loading: true,
                error: null,
            };
        case actionTypes.CREATE_RESTAURANTS_SUCCESS:
            return{
                ...state,
                loading: false,
                usersRestaurant: action.payload,
            };
        case actionTypes.GET_ALL_RESTAURANTS_SUCCESS:
            return{
                ...state,
                loading: false,
                restaurants: action.payload,
            };
        case actionTypes.GET_RESTAURANTS_BY_ID_SUCCESS:
            return{
                ...state,
                loading: false,
                restaurant:action.payload,
            };
        case actionTypes.GET_RESTAURANTS_BY_USER_ID_SUCCESS:
        case actionTypes.UPDATE_RESTAURANTS_STATUS_SUCCESS:
        case actionTypes.UPDATE_RESTAURANTS_SUCCESS:
            return{
                ...state,
                loading: false,
                usersRestaurant: action.payload,
            };
        case actionTypes.DELETE_RESTAURANTS_SUCCESS:
            return{
                ...state,
                error: null,
                loading: false,
                restaurants: state.restaurants.filter(
                    (item)=> item.id !== action.payload
                ),
                usersRestaurant: state.usersRestaurant.filter(
                    (item) => item.id !== action.payload
                ),
            };
        case actionTypes.CREATE_EVENTS_SUCCESS:
            return{
                ...state,
                loading: false,
                events: [...state.events, action.payload],
                restaurantsEvents: [...state.restaurantsEvents, action.payload],
            };
        case actionTypes.GET_ALL_EVENTS_SUCCESS:
            return{
                ...state,
                loading: false,
                events: action.payload,

            };
        case actionTypes.GET_RESTAURANTS_EVENTS_SUCCESS:
            return{
                ...state,
                loading: false,
                events: state.events.filter((item) => item.id !== action.payload),
                restaurantsEvents: state.restaurantsEvents.filter(
                    (item)=> item.id !== action.payload
                ),

            };
        case actionTypes.CREATE_CATEGORY_SUCCESS:
            return{
                ...state,
                loading: false,
                categories: [...state.categories, action.payload],
            };
        case actionTypes.GET_RESTAURANTS_CATEGORY_SUCCESS:
            return{
                ...state,
                loading: false,
                categories: action.payload,
            };
        case actionTypes.CREATE_RESTAURANTS_FAITURE:
        case actionTypes.GET_ALL_RESTAURANTS_FAITURE:
        case actionTypes.DELETE_RESTAURANTS_FAITURE:
        case actionTypes.UPDATE_RESTAURANTS_FAITURE:
        case actionTypes.GET_RESTAURANTS_BY_ID_FAITURE:
        case actionTypes.CREATE_EVENTS_FAITURE:
        case actionTypes.CREATE_CATEGORY_FAITURE:
            return{
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;

    }
};

export default restaurantReducer;

