export interface IGetServices {
    data: IGetService[]
}

export interface IGetService {
    id: number
    title: string
    description: string
    icon: string | null
    created_at: string
    updated_at: string
}
