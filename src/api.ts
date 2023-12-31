/**
 * Generated by orval v6.21.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import axios from 'axios'
import type {
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import type {
  Pet
} from './models'




  export const getPet = <TData = AxiosResponse<Pet>>(
     options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/pet`,options
    );
  }

export type GetPetResult = AxiosResponse<Pet>
