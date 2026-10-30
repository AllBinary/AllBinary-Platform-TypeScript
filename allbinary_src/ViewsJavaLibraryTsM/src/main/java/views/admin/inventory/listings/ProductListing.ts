
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
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../java/lang/Integer.js';
        
import { HashMap } from '../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { HashSet } from '../../../../java/util/HashSet.js';
//not GWT import const HashSet

import { Set } from '../../../../java/util/Set.js';
//not GWT import const Set

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { StoreFrontInterface } from '../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
//not GWT import const StoreFrontInterface

import { BasicItemData } from '../../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js';
//not GWT import const BasicItemData

import { StoreFrontsEntity } from '../../../../org/allbinary/data/tables/context/module/storefronts/StoreFrontsEntity.js';
//not GWT import const StoreFrontsEntity

import { StaticPagesEntity } from '../../../../org/allbinary/data/tables/staticpages/StaticPagesEntity.js';
//not GWT import const StaticPagesEntity

import { InventoryEntity } from '../../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntity.js';
//not GWT import const InventoryEntity

import { GLOBALS2 } from '../../../../org/allbinary/globals/GLOBALS2.js';
//not GWT import const GLOBALS2

import { URLGLOBALS } from '../../../../org/allbinary/globals/URLGLOBALS.js';
//not GWT import const URLGLOBALS

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { SearchParams } from '../../../../org/allbinary/logic/control/search/SearchParams.js';
//not GWT import const SearchParams

import { SearchRequest } from '../../../../org/allbinary/logic/control/search/SearchRequest.js';
//not GWT import const SearchRequest

import { AbDataOutputStream } from '../../../../org/allbinary/logic/io/AbDataOutputStream.js';
//not GWT import const AbDataOutputStream

import { DataOutputStreamFactory } from '../../../../org/allbinary/logic/io/DataOutputStreamFactory.js';
//not GWT import const DataOutputStreamFactory

import { InputOutputTypeData } from '../../../../org/allbinary/logic/io/InputOutputTypeData.js';
//not GWT import const InputOutputTypeData

import { StreamUtil } from '../../../../org/allbinary/logic/io/StreamUtil.js';
//not GWT import const StreamUtil

import { AbFile } from '../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile

import { Directory } from '../../../../org/allbinary/logic/io/file/directory/Directory.js';
//not GWT import const Directory

import { AbPath } from '../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath

//not plain js import { AbPathData } 
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;
type AbPathData<T = any, U = any> = typeof AbPathData extends abstract new (...args: any[]) => infer Instance ? Instance : typeof AbPathData;

import { SpecialCharacterUtil } from '../../../../org/allbinary/logic/string/SpecialCharacterUtil.js';
//not GWT import const SpecialCharacterUtil

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { Replace } from '../../../../org/allbinary/logic/string/regex/replace/Replace.js';
//not GWT import const Replace

import { UniqueTokens } from '../../../../org/allbinary/logic/string/tokens/UniqueTokens.js';
//not GWT import const UniqueTokens

import { AbeClientInformationInterface } from '../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

import { ServiceClientInformationInterfaceFactory } from '../../../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js';
//not GWT import const ServiceClientInformationInterfaceFactory

//not plain js import { CommonPhoneStrings } 
const CommonPhoneStrings = globalThis.org.allbinary.string.CommonPhoneStrings;
type CommonPhoneStrings<T = any, U = any> = typeof CommonPhoneStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonPhoneStrings;

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

import { InventoryColumnUtil } from '../../../../views/generic/inventory/InventoryColumnUtil.js';
//not GWT import const InventoryColumnUtil

import { InventorySearchUtil } from '../../../../views/generic/inventory/InventorySearchUtil.js';
//not GWT import const InventorySearchUtil

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ProductListingInterface } from './ProductListingInterface.js';
//not GWT import - same folder const ProductListingInterface

export class ProductListing
            extends Object
         implements ProductListingInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly directory: Directory = Directory.getInstance()!;

    readonly basicItemData: BasicItemData = BasicItemData.getInstance()!;

    private readonly storeFronts: StoreFrontsEntity;

    private readonly staticPages: StaticPagesEntity;

    private readonly inventory: InventoryEntity;

    private readonly searchRequest: SearchRequest;

    private readonly INVENTORY: string = ".InventoryView";

public constructor (searchRequest: SearchRequest){

            super();
        this.searchRequest= searchRequest;
    
this.storeFronts= new StoreFrontsEntity();
    
this.staticPages= new StaticPagesEntity();
    
this.inventory= new InventoryEntity();
    
}


                //@Throws(Exception.constructor)
            
    getHashSet(storeFront: StoreFrontInterface): HashSet{

    let inventoryColumnUtil: InventoryColumnUtil = InventoryColumnUtil.getInstance()!;;
    

    let keywords: BasicArrayList = inventoryColumnUtil!.getColumnWhereLike(this.inventory, storeFront!.getCategoryPath(), this.basicItemData!.KEYWORDS)!;;
    

    let subStoreVector: BasicArrayList = storeFront!.getSubStores()!;;
    

    let size: number = subStoreVector!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let subStore: string = subStoreVector!.get(index) as string;;
    

    let substoreKeywords: BasicArrayList = inventoryColumnUtil!.getColumnWhereLike(this.inventory, AbPathData.getInstance()!.SEPARATOR +subStore, this.basicItemData!.CATEGORY)!;;
    
keywords.addAllList(substoreKeywords);
    
}


    let uniqueTokens: UniqueTokens = new UniqueTokens();;
    

    let keywordHashSet: HashSet = uniqueTokens!.getWhithoutDashesAndSkipNumberOnlyTokens(keywords)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keywordHashSet;
    
}


                //@Throws(Exception.constructor)
            
    savePage(file: string, data: string){

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.STATICPAGEGENERATIONLOGGING))
                        
                                    {
                                    this.logUtil!.putF("Creating File: " +file, this, "generateAll()");
    

                                    }
                                

    let newFile: AbFile = AbFile.createAbFile(file)!;;
    

                        if(newFile!.exists())
                        
                                    {
                                    newFile!.delete();
    

                                    }
                                
newFile!.createNewFile();
    

                        if(newFile!.exists())
                        
                                    {
                                    
    let idOutData: AbDataOutputStream = DataOutputStreamFactory.getInstance()!.getInstanceForAbFile(newFile)!;;
    
idOutData!.writeBytes(data);
    
idOutData!.flush();
    
StreamUtil.getInstance()!.close(idOutData);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.STATICPAGEGENERATIONLOGGING))
                        
                                    {
                                    this.logUtil!.putF("Wrote Total Bytes: " +newFile!.length(), this, "generateAll()");
    

                                    }
                                

                                    }
                                
                        else {
                            


                            throw new Exception("Could Not Create: " +file);
                    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    create(keywordData: string, keywordFilenameHashMap: HashMap<any, any>, vector: BasicArrayList, staticPath: AbPath){

    let stringBuffer: StringMaker = new StringMaker();;
    

    let hashMap: HashMap<any, any> = SpecialCharacterUtil.getHashMap()!;;
    
hashMap!.put(CommonSeps.getInstance()!.SPACE, StringUtil.getInstance()!.EMPTY_STRING);
    

    let pageName: string = new Replace(hashMap).all(keywordData)!;;
    

    let searchParams: SearchParams = this.searchRequest!.getParams()!;;
    
searchParams!.add(this.basicItemData!.KEYWORDS, keywordData);
    
searchParams!.setStartPage(CommonPhoneStrings.getInstance()!.ZERO);
    
this.searchRequest!.setParams(searchParams);
    
this.searchRequest!.setFileBaseName(pageName);
    

    let abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;;
    

    let inventorySearchUtil: InventorySearchUtil = InventorySearchUtil.getInstance()!;;
    

    let productListingPages: string[] = inventorySearchUtil!.search(abeClientInformation, searchRequest, vector)!;;
    




                        for (
    let index: number = 0;index < productListingPages!.length; index++)
        {

                        if(productListingPages[index] == 
                                    null
                                )
                        
                                    {
                                    break;

                    

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.STATICPAGEGENERATIONLOGGING))
                        
                                    {
                                    this.logUtil!.putF("Saving Listing: " +index, this, "generateAll()");
    

                                    }
                                

    let indexStr: string = StringUtil.getInstance()!.EMPTY_STRING;;
    

                        if(index > 0)
                        
                                    {
                                    indexStr= new Integer(index).toString();
    

                                    }
                                
keywordFilenameHashMap!.put(keywordData, pageName +indexStr);
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(staticPath!.toString());
    
stringBuffer!.append(pageName);
    
stringBuffer!.append(indexStr);
    
stringBuffer!.append(AbPathData.getInstance()!.EXTENSION_SEP);
    
stringBuffer!.append(InputOutputTypeData.getInstance()!.DEFAULT);
    

    let file: string = stringBuffer!.toString()!;;
    

                        if(!this.directory.create(staticPath))
                        
                                    {
                                    


                            throw new Exception("Could Not Create Directory: " +staticPath);
                    

                                    }
                                
this.savePage(file, productListingPages[index]!);
    
}

}


    addStaticPageInfoToDatabase(storeFront: StoreFrontInterface, keywordFilenameHashMap: HashMap<any, any>){

    let keywordHashSet: Set = keywordFilenameHashMap!.keys()!;;
    

    let keywordArray: any[] = keywordHashSet!.toArray()!;;
    

    let size: number = keywordArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let insertVector: BasicArrayList = new BasicArrayListD();;
    

    let keywordData: string = keywordArray[index]! as string;;
    

    let fileName: string = keywordFilenameHashMap!.get(keywordData) as string;;
    
insertVector!.add(storeFront!.getName());
    
insertVector!.add(keywordData);
    
insertVector!.add(fileName);
    
this.staticPages!.insert(insertVector);
    
}

}

generateAll(...args: any[]): any {
   
    if (args.length === 0) return this.generateAll$overload1();
   
    if (args.length === 1 && typeof args[0] === 'string') return this.generateAll$overload2(args[0]);
   
   throw new TypeError('No matching overload: generateAll'); }
  
                //@Throws(Exception.constructor)
            
    public generateAll$overload1(): string{

 try { 
    let storeFront: StoreFrontInterface = this.searchRequest!.getStoreFront()!;;
    

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
stringBuffer!.append(storeFront!.getName());
    
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR);
    
stringBuffer!.append(storeFront!.getStaticPath());
    

    let staticPath: AbPath = new AbPath(stringBuffer!.toString(), StringUtil.getInstance()!.EMPTY_STRING);;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.STATICPAGEGENERATIONLOGGING))
                        
                                    {
                                    this.logUtil!.putF("Store Static Pages Path: " +staticPath, this, "generateAll()");
    

                                    }
                                

    let keywordHashSet: HashSet = this.getHashSet(storeFront)!;;
    

    let keywordArray: any[] = keywordHashSet!.toArray()!;;
    

    let size: number = keywordArray!.length
                ;;
    

    let keywordFilenameHashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    

                        if(size == 0)
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append("Products For ");
    
stringBuffer!.append(storeFront!.getName());
    
stringBuffer!.append(" Store Not Found");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    

                                    }
                                

    let inventorySearchUtil: InventorySearchUtil = InventorySearchUtil.getInstance()!;;
    

    let vector: BasicArrayList = inventorySearchUtil!.getBasicItemIdColumn(this.searchRequest)!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let keywordData: string = keywordArray[index]! as string;;
    

                        if(keywordData!.length > 1)
                        
                                    {
                                    this.create(keywordData, keywordFilenameHashMap, vector, staticPath);
    

                                    }
                                
}

this.addStaticPageInfoToDatabase(storeFront, keywordFilenameHashMap);
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append("Static Files Generated Successfully For ");
    
stringBuffer!.append(storeFront!.getName());
    
stringBuffer!.append(" it used packages ");
    
stringBuffer!.append(storeFront!.getPackageLocation());
    
stringBuffer!.append(this.INVENTORY);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  



                            throw e;
                    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public generateAll$overload2(storeName: string): string{

 try { 
    let stringBuffer: StringMaker = new StringMaker();;
    

                        if(storeName != 
                                    null
                                )
                        
                                    {
                                    
                        if(storeName!.compareTo(GLOBALS2.GENERATEALLSTORES) != 0)
                        
                                    {
                                    this.searchRequest!.setStoreFront(this.storeFronts!.getStoreFrontInterface(storeName));
    
stringBuffer!.append(this.generateAll());
    
stringBuffer!.append("<br />");
    

                                    }
                                
                        else {
                            
    let storeFrontVector: BasicArrayList = this.storeFronts!.getStoreFrontNames()!;;
    

    let size: number = storeFrontVector!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
storeName= storeFrontVector!.get(index) as string;
    
this.searchRequest!.setStoreFront(this.storeFronts!.getStoreFrontInterface(storeName));
    
stringBuffer!.append(this.generateAll());
    
stringBuffer!.append("<br />");
    
}


                        }
                            

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Generation Failed No Store Specified<br/>";
    

                        }
                            
stringBuffer!.append("All Static Pages Generated<br/>");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  



                            throw e;
                    

 }
   }
 
}


}

