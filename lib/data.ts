export interface Product {
  id: string
  title: string
  description: string
  category: string
  supplier: string
  serialNumber: string
  price: number
  originalPrice?: number
  image: string
  addedBy: string
  date: string
  type?: "product" | "accessory" | "spare-part"
}

export interface Supplier {
  id: string
  name: string
  contact: string
  phone: string
  email: string
  address: string
  rating: number
  image: string
  category: string
  country: string
  industry: string
  serialNumber: string
  description: string
  status: "enable" | "disable"
  addedBy: string
}

export interface Client {
  id: string
  name: string
  contact: string
  phone: string
  email: string
  address: string
  type: string
  image: string
  country: string
  industry: string
  serialNumber: string
  description: string
  status: "enable" | "disable"
  addedBy: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  points: number
}

export interface Request {
  id: string
  title: string
  applicant: string
  executor: string
  status: "pending" | "in-progress" | "completed"
}

// Initial Data
export const productsData: Product[] = []

export const suppliersData: Supplier[] = []

export const clientsData: Client[] = []

export const teamMembers: TeamMember[] = []

export const requestsData: Request[] = []

// Helper functions to simulate database operations
export const getProducts = () => productsData
export const getSuppliers = () => suppliersData
export const getClients = () => clientsData
export const getTeamMembers = () => teamMembers
export const getRequests = () => requestsData

export const addProduct = (product: Product) => {
  productsData.push(product)
}

export const addSupplier = (supplier: Supplier) => {
  suppliersData.push(supplier)
}

export const addClient = (client: Client) => {
  clientsData.push(client)
}
