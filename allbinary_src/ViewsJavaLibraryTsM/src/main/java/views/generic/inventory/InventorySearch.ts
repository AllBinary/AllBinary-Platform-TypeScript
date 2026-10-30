
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
        
import { HashMap } from '../../../java/util/HashMap.js';
//not GWT import const HashMap

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { StoreFrontInterface } from '../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
//not GWT import const StoreFrontInterface

import { BasicItemData } from '../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js';
//not GWT import const BasicItemData

import { StaticPagesEntity } from '../../../org/allbinary/data/tables/staticpages/StaticPagesEntity.js';
//not GWT import const StaticPagesEntity

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { SearchParams } from '../../../org/allbinary/logic/control/search/SearchParams.js';
//not GWT import const SearchParams

import { SearchRequest } from '../../../org/allbinary/logic/control/search/SearchRequest.js';
//not GWT import const SearchRequest

import { InputOutputTypeData } from '../../../org/allbinary/logic/io/InputOutputTypeData.js';
//not GWT import const InputOutputTypeData

//not plain js import { AbPathData } 
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;
type AbPathData<T = any, U = any> = typeof AbPathData extends abstract new (...args: any[]) => infer Instance ? Instance : typeof AbPathData;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { StringValidationUtil } from '../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil

import { Replace } from '../../../org/allbinary/logic/string/regex/replace/Replace.js';
//not GWT import const Replace

import { AbeClientInformationInterface } from '../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

import { ServiceClientInformationInterfaceFactory } from '../../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js';
//not GWT import const ServiceClientInformationInterfaceFactory

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { InventoryViewSearchInterface } from '../../../views/admin/inventory/listings/InventoryViewSearchInterface.js';
//not GWT import const InventoryViewSearchInterface

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InventorySearchUtil } from './InventorySearchUtil.js';
//sameFolderImports - not GWT import - same folder const InventorySearchUtil
import { InventorySearchProductUtil } from './InventorySearchProductUtil.js';
//sameFolderImports - not GWT import - same folder const InventorySearchProductUtil

export class InventorySearch
            extends Object
         implements InventoryViewSearchInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    readonly basicItemData: BasicItemData = BasicItemData.getInstance()!;

    private readonly searchRequest: SearchRequest;

public constructor (searchRequest: SearchRequest){
            super();
                    

                            //For kotlin this is before the body of the constructor.
                    
this.searchRequest= searchRequest;
    
}


                //@Throws(Exception.constructor)
            
    public searchSingleStaticPage(): string{

 try { 
    let storeFront: StoreFrontInterface = this.searchRequest!.getStoreFront()!;;
    

    let searchParams: SearchParams = this.searchRequest!.getParams()!;;
    

    let columnValueHashMap: HashMap<any, any> = searchParams!.get()!;;
    

    let file: string = new StaticPagesEntity().getFile(storeFront!.getName(), new Replace("-", CommonSeps.getInstance()!.SPACE).all(columnValueHashMap!.get(this.basicItemData!.KEYWORDS) as string))!;;
    

                        if(StringValidationUtil.getInstance()!.isEmpty(file))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                                    }
                                
                        else {
                            
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(storeFront!.getCurrentHostName());
    
stringBuffer!.append(storeFront!.getCurrentHostNamePath());
    
stringBuffer!.append(storeFront!.getStaticPath());
    
stringBuffer!.append(file);
    
stringBuffer!.append(this.searchRequest!.getParams()!.getEndPage());
    
stringBuffer!.append(AbPathData.getInstance()!.EXTENSION_SEP);
    
stringBuffer!.append(InputOutputTypeData.getInstance()!.DEFAULT);
    

    let filePath: string = new Replace(CommonSeps.getInstance()!.SPACE, "%20").all(stringBuffer!.toString())!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return filePath;
    

                        }
                            
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PRODUCTSEARCHLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "searchSingleStaticPage", e);
    

                                    }
                                



                            throw new Exception("Failed retrieve Single Product Page Static");
                    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public searchSingleDynamicPage(): string{

 try { 
    let str: string[] = this.search()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return str[this.searchRequest!.getParams()!.getStartPageInt()!.intValue()]!;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PRODUCTSEARCHLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "searchSingleDynamicPage", e);
    

                                    }
                                



                            throw new Exception("Failed retrieve Single Product Page Dynamically");
                    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public search(): string[]{

    let abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;;
    

    let inventorySearchUtil: InventorySearchUtil = InventorySearchUtil.getInstance()!;;
    

    let vector: BasicArrayList = inventorySearchUtil!.getBasicItemIdColumn(this.searchRequest)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inventorySearchUtil!.search(abeClientInformation, searchRequest, vector);;
    
}


                //@Throws(Exception.constructor)
            
    public getProduct(product: string): string{

    let abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return InventorySearchProductUtil.getInstance()!.getProduct(abeClientInformation, this.searchRequest, product);;
    
}


}

