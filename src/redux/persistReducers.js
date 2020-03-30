import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'xp-teste',
      storage,
      whitelist: ['token']
    },
    reducers
  );

  return persistedReducer;
};
