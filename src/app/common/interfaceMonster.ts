export interface monstersApi {
  data: monsters[]
  message: string
  status: number
}

export interface monsters {
  category: string
  common_locations?: string[]
  description: string
  dlc: boolean
  drops?: string[]
  id: number
  image: string
  name: string
}

export interface monsterSingleApi {
  data: monsters
  message: string
  status: number
}


