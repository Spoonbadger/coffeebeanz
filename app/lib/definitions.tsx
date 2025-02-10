export type CoffeeType = {
  id: string
  created_at: Date
  updated_at: Date
  brand: string
  name: string
  origin: string | null
  description: string
  image: string | null
  purchase_link: string
  price: string
  roast_level: string
  decaf: boolean
  decaf_process: string | null
  bitterValue: number
  nuttyValue: number
  sweetValue: number
  fruityValue: number
  floralValue: number
}

export type Roast = "light" |"medium-light" | "medium" | "medium-dark" | "dark" | ""

