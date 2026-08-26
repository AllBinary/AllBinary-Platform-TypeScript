
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
        



            import { Object } from '../../../java/lang/Object.js';
        
            import { Exception } from '../../../java/lang/Exception.js';
        
//not game specific package import { HashMap } from '../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { Vector } from '../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { StoreFrontInterface } from '../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
//not game specific package import { BasicItemData } from '../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js';
      const BasicItemData = globalThis.org.allbinary.business.user.commerce.inventory.item.BasicItemData;

      
//not game specific package import { StaticPagesEntity } from '../../../org/allbinary/data/tables/staticpages/StaticPagesEntity.js';
      const StaticPagesEntity = globalThis.org.allbinary.data.tables.staticpages.StaticPagesEntity;

      
//not game specific package import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { SearchParams } from '../../../org/allbinary/logic/control/search/SearchParams.js';
      const SearchParams = globalThis.org.allbinary.logic.control.search.SearchParams;

      
//not game specific package import { SearchRequest } from '../../../org/allbinary/logic/control/search/SearchRequest.js';
      const SearchRequest = globalThis.org.allbinary.logic.control.search.SearchRequest;

      
//not game specific package import { InputOutputTypeData } from '../../../org/allbinary/logic/io/InputOutputTypeData.js';
      const InputOutputTypeData = globalThis.org.allbinary.logic.io.InputOutputTypeData;

      
//not game specific package import { AbPathData } from '../../../org/allbinary/logic/io/path/AbPathData.js';
      const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;

      
//not game specific package import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringValidationUtil } from '../../../org/allbinary/logic/string/StringValidationUtil.js';
      const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
//not game specific package import { Replace } from '../../../org/allbinary/logic/string/regex/replace/Replace.js';
      const Replace = globalThis.org.allbinary.logic.string.regex.replace.Replace;

      
//not game specific package import { AbeClientInformationInterface } from '../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not game specific package import { ServiceClientInformationInterfaceFactory } from '../../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js';
      const ServiceClientInformationInterfaceFactory = globalThis.org.allbinary.logic.system.security.licensing.ServiceClientInformationInterfaceFactory;

      
//not game specific package import { CommonSeps } from '../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not game specific package import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { InventoryViewSearchInterface } from '../../../views/admin/inventory/listings/InventoryViewSearchInterface.js';
      const InventoryViewSearchInterface = globalThis.views.admin.inventory.listings.InventoryViewSearchInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InventorySearchUtil } from './InventorySearchUtil.js';
import { InventorySearchProductUtil } from './InventorySearchProductUtil.js';

export class InventorySearch
            extends Object
         implements InventoryViewSearchInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly searchRequest: SearchRequest;

public constructor (searchRequest: SearchRequest){
            super();
                    

                            //For kotlin this is before the body of the constructor.
                    
this.searchRequest= searchRequest;
    
}


                //@Throws(Exception.constructor)
            
    public searchSingleStaticPage(): string{

        try {
            
    var storeFront: StoreFrontInterface = this.searchRequest!.getStoreFront()!;;
    

    var searchParams: SearchParams = this.searchRequest!.getParams()!;;
    

    var columnValueHashMap: HashMap<any, any> = searchParams!.get()!;;
    

    var file: string = new StaticPagesEntity().getFile(storeFront!.getName(), new Replace("-", CommonSeps.getInstance()!.SPACE).all(columnValueHashMap!.get(BasicItemData.KEYWORDS) as string))!;;
    

                        if(StringValidationUtil.getInstance()!.isEmpty(file))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                                    }
                                
                        else {
                            
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(storeFront!.getCurrentHostName());
    
stringBuffer!.append(storeFront!.getCurrentHostNamePath());
    
stringBuffer!.append(storeFront!.getStaticPath());
    
stringBuffer!.append(file);
    
stringBuffer!.append(this.searchRequest!.getParams()!.getEndPage());
    
stringBuffer!.append(AbPathData.getInstance()!.EXTENSION_SEP);
    
stringBuffer!.append(InputOutputTypeData.getInstance()!.DEFAULT);
    

    var filePath: string = new Replace(CommonSeps.getInstance()!.SPACE, "%20").all(stringBuffer!.toString())!;;
    



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
                                



                            throw new Exception("Failed retrieve Single Product Page Static");
                    
}

}


                //@Throws(Exception.constructor)
            
    public searchSingleDynamicPage(): string{

        try {
            
    var str: string[] = this.search()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return str[this.searchRequest!.getParams()!.getStartPageInt()!.intValue()]!;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PRODUCTSEARCHLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "searchSingleDynamicPage", e);
    

                                    }
                                



                            throw new Exception("Failed retrieve Single Product Page Dynamically");
                    
}

}


                //@Throws(Exception.constructor)
            
    public search(): string[]{

    var abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;;
    

    var inventorySearchUtil: InventorySearchUtil = InventorySearchUtil.getInstance()!;;
    

    var vector: Vector = inventorySearchUtil!.getBasicItemIdColumn(this.searchRequest)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inventorySearchUtil!.search(abeClientInformation, searchRequest, vector);;
    
}


                //@Throws(Exception.constructor)
            
    public getProduct(product: string): string{

    var abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return InventorySearchProductUtil.getInstance()!.getProduct(abeClientInformation, this.searchRequest, product);;
    
}


}
                
            

