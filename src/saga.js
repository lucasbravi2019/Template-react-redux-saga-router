import { all } from 'redux-saga/effects'
import defaultSaga from './pages/home/saga'

export default function* rootSaga() {
    yield all([
        defaultSaga()
    ]);
}