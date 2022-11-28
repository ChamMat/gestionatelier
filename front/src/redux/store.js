import { configureStore } from '@reduxjs/toolkit';
import chanelsSlice from './chanelsSlice';

export default configureStore({
    reducer: {
        chanels: chanelsSlice,
    },
})