import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export type BearState = {
  bears: number
}
export type BearActions = {
  increase: (by?: number) => void
  decrease: (by?: number) => void
  reset: (to?: number) => void
}

export const useBearStore = create<BearState & BearActions>()(
  devtools(
    persist(
      (set) => ({
        bears: 0,
        increase: (by) => set((state) => ({ bears: state.bears + (by || 1) })),
        decrease: (by?) =>
          set((state) => {
            if (state.bears > 0) {
              return {
                bears: state.bears - ((by! <= state.bears ? by : 0) || 1)
              }
            } else {
              return { bears: state.bears }
            }
          }),
        reset: (to) => set((state) => ({ bears: (state.bears = to || 0) }))
      }),
      {
        name: 'bear-storage'
      }
    )
  )
)
