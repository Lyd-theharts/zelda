export interface creatureApi {
  data: creatures[]
  message: string
  status: number
}

export interface creatures {
  category: string
  common_locations?: string[]
  description: string
  dlc: boolean
  drops?: string[]
  edible: boolean
  id: number
  image: string
  name: string
  cooking_effect?: string
  hearts_recovered?: number
}
export interface creatureSingleApi {
  data: creatures
  message: string
  status: number
}


