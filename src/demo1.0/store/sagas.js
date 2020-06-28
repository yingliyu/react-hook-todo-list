import { takeEvery, put } from "redux-saga/effects"
import  { GET_INIT_LIST } from "./actionType"
import { initListAction } from "./actionCreators";
import axios from 'axios'

function* getInitList () {
  try {
    const res = yield axios.get('http://rap2api.taobao.org/app/mock/234025/todo/getlist')
    console.log(res)
    const action = initListAction(res.data.list)
    yield put(action)
  } catch (error) {
    console.log(error)
  }
}

// generator 函数
function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList)
}

export default mySaga