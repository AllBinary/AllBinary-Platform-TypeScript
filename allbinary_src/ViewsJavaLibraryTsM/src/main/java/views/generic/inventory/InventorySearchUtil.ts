
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

    
import { ListIterator } from "../../../java/util/ListIterator.js";

    
import { Vector } from "../../../java/util/Vector.js";

    
import { StoreFrontInterface } from "../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { InventoryData } from "../../../org/allbinary/business/user/commerce/inventory/InventoryData.js";

    
import { BasketData } from "../../../org/allbinary/business/user/commerce/inventory/basket/BasketData.js";

    
import { BasicItemData } from "../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js";

    
import { BasicItemView } from "../../../org/allbinary/business/user/commerce/inventory/item/BasicItemView.js";

    
import { ItemInterface } from "../../../org/allbinary/business/user/commerce/inventory/item/ItemInterface.js";

    
import { InventoryEntity } from "../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntity.js";

    
import { InventoryEntityFactory } from "../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntityFactory.js";

    
import { ModDomHelper } from "../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { DomDocumentHelper } from "../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { SearchData } from "../../../org/allbinary/logic/control/search/SearchData.js";

    
import { SearchParams } from "../../../org/allbinary/logic/control/search/SearchParams.js";

    
import { SearchRequest } from "../../../org/allbinary/logic/control/search/SearchRequest.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringValidationUtil } from "../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { Replace } from "../../../org/allbinary/logic/string/regex/replace/Replace.js";

    
import { AbeClientInformationInterface } from "../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { StoreTransformer } from "../../../org/allbinary/logic/visual/transform/StoreTransformer.js";

    
import { TransformDocumentInterface } from "../../../org/allbinary/logic/visual/transform/data/TransformDocumentInterface.js";

    
import { TransformStoreDocumentFactory } from "../../../org/allbinary/logic/visual/transform/data/TransformStoreDocumentFactory.js";

    
import { TransformInfoHttpSearch } from "../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpSearch.js";

    
import { TransformInfoInterface } from "../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { CommonPhoneStrings } from "../../../org/allbinary/string/CommonPhoneStrings.js";

    
import { CommonSeps } from "../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../org/allbinary/util/BasicArrayList.js";

    
import { Document } from "../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../org/w3c/dom/Node.js";

    

export class InventorySearchUtil
            extends Object
         {
        

    private static readonly instance: InventorySearchUtil = new InventorySearchUtil();
        
        

    public static getInstance(): InventorySearchUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly commonPhoneStrings: CommonPhoneStrings = CommonPhoneStrings.getInstance()!;
        
        

                //@Throws(Error::class)
            
    public getBasicItemIdColumn(searchRequest: SearchRequest): Vector{
var searchRequest = searchRequest

    var inventoryEntityInterface: InventoryEntity = InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!;
        
        


    var storeFrontInterface: StoreFrontInterface = searchRequest!.getStoreFront()!;
        
        


    var inventorySearchUtil: InventoryColumnUtil = InventoryColumnUtil.getInstance()!;
        
        


    var column: Vector = inventorySearchUtil!.getColumnWhereLike(inventoryEntityInterface, storeFrontInterface!.getCategoryPath(), BasicItemData.ID)!;
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PRODUCTSEARCHLOGGING))
                        
                                    {
                                    logUtil!.put("Number Of Items Found: " +column.length, this, "search")

                                    }
                                

    var subStoreVector: BasicArrayList = storeFrontInterface!.getSubStores()!;
        
        


    var size: number = subStoreVector!.size()!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var subStore: string = subStoreVector!.get(index) as String;
        
        


    var substoreIdColumn: Vector = inventorySearchUtil!.getColumnWhereLike(inventoryEntityInterface, subStore, BasicItemData.ID)!;
        
        

column.addAll(substoreIdColumn)
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PRODUCTSEARCHLOGGING))
                        
                                    {
                                    logUtil!.put("Number Of Items Found Including SubStores: " +column.length, this, "search")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return column;
    
}


                //@Throws(Error::class)
            
    getNoResults(viewDocumentInterface: TransformDocumentInterface, inventoryNode: Node): string{
var viewDocumentInterface = viewDocumentInterface
var inventoryNode = inventoryNode
inventoryNode!.appendChild(ModDomHelper.createNameValueNodes(viewDocumentInterface!.getDoc(), SearchData.TOTAL_NUMBER_PAGES, commonPhoneStrings!.ZERO))
inventoryNode!.appendChild(ModDomHelper.createNameValueNodes(viewDocumentInterface!.getDoc(), SearchData.TOTAL_NUMBER_ITEMS, commonPhoneStrings!.ZERO))

    var success: string = DomDocumentHelper.toString(viewDocumentInterface!.getDoc())!;
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PRODUCTSEARCHLOGGING))
                        
                                    {
                                    logUtil!.put("No Results Xml: " +success, this, "search")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    
}


    public search(abeClientInformation: AbeClientInformationInterface, searchRequest: SearchRequest, column: Vector): string[]{
    //var abeClientInformation = abeClientInformation
var searchRequest = searchRequest
var column = column

        try {
            
    var inventoryEntityInterface: InventoryEntity = InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!;
        
        


    var searchParams: SearchParams = searchRequest!.getParams()!;
        
        


    var startPage: number = searchParams!.getStartPageInt()!.toInt()!;
        
        


    var endPage: number = searchParams!.getEndPageInt()!.toInt()!;
        
        


    var pageLength: number = searchParams!.getLengthInt()!.toInt()!;
        
        


    var savedPagesInRange: number = 0;
        
        


    var columnValueHashMap: HashMap<Any, Any> = searchParams!.get()!;
        
        


    var keyword: string = Replace("-", CommonSeps.getInstance()!.SPACE).
                            all(columnValueHashMap!.get(BasicItemData.KEYWORDS) as String)!;
        
        


                        if(StringValidationUtil.getInstance()!.isEmpty(keyword))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                                    }
                                

    var stringBuffer: StringMaker = new StringMaker();
        
        


                        if(startPage >= 0)
                        
                                    {
                                    
                        if(pageLength == 0)
                        
                                    {
                                    pageLength= SearchData.DEFAULT_PAGE_LENGTH

                                    }
                                

    var MAXPAGES: number = 100;
        
        


    var productListingPages: string[] = new Array(MAXPAGES);
        
        


    var documents: Document[] = new Array(MAXPAGES);
        
        


    var inventoryNodes: Node[] = new Array(MAXPAGES);
        
        


    var iter: ListIterator = column.listIterator()!;
        
        

keyword= keyword.uppercase()

    var lastPage: number =  -1;
        
        


    var numberOfResultsOnCurrentPage: number = 0;
        
        


    var numberOfResults: number = 0;
        
        


    var viewDocumentInterface: TransformDocumentInterface = TransformStoreDocumentFactory.getInstance(searchRequest)!;
        
        


    var inventoryNode: Node = viewDocumentInterface!.getDoc()!.createElement(InventoryData.INVENTORY)!;
        
        

viewDocumentInterface!.getBaseNode()!.appendChild(inventoryNode)
inventoryNode!.appendChild(ModDomHelper.createNameValueNodes(viewDocumentInterface!.getDoc(), SearchData.PAGE, Integer(startPage).
                            toString()))

                        if(searchRequest!.getFileBaseName() != 
                                    null
                                )
                        
                                    {
                                    inventoryNode!.appendChild(searchRequest!.getFileBaseNameNode(viewDocumentInterface!.getDoc()))

                                    }
                                

    var currentPage: number =  -1;
        
        


        while(iter.hasNext())
        {

    var product: string = new .toCharArray();
        
        


    var itemInterface: ItemInterface = inventoryEntityInterface!.getItem(product)!;
        
        


    var keywords: string = itemInterface!.getKeywords()!;
        
        

keywords= keywords.uppercase()

                        if(keywords.indexOf(keyword) !=  -1)
                        
                                    {
                                    
                        if(currentPage +1 >= startPage && currentPage +1 <= endPage)
                        
                                    {
                                    
    var itemNode: Node = BasicItemView(itemInterface, Vector()).
                            toXmlNode(viewDocumentInterface!.getDoc())!;
        
        

itemNode!.appendChild(ModDomHelper.createNameValueNodes(viewDocumentInterface!.getDoc(), BasketData.ITEMTOTALINBASKET, commonPhoneStrings!.ONE))
inventoryNode!.appendChild(itemNode!.cloneNode(true))

                                    }
                                
currentPage= ((numberOfResults +1) /pageLength) -1
numberOfResultsOnCurrentPage++

                        if(lastPage < currentPage)
                        
                                    {
                                    
                        if(currentPage >= startPage && currentPage <= endPage)
                        
                                    {
                                    inventoryNode!.appendChild(ModDomHelper.createNameValueNodes(viewDocumentInterface!.getDoc(), SearchData.TOTAL_NUMBER_ITEMS_ON_THIS_PAGE, Integer(numberOfResultsOnCurrentPage).
                            toString()))
documents[currentPage]= viewDocumentInterface!.getDoc()
inventoryNodes[currentPage]= inventoryNode
savedPagesInRange++
viewDocumentInterface= TransformStoreDocumentFactory.getInstance(searchRequest)
inventoryNode= viewDocumentInterface!.getDoc()!.createElement(InventoryData.INVENTORY)
viewDocumentInterface!.getBaseNode()!.appendChild(inventoryNode)
inventoryNode!.appendChild(ModDomHelper.createNameValueNodes(viewDocumentInterface!.getDoc(), SearchData.PAGE, Integer(currentPage +1).
                            toString()))

                        if(searchRequest!.getFileBaseName() != 
                                    null
                                )
                        
                                    {
                                    inventoryNode!.appendChild(searchRequest!.getFileBaseNameNode(viewDocumentInterface!.getDoc()))

                                    }
                                

                                    }
                                
lastPage= currentPage
numberOfResultsOnCurrentPage= 0

                                    }
                                
numberOfResults++

                        if(lastPage >= MAXPAGES -1)
                        
                                    {
                                    break;

                    

                                    }
                                

                                    }
                                
}


                        if(numberOfResultsOnCurrentPage > 0 && (currentPage +1 >= startPage && currentPage +1 <= endPage))
                        
                                    {
                                    inventoryNode!.appendChild(ModDomHelper.createNameValueNodes(viewDocumentInterface!.getDoc(), SearchData.TOTAL_NUMBER_ITEMS_ON_THIS_PAGE, Integer(numberOfResultsOnCurrentPage -1).
                            toString()))
documents[lastPage +1]= viewDocumentInterface!.getDoc()
inventoryNodes[lastPage +1]= inventoryNode
savedPagesInRange++

                                    }
                                

                        if(numberOfResultsOnCurrentPage > 0)
                        
                                    {
                                    lastPage++

                                    }
                                

                        if(endPage > MAXPAGES -1)
                        
                                    {
                                    endPage= MAXPAGES -1

                                    }
                                




                        for (
    var index: number = startPage;
        
        
index <= endPage; index++)
        {

                        if(index <= lastPage)
                        
                                    {
                                    
    var tempDocument: Document = documents[index]!;
        
        

inventoryNodes[index]!.appendChild(ModDomHelper.createNameValueNodes(tempDocument, SearchData.TOTAL_NUMBER_PAGES, Integer(lastPage +1).
                            toString()))
inventoryNodes[index]!.appendChild(ModDomHelper.createNameValueNodes(tempDocument, SearchData.TOTAL_NUMBER_ITEMS, Integer(numberOfResults).
                            toString()))




                        for (
    var pageIndex: number = 0;
        
        
pageIndex <= lastPage; pageIndex++)
        {
stringBuffer!.delete(0, stringBuffer!.length())
stringBuffer!.append(searchRequest!.getFileBaseName())

                        if(stringBuffer!.length() > 0)
                        
                                    {
                                    
                        if(pageIndex != 0)
                        
                                    {
                                    stringBuffer!.append(pageIndex.toString())

                                    }
                                
inventoryNodes[index]!.appendChild(ModDomHelper.createNameValueNodes(tempDocument, SearchData.PAGE_INFO, pageIndex.toString(), stringBuffer!.toString()))

                                    }
                                
                        else {
                            inventoryNodes[index]!.appendChild(ModDomHelper.createNameValueNodes(tempDocument, SearchData.PAGE_INFO, pageIndex.toString(), SearchData.SEARCH))

                        }
                            
}


    var success: string = DomDocumentHelper.toString(tempDocument)!;
        
        

productListingPages[index]= StoreTransformer(abeClientInformation, TransformInfoHttpSearch(searchRequest) as TransformInfoInterface).
                            translate(success)

                                    }
                                
}


                        if(savedPagesInRange == 0)
                        
                                    {
                                    
    var result: string = this.getNoResults(viewDocumentInterface, inventoryNode)!;
        
        

productListingPages[0]= StoreTransformer(abeClientInformation, TransformInfoHttpSearch(searchRequest)).
                            translate(result)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return productListingPages;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                        }
                            
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PRODUCTSEARCHLOGGINGERROR))
                        
                                    {
                                    logUtil!.put(this.commonStrings!.FAILURE, this, "search", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


}
                
            

