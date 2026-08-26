
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
        



//not game specific package import { HashMap } from '../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { AdvertisementCategoryInterface } from '../../../../../org/allbinary/business/advertisement/search/category/AdvertisementCategoryInterface.js';
      const AdvertisementCategoryInterface = globalThis.org.allbinary.business.advertisement.search.category.AdvertisementCategoryInterface;

      
//not game specific package import { AdvertisementWebsiteInterface } from '../../../../../org/allbinary/business/advertisement/search/website/AdvertisementWebsiteInterface.js';
      const AdvertisementWebsiteInterface = globalThis.org.allbinary.business.advertisement.search.website.AdvertisementWebsiteInterface;

      
//not game specific package import { PriceConstraintInterface } from '../../../../../org/allbinary/logic/control/contraints/price/PriceConstraintInterface.js';
      const PriceConstraintInterface = globalThis.org.allbinary.logic.control.contraints.price.PriceConstraintInterface;

      
//not game specific package import { TwoDimensionalConstraintInterface } from '../../../../../org/allbinary/logic/control/contraints/size/TwoDimensionalConstraintInterface.js';
      const TwoDimensionalConstraintInterface = globalThis.org.allbinary.logic.control.contraints.size.TwoDimensionalConstraintInterface;

      
















                                        
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
                
            

