
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
        
//not game specific package import { HashMap } from '../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { HashSet } from '../../../../java/util/HashSet.js';
      const HashSet = globalThis.java.util.HashSet;

      
//not game specific package import { Set } from '../../../../java/util/Set.js';
      const Set = globalThis.java.util.Set;

      
//not game specific package import { Vector } from '../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { StoreFrontInterface } from '../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
//not game specific package import { BasicItemData } from '../../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js';
      const BasicItemData = globalThis.org.allbinary.business.user.commerce.inventory.item.BasicItemData;

      
//not game specific package import { StoreFrontsEntity } from '../../../../org/allbinary/data/tables/context/module/storefronts/StoreFrontsEntity.js';
      const StoreFrontsEntity = globalThis.org.allbinary.data.tables.context.module.storefronts.StoreFrontsEntity;

      
//not game specific package import { StaticPagesEntity } from '../../../../org/allbinary/data/tables/staticpages/StaticPagesEntity.js';
      const StaticPagesEntity = globalThis.org.allbinary.data.tables.staticpages.StaticPagesEntity;

      
//not game specific package import { InventoryEntity } from '../../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntity.js';
      const InventoryEntity = globalThis.org.allbinary.data.tables.user.commerce.inventory.item.InventoryEntity;

      
//not game specific package import { GLOBALS2 } from '../../../../org/allbinary/globals/GLOBALS2.js';
      const GLOBALS2 = globalThis.org.allbinary.globals.GLOBALS2;

      
//not game specific package import { URLGLOBALS } from '../../../../org/allbinary/globals/URLGLOBALS.js';
      const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
//not game specific package import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { SearchParams } from '../../../../org/allbinary/logic/control/search/SearchParams.js';
      const SearchParams = globalThis.org.allbinary.logic.control.search.SearchParams;

      
//not game specific package import { SearchRequest } from '../../../../org/allbinary/logic/control/search/SearchRequest.js';
      const SearchRequest = globalThis.org.allbinary.logic.control.search.SearchRequest;

      
//not game specific package import { AbDataOutputStream } from '../../../../org/allbinary/logic/io/AbDataOutputStream.js';
      const AbDataOutputStream = globalThis.org.allbinary.logic.io.AbDataOutputStream;

      
//not game specific package import { DataOutputStreamFactory } from '../../../../org/allbinary/logic/io/DataOutputStreamFactory.js';
      const DataOutputStreamFactory = globalThis.org.allbinary.logic.io.DataOutputStreamFactory;

      
//not game specific package import { InputOutputTypeData } from '../../../../org/allbinary/logic/io/InputOutputTypeData.js';
      const InputOutputTypeData = globalThis.org.allbinary.logic.io.InputOutputTypeData;

      
//not game specific package import { StreamUtil } from '../../../../org/allbinary/logic/io/StreamUtil.js';
      const StreamUtil = globalThis.org.allbinary.logic.io.StreamUtil;

      
//not game specific package import { AbFile } from '../../../../org/allbinary/logic/io/file/AbFile.js';
      const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
//not game specific package import { Directory } from '../../../../org/allbinary/logic/io/file/directory/Directory.js';
      const Directory = globalThis.org.allbinary.logic.io.file.directory.Directory;

      
//not game specific package import { AbPath } from '../../../../org/allbinary/logic/io/path/AbPath.js';
      const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
//not game specific package import { AbPathData } from '../../../../org/allbinary/logic/io/path/AbPathData.js';
      const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;

      
//not game specific package import { SpecialCharacterUtil } from '../../../../org/allbinary/logic/string/SpecialCharacterUtil.js';
      const SpecialCharacterUtil = globalThis.org.allbinary.logic.string.SpecialCharacterUtil;

      
//not game specific package import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { Replace } from '../../../../org/allbinary/logic/string/regex/replace/Replace.js';
      const Replace = globalThis.org.allbinary.logic.string.regex.replace.Replace;

      
//not game specific package import { UniqueTokens } from '../../../../org/allbinary/logic/string/tokens/UniqueTokens.js';
      const UniqueTokens = globalThis.org.allbinary.logic.string.tokens.UniqueTokens;

      
//not game specific package import { AbeClientInformationInterface } from '../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not game specific package import { ServiceClientInformationInterfaceFactory } from '../../../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js';
      const ServiceClientInformationInterfaceFactory = globalThis.org.allbinary.logic.system.security.licensing.ServiceClientInformationInterfaceFactory;

      
//not game specific package import { CommonPhoneStrings } from '../../../../org/allbinary/string/CommonPhoneStrings.js';
      const CommonPhoneStrings = globalThis.org.allbinary.string.CommonPhoneStrings;

      
//not game specific package import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not game specific package import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { InventoryColumnUtil } from '../../../../views/generic/inventory/InventoryColumnUtil.js';
      const InventoryColumnUtil = globalThis.views.generic.inventory.InventoryColumnUtil;

      
//not game specific package import { InventorySearchUtil } from '../../../../views/generic/inventory/InventorySearchUtil.js';
      const InventorySearchUtil = globalThis.views.generic.inventory.InventorySearchUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ProductListingInterface } from './ProductListingInterface.js';

export class ProductListing
            extends Object
         implements ProductListingInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly directory: Directory = Directory.getInstance()!;

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

    var inventoryColumnUtil: InventoryColumnUtil = InventoryColumnUtil.getInstance()!;;
    

    var keywords: Vector = inventoryColumnUtil!.getColumnWhereLike(this.inventory, storeFront!.getCategoryPath(), BasicItemData.KEYWORDS)!;;
    

    var subStoreVector: BasicArrayList = storeFront!.getSubStores()!;;
    

    var size: number = subStoreVector!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var subStore: string = subStoreVector!.get(index) as string;;
    

    var substoreKeywords: Vector = inventoryColumnUtil!.getColumnWhereLike(this.inventory, AbPathData.getInstance()!.SEPARATOR +subStore, BasicItemData.CATEGORY)!;;
    
keywords.addAll(substoreKeywords);
    
}


    var uniqueTokens: UniqueTokens = new UniqueTokens();;
    

    var keywordHashSet: HashSet = uniqueTokens!.getWhithoutDashesAndSkipNumberOnlyTokens(keywords)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keywordHashSet;
    
}


                //@Throws(Exception.constructor)
            
    savePage(file: string, data: string){

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.STATICPAGEGENERATIONLOGGING))
                        
                                    {
                                    this.logUtil!.putF("Creating File: " +file, this, "generateAll()");
    

                                    }
                                

    var newFile: AbFile = AbFile.createAbFile(file)!;;
    

                        if(newFile!.exists())
                        
                                    {
                                    newFile!.delete();
    

                                    }
                                
newFile!.createNewFile();
    

                        if(newFile!.exists())
                        
                                    {
                                    
    var idOutData: AbDataOutputStream = DataOutputStreamFactory.getInstance()!.getInstanceForAbFile(newFile)!;;
    
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
            
    create(keywordData: string, keywordFilenameHashMap: HashMap<any, any>, vector: Vector, staticPath: AbPath){

    var stringBuffer: StringMaker = new StringMaker();;
    

    var hashMap: HashMap<any, any> = SpecialCharacterUtil.getHashMap()!;;
    
hashMap!.put(CommonSeps.getInstance()!.SPACE, StringUtil.getInstance()!.EMPTY_STRING);
    

    var pageName: string = new Replace(hashMap).all(keywordData)!;;
    

    var searchParams: SearchParams = this.searchRequest!.getParams()!;;
    
searchParams!.add(BasicItemData.KEYWORDS, keywordData);
    
searchParams!.setStartPage(CommonPhoneStrings.getInstance()!.ZERO);
    
this.searchRequest!.setParams(searchParams);
    
this.searchRequest!.setFileBaseName(pageName);
    

    var abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;;
    

    var inventorySearchUtil: InventorySearchUtil = InventorySearchUtil.getInstance()!;;
    

    var productListingPages: string[] = inventorySearchUtil!.search(abeClientInformation, searchRequest, vector)!;;
    




                        for (
    var index: number = 0;index < productListingPages!.length; index++)
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
                                

    var indexStr: string = StringUtil.getInstance()!.EMPTY_STRING;;
    

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
    

    var file: string = stringBuffer!.toString()!;;
    

                        if(!this.directory.create(staticPath))
                        
                                    {
                                    


                            throw new Exception("Could Not Create Directory: " +staticPath);
                    

                                    }
                                
this.savePage(file, productListingPages[index]!);
    
}

}


    addStaticPageInfoToDatabase(storeFront: StoreFrontInterface, keywordFilenameHashMap: HashMap<any, any>){

    var keywordHashSet: Set = keywordFilenameHashMap!.keys()!;;
    

    var keywordArray: any[] = keywordHashSet!.toArray()!;;
    

    var size: number = keywordArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var insertVector: Vector = new Vector();;
    

    var keywordData: string = keywordArray[index]! as string;;
    

    var fileName: string = keywordFilenameHashMap!.get(keywordData) as string;;
    
insertVector!.add(storeFront!.getName());
    
insertVector!.add(keywordData);
    
insertVector!.add(fileName);
    
this.staticPages!.insert(insertVector);
    
}

}


                //@Throws(Exception.constructor)
            
    public generateAll(): string{

        try {
            
    var storeFront: StoreFrontInterface = this.searchRequest!.getStoreFront()!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
stringBuffer!.append(storeFront!.getName());
    
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR);
    
stringBuffer!.append(storeFront!.getStaticPath());
    

    var staticPath: AbPath = new AbPath(stringBuffer!.toString(), StringUtil.getInstance()!.EMPTY_STRING);;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.STATICPAGEGENERATIONLOGGING))
                        
                                    {
                                    this.logUtil!.putF("Store Static Pages Path: " +staticPath, this, "generateAll()");
    

                                    }
                                

    var keywordHashSet: HashSet = this.getHashSet(storeFront)!;;
    

    var keywordArray: any[] = keywordHashSet!.toArray()!;;
    

    var size: number = keywordArray!.length
                ;;
    

    var keywordFilenameHashMap: HashMap<any, any> = new HashMap<any, any>();;
    

                        if(size == 0)
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append("Products For ");
    
stringBuffer!.append(storeFront!.getName());
    
stringBuffer!.append(" Store Not Found");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    

                                    }
                                

    var inventorySearchUtil: InventorySearchUtil = InventorySearchUtil.getInstance()!;;
    

    var vector: Vector = inventorySearchUtil!.getBasicItemIdColumn(this.searchRequest)!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var keywordData: string = keywordArray[index]! as string;;
    

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
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

}


                //@Throws(Exception.constructor)
            
    public generateAll(storeName: string): string{

        try {
            
    var stringBuffer: StringMaker = new StringMaker();;
    

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
                            
    var storeFrontVector: Vector = this.storeFronts!.getStoreFrontNames()!;;
    

    var size: number = storeFrontVector!.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
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
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

}


}
                
            

