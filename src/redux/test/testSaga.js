import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { SET_CITY } from './testSlice';

const API_URL = process.env.REACT_APP_BASE_URL;
console.log(API_URL);

async function getCountry() {
    const response = await axios.get(`${API_URL}/country`)
    return response.data
}


function* callGetCityAPI() {
    const resp = yield call(getCountry)
    yield put(SET_CITY(resp))
}


function* getCity() {
    try {
        yield takeEvery('test/FETCH_CITY', callGetCityAPI);
    }
    catch (error) {
        console.log(error);
    }
}

export default getCity;