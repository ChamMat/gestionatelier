import { configureStore } from '@reduxjs/toolkit';
import chanelsSlice from './chanelsSlice';
import currentUser from './currentUser';
import messagesSlice from './messagesSlice';
import usersSlice from './usersSlice';

export default configureStore({
    reducer: {
        chanels: chanelsSlice,
        messages: messagesSlice,
        users: usersSlice,
        currentUser: currentUser
    },
})