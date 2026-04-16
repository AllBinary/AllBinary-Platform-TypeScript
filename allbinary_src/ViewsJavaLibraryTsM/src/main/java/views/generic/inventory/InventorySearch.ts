
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
        



import { HashMap } from "../../../java/util/HashMap.js";

    
import { Vector } from "../../../java/util/Vector.js";

    
import { StoreFrontInterface } from "../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { BasicItemData } from "../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js";

    
import { StaticPagesEntity } from "../../../org/allbinary/data/tables/staticpages/StaticPagesEntity.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { SearchParams } from "../../../org/allbinary/logic/control/search/SearchParams.js";

    
import { SearchRequest } from "../../../org/allbinary/logic/control/search/SearchRequest.js";

    
import { InputOutputTypeData } from "../../../org/allbinary/logic/io/InputOutputTypeData.js";

    
import { AbPathData } from "../../../org/allbinary/logic/io/path/AbPathData.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringValidationUtil } from "../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { Replace } from "../../../org/allbinary/logic/string/regex/replace/Replace.js";

    
import { AbeClientInformationInterface } from "../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { ServiceClientInformationInterfaceFactory } from "../../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js";

    
import { CommonSeps } from "../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    
import { InventoryViewSearchInterface } from "../../../views/admin/inventory/listings/InventoryViewSearchInterface.js";

    

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { InventorySearchUtil } from "./InventorySearchUtil.js";

import { InventorySearchProductUtil } from "./InventorySearchProductUtil.js";

export class InventorySearch
            extends Object
        
                , InventoryViewSearchInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly searchRequest: SearchRequest
public constructor (searchRequest: SearchRequest)                        

                            : super(){

            super();
            var searchRequest = searchRequest


                            //For kotlin this is before the body of the constructor.
                    
this.searchRequest= searchRequest;
    
}


                //@Throws(Error::class)
            
    public searchSingleStaticPage(): string{

        try {
            
    var storeFront: StoreFrontInterface = this.searchRequest!.getStoreFront()!;
        
        
;
    

    var searchParams: SearchParams = this.searchRequest!.getParams()!;
        
        
;
    

    var columnValueHashMap: HashMap<any, any> = searchParams!.get()!;
        
        
;
    

    var file: string = new StaticPagesEntity().
                            getFile(storeFront!.getName(), new Replace("-", CommonSeps.getInstance()!.SPACE).
                            all(columnValueHashMap!.get(BasicItemData.KEYWORDS);

                         as String))!;
        
        
;
    

                        if(StringValidationUtil.getInstance()!.isEmpty(file))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                                    }
                                
                        else {
                            
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(storeFront!.getCurrentHostName());
    
stringBuffer!.append(storeFront!.getCurrentHostNamePath());
    
stringBuffer!.append(storeFront!.getStaticPath());
    
stringBuffer!.append(file);
    
stringBuffer!.append(this.searchRequest!.getParams()!.getEndPage());
    
stringBuffer!.append(AbPathData.getInstance()!.EXTENSION_SEP);
    
stringBuffer!.append(InputOutputTypeData.getInstance()!.DEFAULT);
    

    var filePath: string = new Replace(CommonSeps.getInstance()!.SPACE, "%20").
                            all(stringBuffer!.toString())!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return filePath;
    

                        }
                            

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PRODUCTSEARCHLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "searchSingleStaticPage", e);
    

                                    }
                                



                            throw new Error("Failed retrieve Single Product Page Static")
}

}


                //@Throws(Error::class)
            
    public searchSingleDynamicPage(): string{

        try {
            
    var str: string[] = search()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return str[this.searchRequest!.getParams()!.getStartPageInt()!.toInt()]!;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PRODUCTSEARCHLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "searchSingleDynamicPage", e);
    

                                    }
                                



                            throw new Error("Failed retrieve Single Product Page Dynamically")
}

}


                //@Throws(Error::class)
            
    public search(): string[]{

    var abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;
        
        
;
    

    var inventorySearchUtil: InventorySearchUtil = InventorySearchUtil.getInstance()!;
        
        
;
    

    var vector: Vector = inventorySearchUtil!.getBasicItemIdColumn(searchRequest)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inventorySearchUtil!.search(abeClientInformation, searchRequest, vector);

                        ;
    
}


                //@Throws(Error::class)
            
    public getProduct(product: string): string{
var product = product

    var abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return InventorySearchProductUtil.getInstance()!.getProduct(abeClientInformation, searchRequest, product);

                        ;
    
}


}
                
            

