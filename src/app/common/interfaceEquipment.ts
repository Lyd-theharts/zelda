export interface equipmentApi {
  data: equipments[]
  message: string
  status: number
}

export interface equipments {
  category: string
  common_locations?: string[]
  description: string
  dlc: boolean
  id: number
  image: string
  name: string
  properties?: Properties
}

export interface Properties {
  attack?: number
  defense?: number
}

export interface equipmentSingleApi {
  data: equipments
  message: string
  status: number
}
