
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
        



import { HashMap } from "../../../../java/util/HashMap.js";

    
import { HashSet } from "../../../../java/util/HashSet.js";

    
import { Set } from "../../../../java/util/Set.js";

    
import { Vector } from "../../../../java/util/Vector.js";

    
import { StoreFrontInterface } from "../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { BasicItemData } from "../../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js";

    
import { StoreFrontsEntity } from "../../../../org/allbinary/data/tables/context/module/storefronts/StoreFrontsEntity.js";

    
import { StaticPagesEntity } from "../../../../org/allbinary/data/tables/staticpages/StaticPagesEntity.js";

    
import { InventoryEntity } from "../../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntity.js";

    
import { GLOBALS2 } from "../../../../org/allbinary/globals/GLOBALS2.js";

    
import { URLGLOBALS } from "../../../../org/allbinary/globals/URLGLOBALS.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { SearchParams } from "../../../../org/allbinary/logic/control/search/SearchParams.js";

    
import { SearchRequest } from "../../../../org/allbinary/logic/control/search/SearchRequest.js";

    
import { AbDataOutputStream } from "../../../../org/allbinary/logic/io/AbDataOutputStream.js";

    
import { DataOutputStreamFactory } from "../../../../org/allbinary/logic/io/DataOutputStreamFactory.js";

    
import { InputOutputTypeData } from "../../../../org/allbinary/logic/io/InputOutputTypeData.js";

    
import { StreamUtil } from "../../../../org/allbinary/logic/io/StreamUtil.js";

    
import { AbFile } from "../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { Directory } from "../../../../org/allbinary/logic/io/file/directory/Directory.js";

    
import { AbPath } from "../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { AbPathData } from "../../../../org/allbinary/logic/io/path/AbPathData.js";

    
import { SpecialCharacterUtil } from "../../../../org/allbinary/logic/string/SpecialCharacterUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { Replace } from "../../../../org/allbinary/logic/string/regex/replace/Replace.js";

    
import { UniqueTokens } from "../../../../org/allbinary/logic/string/tokens/UniqueTokens.js";

    
import { AbeClientInformationInterface } from "../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { ServiceClientInformationInterfaceFactory } from "../../../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js";

    
import { CommonPhoneStrings } from "../../../../org/allbinary/string/CommonPhoneStrings.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    
import { InventoryColumnUtil } from "../../../../views/generic/inventory/InventoryColumnUtil.js";

    
import { InventorySearchUtil } from "../../../../views/generic/inventory/InventorySearchUtil.js";

    

export class ProductListing
            extends Object
        
                , ProductListingInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly directory: Directory = Directory.getInstance()!;
        
        

    private readonly storeFronts: StoreFrontsEntity

    private readonly staticPages: StaticPagesEntity

    private readonly inventory: InventoryEntity

    private readonly searchRequest: SearchRequest

    private readonly INVENTORY: string = ".InventoryView";
        
        
public constructor (searchRequest: SearchRequest){

            super();
            var searchRequest = searchRequest
this.searchRequest= searchRequest
this.storeFronts= StoreFrontsEntity()
this.staticPages= StaticPagesEntity()
this.inventory= InventoryEntity()
}


                @Throws(Exception::class)
            
    getHashSet(storeFront: StoreFrontInterface): HashSet{
var storeFront = storeFront

    var inventoryColumnUtil: InventoryColumnUtil = InventoryColumnUtil.getInstance()!;
        
        


    var keywords: Vector = inventoryColumnUtil!.getColumnWhereLike(this.inventory, storeFront!.getCategoryPath(), BasicItemData.KEYWORDS)!;
        
        


    var subStoreVector: BasicArrayList = storeFront!.getSubStores()!;
        
        


    var size: number = subStoreVector!.size()!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var subStore: string = subStoreVector!.get(index) as String;
        
        


    var substoreKeywords: Vector = inventoryColumnUtil!.getColumnWhereLike(this.inventory, AbPathData.getInstance()!.SEPARATOR +subStore, BasicItemData.CATEGORY)!;
        
        

addAll(substoreKeywords)
}


    var uniqueTokens: UniqueTokens = new UniqueTokens();
        
        


    var keywordHashSet: HashSet = uniqueTokens!.getWhithoutDashesAndSkipNumberOnlyTokens(keywords)!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keywordHashSet;
    
}


                @Throws(Exception::class)
            
    savePage(file: string, data: string){
var file = file
var data = data

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.STATICPAGEGENERATIONLOGGING))
                        
                                    {
                                    put("Creating File: " +file, this, "generateAll()")

                                    }
                                

    var newFile: AbFile = new AbFile(file);
        
        


    
                        if(newFile!.exists())
                        
                                    {
                                    delete()

                                    }
                                
createNewFile()

    
                        if(newFile!.exists())
                        
                                    {
                                    
    var idOutData: AbDataOutputStream = DataOutputStreamFactory.getInstance()!.getInstance(newFile)!;
        
        

writeBytes(data)
flush()
close(idOutData)

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.STATICPAGEGENERATIONLOGGING))
                        
                                    {
                                    put("Wrote Total Bytes: " +newFile!.length(), this, "generateAll()")

                                    }
                                

                                    }
                                
                        else {
                            


                            throw Exception("Could Not Create: " +file)

                        }
                            
}


                @Throws(Exception::class)
            
    create(keywordData: string, keywordFilenameHashMap: HashMap<Any, Any>, vector: Vector, staticPath: AbPath){
var keywordData = keywordData
var keywordFilenameHashMap = keywordFilenameHashMap
var vector = vector
var staticPath = staticPath

    var stringBuffer: StringMaker = new StringMaker();
        
        


    var hashMap: HashMap<Any, Any> = SpecialCharacterUtil.getHashMap()!;
        
        

put(CommonSeps.getInstance()!.SPACE, StringUtil.getInstance()!.EMPTY_STRING)

    var pageName: string = Replace(hashMap).
                            all(keywordData)!;
        
        


    var searchParams: SearchParams = this.searchRequest!.getParams()!;
        
        

add(BasicItemData.KEYWORDS, keywordData)
setStartPage(CommonPhoneStrings.getInstance()!.ZERO)
setParams(searchParams)
setFileBaseName(pageName)

    var abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;
        
        


    var inventorySearchUtil: InventorySearchUtil = InventorySearchUtil.getInstance()!;
        
        


    var productListingPages: string[] = inventorySearchUtil!.search(abeClientInformation, searchRequest, vector)!;
        
        





                        for (
    var index: number = 0;
        
        
index < productListingPages!.length; index++)
        {

    
                        if(productListingPages[index] == 
                                    null
                                )
                        
                                    {
                                    break;

                    

                                    }
                                

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.STATICPAGEGENERATIONLOGGING))
                        
                                    {
                                    put("Saving Listing: " +index, this, "generateAll()")

                                    }
                                

    var indexStr: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        


    
                        if(index > 0)
                        
                                    {
                                    indexStr= Integer(index).
                            toString()

                                    }
                                
put(keywordData, pageName +indexStr)
delete(0, stringBuffer!.length())
append(staticPath!.toString())
append(pageName)
append(indexStr)
append(AbPathData.getInstance()!.EXTENSION_SEP)
append(InputOutputTypeData.getInstance()!.DEFAULT)

    var file: string = stringBuffer!.toString()!;
        
        


    
                        if(!this.directory.create(staticPath))
                        
                                    {
                                    


                            throw Exception("Could Not Create Directory: " +staticPath)

                                    }
                                
this.savePage(file, productListingPages[index]!)
}

}


    addStaticPageInfoToDatabase(storeFront: StoreFrontInterface, keywordFilenameHashMap: HashMap<Any, Any>){
var storeFront = storeFront
var keywordFilenameHashMap = keywordFilenameHashMap

    var keywordHashSet: Set = keywordFilenameHashMap!.keys!;
        
        


    var keywordArray: any = {}[] = keywordHashSet!.toArray()!;
        
        


    var size: number = keywordArray!.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var insertVector: Vector = new Vector();
        
        


    var keywordData: string = keywordArray[index]! as String;
        
        


    var fileName: string = keywordFilenameHashMap!.get(keywordData as Object) as String;
        
        

add(storeFront!.getName())
add(keywordData)
add(fileName)
insert(insertVector)
}

}


                @Throws(Exception::class)
            
    public generateAll(): string{

        try {
            
    var storeFront: StoreFrontInterface = this.searchRequest!.getStoreFront()!;
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        

append(URLGLOBALS.getWebappPath())
append(storeFront!.getName())
append(AbPathData.getInstance()!.SEPARATOR)
append(storeFront!.getStaticPath())

    var staticPath: AbPath = new AbPath(stringBuffer!.toString());
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.STATICPAGEGENERATIONLOGGING))
                        
                                    {
                                    put("Store Static Pages Path: " +staticPath, this, "generateAll()")

                                    }
                                

    var keywordHashSet: HashSet = this.getHashSet(storeFront)!;
        
        


    var keywordArray: any = {}[] = keywordHashSet!.toArray()!;
        
        


    var size: number = keywordArray!.length
                ;
        
        


    var keywordFilenameHashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        


    
                        if(size == 0)
                        
                                    {
                                    delete(0, stringBuffer!.length())
append("Products For ")
append(storeFront!.getName())
append(" Store Not Found")



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    

                                    }
                                

    var inventorySearchUtil: InventorySearchUtil = InventorySearchUtil.getInstance()!;
        
        


    var vector: Vector = inventorySearchUtil!.getBasicItemIdColumn(searchRequest)!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var keywordData: string = keywordArray[index]! as String;
        
        


    
                        if(keywordData!.length > 1)
                        
                                    {
                                    this.create(keywordData, keywordFilenameHashMap, vector, staticPath)

                                    }
                                
}

this.addStaticPageInfoToDatabase(storeFront, keywordFilenameHashMap)
delete(0, stringBuffer!.length())
append("Static Files Generated Successfully For ")
append(storeFront!.getName())
append(" it used packages ")
append(storeFront!.getPackageLocation())
append(INVENTORY)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
} catch(e: Exception)
            {



                            throw e
}

}


                @Throws(Exception::class)
            
    public generateAll(storeName: string): string{
var storeName = storeName

        try {
            
    var stringBuffer: StringMaker = new StringMaker();
        
        


    
                        if(storeName != 
                                    null
                                )
                        
                                    {
                                    
    
                        if(storeName!.compareTo(GLOBALS2.GENERATEALLSTORES) != 0)
                        
                                    {
                                    setStoreFront(this.storeFronts!.getStoreFrontInterface(storeName))
append(this.generateAll())
append("<br />")

                                    }
                                
                        else {
                            
    var storeFrontVector: Vector = this.storeFronts!.getStoreFrontNames()!;
        
        


    var size: number = storeFrontVector!.length!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
storeName= storeFrontVector!.get(index) as String
setStoreFront(this.storeFronts!.getStoreFrontInterface(storeName))
append(this.generateAll())
append("<br />")
}


                        }
                            

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Generation Failed No Store Specified<br/>";
    

                        }
                            
append("All Static Pages Generated<br/>")



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
} catch(e: Exception)
            {



                            throw e
}

}


}
                
            

