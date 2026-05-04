
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
        



            import { Object } from '../../../../java/lang/Object.js';


        

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AdvertisementInterface } from './AdvertisementInterface.js';

export interface AdvertisementsInterface {
        

    add(advertisementInterface: AdvertisementInterface)

    get(index: number): AdvertisementInterface

    getCurrentPageNum(): number

    getErrorDescription(): string

    getErrorNum(): string

    getNumberOfPosters(): number

    getNumberOfProductsInPage(): number

    getStatusCode(): number

    getTotalNumberOfProducts(): number

    isSearchValid(): boolean

    setCurrentPageNum(currentPageNum: number)

    setErrorDescription(errorDescription: string)

    setErrorNum(errorNum: string)

    setNumberOfProductsInPage(numberOfProductsInPage: number)

    setStatusCode(statusCode: number)

    setTotalNumberOfProducts(totalNumberOfProducts: number)

    toString(): string

}
                
            

