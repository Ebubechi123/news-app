import { configureStore } from '@reduxjs/toolkit'
import get_latest_news from './slices/get_latest_news'
import get_news from './slices/get_news'
export const store = configureStore({
  reducer: {
    latest_news:get_latest_news,
    news:get_news
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch