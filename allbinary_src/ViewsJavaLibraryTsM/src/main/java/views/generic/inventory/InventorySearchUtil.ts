
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
        
            import { Integer } from '../../../java/lang/Integer.js';
        
import { HashMap } from '../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { ListIterator } from '../../../java/util/ListIterator.js';
      //not GWT import const ListIterator = globalThis.java.util.ListIterator;

      
import { Vector } from '../../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
import { StoreFrontInterface } from '../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      //not GWT import const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
import { InventoryData } from '../../../org/allbinary/business/user/commerce/inventory/InventoryData.js';
      //not GWT import const InventoryData = globalThis.org.allbinary.business.user.commerce.inventory.InventoryData;

      
import { BasketData } from '../../../org/allbinary/business/user/commerce/inventory/basket/BasketData.js';
      //not GWT import const BasketData = globalThis.org.allbinary.business.user.commerce.inventory.basket.BasketData;

      
import { BasicItemData } from '../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js';
      //not GWT import const BasicItemData = globalThis.org.allbinary.business.user.commerce.inventory.item.BasicItemData;

      
import { BasicItemView } from '../../../org/allbinary/business/user/commerce/inventory/item/BasicItemView.js';
      //not GWT import const BasicItemView = globalThis.org.allbinary.business.user.commerce.inventory.item.BasicItemView;

      
import { ItemInterface } from '../../../org/allbinary/business/user/commerce/inventory/item/ItemInterface.js';
      //not GWT import const ItemInterface = globalThis.org.allbinary.business.user.commerce.inventory.item.ItemInterface;

      
import { InventoryEntity } from '../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntity.js';
      //not GWT import const InventoryEntity = globalThis.org.allbinary.data.tables.user.commerce.inventory.item.InventoryEntity;

      
import { InventoryEntityFactory } from '../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntityFactory.js';
      //not GWT import const InventoryEntityFactory = globalThis.org.allbinary.data.tables.user.commerce.inventory.item.InventoryEntityFactory;

      
import { ModDomHelper } from '../../../org/allbinary/data/tree/dom/ModDomHelper.js';
      //not GWT import const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
import { DomDocumentHelper } from '../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
      //not GWT import const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
//not plain js import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { SearchData } from '../../../org/allbinary/logic/control/search/SearchData.js';
      //not GWT import const SearchData = globalThis.org.allbinary.logic.control.search.SearchData;

      
import { SearchParams } from '../../../org/allbinary/logic/control/search/SearchParams.js';
      //not GWT import const SearchParams = globalThis.org.allbinary.logic.control.search.SearchParams;

      
import { SearchRequest } from '../../../org/allbinary/logic/control/search/SearchRequest.js';
      //not GWT import const SearchRequest = globalThis.org.allbinary.logic.control.search.SearchRequest;

      
//not plain js import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { StringValidationUtil } from '../../../org/allbinary/logic/string/StringValidationUtil.js';
      //not GWT import const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
import { Replace } from '../../../org/allbinary/logic/string/regex/replace/Replace.js';
      //not GWT import const Replace = globalThis.org.allbinary.logic.string.regex.replace.Replace;

      
import { AbeClientInformationInterface } from '../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      //not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
import { StoreTransformer } from '../../../org/allbinary/logic/visual/transform/StoreTransformer.js';
      //not GWT import const StoreTransformer = globalThis.org.allbinary.logic.visual.transform.StoreTransformer;

      
import { TransformDocumentInterface } from '../../../org/allbinary/logic/visual/transform/data/TransformDocumentInterface.js';
      //not GWT import const TransformDocumentInterface = globalThis.org.allbinary.logic.visual.transform.data.TransformDocumentInterface;

      
import { TransformStoreDocumentFactory } from '../../../org/allbinary/logic/visual/transform/data/TransformStoreDocumentFactory.js';
      //not GWT import const TransformStoreDocumentFactory = globalThis.org.allbinary.logic.visual.transform.data.TransformStoreDocumentFactory;

      
import { TransformInfoHttpSearch } from '../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpSearch.js';
      //not GWT import const TransformInfoHttpSearch = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoHttpSearch;

      
import { TransformInfoInterface } from '../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      //not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
//not plain js import { CommonPhoneStrings } from '../../../org/allbinary/string/CommonPhoneStrings.js';
      const CommonPhoneStrings = globalThis.org.allbinary.string.CommonPhoneStrings;

      
//not plain js import { CommonSeps } from '../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not plain js import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { BasicArrayList } from '../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
import { Document } from '../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InventoryColumnUtil } from './InventoryColumnUtil.js';
//not GWT import const InventoryColumnUtil = globalThis.views.generic.inventory.InventoryColumnUtil;

                
export class InventorySearchUtil
            extends Object
         {
        

    private static readonly instance: InventorySearchUtil = new InventorySearchUtil();

    public static getInstance(): InventorySearchUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return InventorySearchUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly commonPhoneStrings: CommonPhoneStrings = CommonPhoneStrings.getInstance()!;

                //@Throws(Exception.constructor)
            
    public getBasicItemIdColumn(searchRequest: SearchRequest): Vector{

    var inventoryEntityInterface: InventoryEntity = InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!;;
    

    var storeFrontInterface: StoreFrontInterface = searchRequest!.getStoreFront()!;;
    

    var inventorySearchUtil: InventoryColumnUtil = InventoryColumnUtil.getInstance()!;;
    

    var column: Vector = inventorySearchUtil!.getColumnWhereLike(inventoryEntityInterface, storeFrontInterface!.getCategoryPath(), BasicItemData.ID)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PRODUCTSEARCHLOGGING))
                        
                                    {
                                    this.logUtil!.putF("Number Of Items Found: " +column.length, this, "search");
    

                                    }
                                

    var subStoreVector: BasicArrayList = storeFrontInterface!.getSubStores()!;;
    

    var size: number = subStoreVector!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var subStore: string = subStoreVector!.get(index) as string;;
    

    var substoreIdColumn: Vector = inventorySearchUtil!.getColumnWhereLike(inventoryEntityInterface, subStore, BasicItemData.ID)!;;
    
column.addAll(substoreIdColumn);
    
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PRODUCTSEARCHLOGGING))
                        
                                    {
                                    this.logUtil!.putF("Number Of Items Found Including SubStores: " +column.length, this, "search");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return column;
    
}


                //@Throws(Exception.constructor)
            
    getNoResults(viewDocumentInterface: TransformDocumentInterface, inventoryNode: Node): string{
inventoryNode!.appendChild(ModDomHelper.createNameValueNodes(viewDocumentInterface!.getDoc(), SearchData.TOTAL_NUMBER_PAGES, this.commonPhoneStrings!.ZERO));
    
inventoryNode!.appendChild(ModDomHelper.createNameValueNodes(viewDocumentInterface!.getDoc(), SearchData.TOTAL_NUMBER_ITEMS, this.commonPhoneStrings!.ZERO));
    

    var success: string = DomDocumentHelper.toString(viewDocumentInterface!.getDoc())!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PRODUCTSEARCHLOGGING))
                        
                                    {
                                    this.logUtil!.putF("No Results Xml: " +success, this, "search");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    
}


    public search(abeClientInformation: AbeClientInformationInterface, searchRequest: SearchRequest, column: Vector): string[]{

        try {
            
    var inventoryEntityInterface: InventoryEntity = InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!;;
    

    var searchParams: SearchParams = searchRequest!.getParams()!;;
    

    var startPage: number = searchParams!.getStartPageInt()!.intValue()!;;
    

    var endPage: number = searchParams!.getEndPageInt()!.intValue()!;;
    

    var pageLength: number = searchParams!.getLengthInt()!.intValue()!;;
    

    var savedPagesInRange: number = 0;;
    

    var columnValueHashMap: HashMap<any, any> = searchParams!.get()!;;
    

    var keyword: string = new Replace("-", CommonSeps.getInstance()!.SPACE).all(columnValueHashMap!.get(BasicItemData.KEYWORDS) as string)!;;
    

                        if(StringValidationUtil.getInstance()!.isEmpty(keyword))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                                    }
                                

    var stringBuffer: StringMaker = new StringMaker();;
    

                        if(startPage >= 0)
                        
                                    {
                                    
                        if(pageLength == 0)
                        
                                    {
                                    pageLength= SearchData.DEFAULT_PAGE_LENGTH;
    

                                    }
                                

    var MAXPAGES: number = 100;;
    

    var productListingPages: string[] = new Array(MAXPAGES);;
    

    var documents: Document[] = new Array(MAXPAGES);;
    

    var inventoryNodes: Node[] = new Array(MAXPAGES);;
    

    var iter: ListIterator = column.listIterator()!;;
    
keyword= keyword.toUpperCase();
    

    var lastPage: number =  -1;;
    

    var numberOfResultsOnCurrentPage: number = 0;;
    

    var numberOfResults: number = 0;;
    

    var viewDocumentInterface: TransformDocumentInterface = TransformStoreDocumentFactory.getInstance(searchRequest)!;;
    

    var inventoryNode: Node = viewDocumentInterface!.getDoc()!.createElement(InventoryData.INVENTORY)!;;
    
viewDocumentInterface!.getBaseNode()!.appendChild(inventoryNode);
    
inventoryNode!.appendChild(ModDomHelper.createNameValueNodes(viewDocumentInterface!.getDoc(), SearchData.PAGE, new Integer(startPage).toString()));
    

                        if(searchRequest!.getFileBaseName() != 
                                    null
                                )
                        
                                    {
                                    inventoryNode!.appendChild(searchRequest!.getFileBaseNameNode(viewDocumentInterface!.getDoc()));
    

                                    }
                                

    var currentPage: number =  -1;;
    

        while(iter.hasNext())
        {

    var product: string = .toCharArray();;
    

    var itemInterface: ItemInterface = inventoryEntityInterface!.getItem(product)!;;
    

    var keywords: string = itemInterface!.getKeywords()!;;
    
keywords= keywords.toUpperCase();
    

                        if(keywords.indexOf(keyword) !=  -1)
                        
                                    {
                                    
                        if(currentPage +1 >= startPage && currentPage +1 <= endPage)
                        
                                    {
                                    
    var itemNode: Node = new BasicItemView(itemInterface, new Vector()).toXmlNode(viewDocumentInterface!.getDoc())!;;
    
itemNode!.appendChild(ModDomHelper.createNameValueNodes(viewDocumentInterface!.getDoc(), BasketData.ITEMTOTALINBASKET, this.commonPhoneStrings!.ONE));
    
inventoryNode!.appendChild(itemNode!.cloneNode(true));
    

                                    }
                                
currentPage= ((numberOfResults +1) /pageLength) -1;
    
numberOfResultsOnCurrentPage++;
    

                        if(lastPage < currentPage)
                        
                                    {
                                    
                        if(currentPage >= startPage && currentPage <= endPage)
                        
                                    {
                                    inventoryNode!.appendChild(ModDomHelper.createNameValueNodes(viewDocumentInterface!.getDoc(), SearchData.TOTAL_NUMBER_ITEMS_ON_THIS_PAGE, new Integer(numberOfResultsOnCurrentPage).toString()));
    
documents[currentPage]= viewDocumentInterface!.getDoc();
    
inventoryNodes[currentPage]= inventoryNode;
    
savedPagesInRange++;
    
viewDocumentInterface= TransformStoreDocumentFactory.getInstance(searchRequest);
    
inventoryNode= viewDocumentInterface!.getDoc()!.createElement(InventoryData.INVENTORY);
    
viewDocumentInterface!.getBaseNode()!.appendChild(inventoryNode);
    
inventoryNode!.appendChild(ModDomHelper.createNameValueNodes(viewDocumentInterface!.getDoc(), SearchData.PAGE, new Integer(currentPage +1).toString()));
    

                        if(searchRequest!.getFileBaseName() != 
                                    null
                                )
                        
                                    {
                                    inventoryNode!.appendChild(searchRequest!.getFileBaseNameNode(viewDocumentInterface!.getDoc()));
    

                                    }
                                

                                    }
                                
lastPage= currentPage;
    
numberOfResultsOnCurrentPage= 0;
    

                                    }
                                
numberOfResults++;
    

                        if(lastPage >= MAXPAGES -1)
                        
                                    {
                                    break;

                    

                                    }
                                

                                    }
                                
}


                        if(numberOfResultsOnCurrentPage > 0 && (currentPage +1 >= startPage && currentPage +1 <= endPage))
                        
                                    {
                                    inventoryNode!.appendChild(ModDomHelper.createNameValueNodes(viewDocumentInterface!.getDoc(), SearchData.TOTAL_NUMBER_ITEMS_ON_THIS_PAGE, new Integer(numberOfResultsOnCurrentPage -1).toString()));
    
documents[lastPage +1]= viewDocumentInterface!.getDoc();
    
inventoryNodes[lastPage +1]= inventoryNode;
    
savedPagesInRange++;
    

                                    }
                                

                        if(numberOfResultsOnCurrentPage > 0)
                        
                                    {
                                    lastPage++;
    

                                    }
                                

                        if(endPage > MAXPAGES -1)
                        
                                    {
                                    endPage= MAXPAGES -1;
    

                                    }
                                




                        for (
    var index: number = startPage;index <= endPage; index++)
        {

                        if(index <= lastPage)
                        
                                    {
                                    
    var tempDocument: Document = documents[index]!;;
    
inventoryNodes[index]!.appendChild(ModDomHelper.createNameValueNodes(tempDocument, SearchData.TOTAL_NUMBER_PAGES, new Integer(lastPage +1).toString()));
    
inventoryNodes[index]!.appendChild(ModDomHelper.createNameValueNodes(tempDocument, SearchData.TOTAL_NUMBER_ITEMS, new Integer(numberOfResults).toString()));
    




                        for (
    var pageIndex: number = 0;pageIndex <= lastPage; pageIndex++)
        {
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(searchRequest!.getFileBaseName());
    

                        if(stringBuffer!.length() > 0)
                        
                                    {
                                    
                        if(pageIndex != 0)
                        
                                    {
                                    stringBuffer!.append(pageIndex.toString());
    

                                    }
                                
inventoryNodes[index]!.appendChild(ModDomHelper.createNameValueNodes(tempDocument, SearchData.PAGE_INFO, pageIndex.toString(), stringBuffer!.toString()));
    

                                    }
                                
                        else {
                            inventoryNodes[index]!.appendChild(ModDomHelper.createNameValueNodes(tempDocument, SearchData.PAGE_INFO, pageIndex.toString(), SearchData.SEARCH));
    

                        }
                            
}


    var success: string = DomDocumentHelper.toString(tempDocument)!;;
    
productListingPages[index]= new StoreTransformer(abeClientInformation, new TransformInfoHttpSearch(searchRequest) as TransformInfoInterface).translate(success);
    

                                    }
                                
}


                        if(savedPagesInRange == 0)
                        
                                    {
                                    
    var result: string = this.getNoResults(viewDocumentInterface, inventoryNode)!;;
    
productListingPages[0]= new StoreTransformer(abeClientInformation, new TransformInfoHttpSearch(searchRequest)).translate(result);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return productListingPages;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                        }
                            

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PRODUCTSEARCHLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "search", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


}



