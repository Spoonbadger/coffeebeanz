export type Coffee = {
  id: string,
  brand: string,
  name: string,
  roast: Roast,
  description: string
  fruity_count: number
  bitter_count: number
}

type Roast = "light" |"medium-light" | "medium" | "medium-dark" | "dark" 