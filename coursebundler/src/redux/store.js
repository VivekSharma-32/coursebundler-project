import { configureStore } from '@reduxjs/toolkit';
import {
  profileReducer,
  userReducer,
  subscriptionReducer,
} from './Reducers/userReducer';
import { courseReducer } from './Reducers/courseReducer';

export const server = 'http://localhost:4000/api/v1';

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    course: courseReducer,
    subscription: subscriptionReducer,
  },
});

export default store;
