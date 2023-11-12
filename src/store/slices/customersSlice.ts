import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICustomers, ICustomersState } from "./customersTypes";

const initialState:ICustomersState = {
    customers:[],
    currentData:null,
}
const customersSlice = createSlice({
    name:"customersSlice",
    initialState,
    reducers:{
        deleteCustomer:(state,{payload}:PayloadAction<string>) =>{
            state.customers = state.customers.filter(el=>el.id !== payload);
            state.currentData = null

        },
        addCustomer:(state,{payload}) => {
            state.customers.push(payload)
            state.currentData = null
        },
        setCurrentData:(state,{payload}:PayloadAction<ICustomers | null>)=>{
            state.currentData = payload
            
          
        },
        changeCurrentItem:(state,{payload})  => {
            const id = state.currentData?.id
            const index = state.customers.findIndex(el=>el.id === id);
            state.customers[index] = {
                ...state.customers[index],
                ...payload
            }
            state.currentData = null
       
        },
       
        
    }
})
export default customersSlice;
export const {deleteCustomer,addCustomer,setCurrentData,changeCurrentItem} = customersSlice.actions