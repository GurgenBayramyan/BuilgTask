import { ICustomers } from "../store/slices/customersTypes"

export const findDeletedObj = (arr:ICustomers[],id:string) => {
    return arr.filter(el => el.id !== id)
}

