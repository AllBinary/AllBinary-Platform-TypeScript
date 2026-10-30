
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
        import { AdvertisementInterface } from './AdvertisementInterface.js';
//sameFolderImports - not GWT import - same folder const AdvertisementInterface

export interface AdvertisementsInterface {
        

    add(advertisementInterface: AdvertisementInterface): void;

    get(index: number): AdvertisementInterface;

    getCurrentPageNum(): number;

    getErrorDescription(): string;

    getErrorNum(): string;

    getNumberOfPosters(): number;

    getNumberOfProductsInPage(): number;

    getStatusCode(): number;

    getTotalNumberOfProducts(): number;

    isSearchValid(): boolean;

    setCurrentPageNum(currentPageNum: number): void;

    setErrorDescription(errorDescription: string): void;

    setErrorNum(errorNum: string): void;

    setNumberOfProductsInPage(numberOfProductsInPage: number): void;

    setStatusCode(statusCode: number): void;

    setTotalNumberOfProducts(totalNumberOfProducts: number): void;

    toString(): string;

}

