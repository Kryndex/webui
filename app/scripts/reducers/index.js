import {combineReducers} from 'redux'
import {reducer as toastr} from 'react-redux-toastr'

import id from './id'
import peers from './peers'
import files from './files'
import config from './config'
import logs from './logs'
import errors from './errors'
import router from './router'

const rootReducer = combineReducers({
  id,
  peers,
  files,
  logs,
  errors,
  config,
  router,
  toastr
})

export default rootReducer