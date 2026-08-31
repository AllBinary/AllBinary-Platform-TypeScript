
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

        


import { HashMap } from '../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { AdvertisementCategoryInterface } from '../../../../../org/allbinary/business/advertisement/search/category/AdvertisementCategoryInterface.js';
      //not GWT import const AdvertisementCategoryInterface = globalThis.org.allbinary.business.advertisement.search.category.AdvertisementCategoryInterface;

      
import { AdvertisementWebsiteInterface } from '../../../../../org/allbinary/business/advertisement/search/website/AdvertisementWebsiteInterface.js';
      //not GWT import const AdvertisementWebsiteInterface = globalThis.org.allbinary.business.advertisement.search.website.AdvertisementWebsiteInterface;

      
import { PriceConstraintInterface } from '../../../../../org/allbinary/logic/control/contraints/price/PriceConstraintInterface.js';
      //not GWT import const PriceConstraintInterface = globalThis.org.allbinary.logic.control.contraints.price.PriceConstraintInterface;

      
import { TwoDimensionalConstraintInterface } from '../../../../../org/allbinary/logic/control/contraints/size/TwoDimensionalConstraintInterface.js';
      //not GWT import const TwoDimensionalConstraintInterface = globalThis.org.allbinary.logic.control.contraints.size.TwoDimensionalConstraintInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface AdvertisementSearchInterface {
        

    getWebSite(): AdvertisementWebsiteInterface

    getCategory(): AdvertisementCategoryInterface

    getSizeConstraints(): TwoDimensionalConstraintInterface

    getPricingConstraints(): PriceConstraintInterface

    getPageNumber(): number

    getProductsPerPage(): number

    getSearchParams(): HashMap<any, any>

    setCategory(advertisementCategoryInterface: AdvertisementCategoryInterface)

    setSizeConstraints(twoDimensionConstraintsInterface: TwoDimensionalConstraintInterface)

    setPricingConstraints(priceConstraintInterface: PriceConstraintInterface)

    setPageNumber(pageNumber: number)

    setProductsPerPage(productsPerPage: number)

    setSearchParams(columnAndKeywordHashMap: HashMap<any, any>)

}



