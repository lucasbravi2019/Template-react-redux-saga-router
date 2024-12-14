import { put, select, takeLatest } from "redux-saga/effects";
import { runGetData, setData } from "./example-slice";
import { selectItems } from "./selectors";



export function* getDataSaga() {
    const data = [{
        "id": 1,
        "name": "Article 1",
        "price": 123.54,
        "quantity": 2
    }]
    console.log("Running saga");
    
    yield put(setData(data))    
}

export default function* defaultSaga() {
    yield takeLatest(runGetData.type, getDataSaga)
};