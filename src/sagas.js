import { eventChannel } from 'redux-saga';
import { fork, take, call, put, cancel } from 'redux-saga/effects';
import io from 'socket.io-client';
import { receiveMessage } from './actions';

function connect() {
  const socket = io('http://localhost:3000');
  return new Promise((resolve) => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
}

function subscribe(socket) {
  return eventChannel((emit) => {
    socket.on('message', ({ message }) => {
      emit(receiveMessage({ message }));
    });
    return () => {};
  });
}

function* read(socket) {
  const channel = yield call(subscribe, socket);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

function* write(socket) {
  while (true) {
    const { payload } = yield take('SEND_MESSAGE');
    socket.emit('message', payload);
  }
}

function* handleMessage(socket) {
  yield fork(read, socket);
  yield fork(write, socket);
}

function* handleUser() {
  while (true) {
    yield take('ENTER_ROOM');
    const socket = yield call(connect);

    const task = yield fork(handleMessage, socket);

    yield take('LEAVE_ROOM');
    yield cancel(task);
  }
}

export default function* rootSage() {
  yield fork(handleUser);
}
