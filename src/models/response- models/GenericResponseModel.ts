import {TodoBasicModel} from "../basic-models/TodoBasicModel";

export interface GenericResponseModel<T>{
    limit: number;
    skip: number;
    total: number
   data:T[]
}