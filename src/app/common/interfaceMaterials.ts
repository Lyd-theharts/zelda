export interface materialsApi {
  data: materials[]
  message: string
  status: number
}

export interface materials {
  category: string
  common_locations: string[]
  cooking_effect: string
  description: string
  dlc: boolean
  hearts_recovered: number
  id: number
  image: string
  name: string
}
export interface materialSigleApi {
  data: materials
  message: string
  status: number
}

