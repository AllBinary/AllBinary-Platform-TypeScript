
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2011 AllBinary
                *  
                *  By agreeing to this license you and any business entity you represent are
                *  legally bound to the AllBinary Open License Version 1 legal agreement.
                *  
                *  You may obtain the AllBinary Open License Version 1 legal agreement from
                *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
                *  
                *  Created By: Travis Berthelot  
        */
        
        /* Generated Code Do Not Modify */
        













        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { AdvertisementInterface } from "./AdvertisementInterface.js";

export interface AdvertisementsInterface {
        

    public add(advertisementInterface: AdvertisementInterface)

    public get(index: number): AdvertisementInterface

    public getCurrentPageNum(): number

    public getErrorDescription(): string

    public getErrorNum(): string

    public getNumberOfPosters(): number

    public getNumberOfProductsInPage(): number

    public getStatusCode(): number

    public getTotalNumberOfProducts(): number

    public isSearchValid(): boolean

    public setCurrentPageNum(currentPageNum: number)

    public setErrorDescription(errorDescription: string)

    public setErrorNum(errorNum: string)

    public setNumberOfProductsInPage(numberOfProductsInPage: number)

    public setStatusCode(statusCode: number)

    public setTotalNumberOfProducts(totalNumberOfProducts: number)

    public toString(): string

}
                
            

