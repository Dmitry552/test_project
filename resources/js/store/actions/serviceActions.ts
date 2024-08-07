import {$http} from "../../utils/http";
import {IGetService, IGetServices} from "./types";
import {TAddServiceData} from "../../types/types";

export async function getServices(): Promise<IGetServices> {
    return new Promise((resolve, reject) => {
        $http.get<IGetServices>('/api/').then(({data}) => {
            resolve(data.data)
        }).catch(e => {
            reject(e);
        });
    })
}

export async function addService(data: TAddServiceData): Promise<IGetService> {
    return new Promise((resolve, reject) => {
        $http.post<IGetService>('/api/', data).then(({data}) => {
            resolve(data)
        }).catch(e => {
            reject(e);
        });
    })
}

export async function deleteService(data: number): Promise<void> {
    return new Promise((resolve, reject) => {
        $http.delete(`/api/${data}`).then(() => {
            resolve();
        }).catch(e => {
            reject(e);
        });
    })
}
