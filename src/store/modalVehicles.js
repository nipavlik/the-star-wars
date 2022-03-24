import { atom, selector } from 'recoil'

export const modalVehiclesVisible = atom({
  key: 'modalVehiclesVisible',
  default: false
})

export const modalVehiclesLoading = atom({
  key: 'modalVehiclesLoading',
  default: true
})

export const modalVehiclesData = atom({
  key: 'modalVehiclesData',
  default: []
})