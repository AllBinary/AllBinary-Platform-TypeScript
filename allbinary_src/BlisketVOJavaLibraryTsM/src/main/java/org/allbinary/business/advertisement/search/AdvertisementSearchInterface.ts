
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
        



import { HashMap } from "../../../../../java/util/HashMap.js";

    
import { AdvertisementCategoryInterface } from "../../../../../org/allbinary/business/advertisement/search/category/AdvertisementCategoryInterface.js";

    
import { AdvertisementWebsiteInterface } from "../../../../../org/allbinary/business/advertisement/search/website/AdvertisementWebsiteInterface.js";

    
import { PriceConstraintInterface } from "../../../../../org/allbinary/logic/control/contraints/price/PriceConstraintInterface.js";

    
import { TwoDimensionalConstraintInterface } from "../../../../../org/allbinary/logic/control/contraints/size/TwoDimensionalConstraintInterface.js";

    

interface AdvertisementSearchInterface {
        

    public getWebSite(): AdvertisementWebsiteInterface

    public getCategory(): AdvertisementCategoryInterface

    public getSizeConstraints(): TwoDimensionalConstraintInterface

    public getPricingConstraints(): PriceConstraintInterface

    public getPageNumber(): number

    public getProductsPerPage(): number

    public getSearchParams(): HashMap<Any, Any>

    public setCategory(advertisementCategoryInterface: AdvertisementCategoryInterface)

    public setSizeConstraints(twoDimensionConstraintsInterface: TwoDimensionalConstraintInterface)

    public setPricingConstraints(priceConstraintInterface: PriceConstraintInterface)

    public setPageNumber(pageNumber: number)

    public setProductsPerPage(productsPerPage: number)

    public setSearchParams(columnAndKeywordHashMap: HashMap<Any, Any>)

}
                
            

