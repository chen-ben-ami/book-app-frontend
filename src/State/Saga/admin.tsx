import { take, call, put } from 'redux-saga/effects';



export function* watchCurrentLocationKeyRequest() {
    while (true) {
        yield console.log("test")
    }
}
