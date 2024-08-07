export type TService = {
    id: number
    title: string
    description: string
    icon: string | null
    created_at: string
    updated_at: string
}

export type TAddServiceData = {
    title: string,
    description: string
}
