export interface treasureApi {
  data: treasures[]
  message: string
  status: number
}

export interface treasures {
  category: string
  common_locations: string[]
  description: string
  dlc: boolean
  drops: string[]
  id: number
  image: string
  name: string
}
export interface treasureSingleApi{
  data: treasures
  message: string
  status: number
}



