
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

        


            import { Exception } from '../../../java/lang/Exception.js';
        
import { HashMap } from '../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { Set } from '../../../java/util/Set.js';
      //not GWT import const Set = globalThis.java.util.Set;

      
import { Vector } from '../../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
import { HttpServletRequest } from '../../../javax/servlet/http/HttpServletRequest.js';
      //not GWT import const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
import { StoreFrontFactory } from '../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
      //not GWT import const StoreFrontFactory = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontFactory;

      
import { StoreFrontInterface } from '../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      //not GWT import const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
import { BasicItem } from '../../../org/allbinary/business/user/commerce/inventory/item/BasicItem.js';
      //not GWT import const BasicItem = globalThis.org.allbinary.business.user.commerce.inventory.item.BasicItem;

      
import { BasicItemData } from '../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js';
      //not GWT import const BasicItemData = globalThis.org.allbinary.business.user.commerce.inventory.item.BasicItemData;

      
import { BasicItemView } from '../../../org/allbinary/business/user/commerce/inventory/item/BasicItemView.js';
      //not GWT import const BasicItemView = globalThis.org.allbinary.business.user.commerce.inventory.item.BasicItemView;

      
import { ItemInterface } from '../../../org/allbinary/business/user/commerce/inventory/item/ItemInterface.js';
      //not GWT import const ItemInterface = globalThis.org.allbinary.business.user.commerce.inventory.item.ItemInterface;

      
import { DownloadableItem } from '../../../org/allbinary/business/user/commerce/inventory/item/download/DownloadableItem.js';
      //not GWT import const DownloadableItem = globalThis.org.allbinary.business.user.commerce.inventory.item.download.DownloadableItem;

      
import { DownloadableItemView } from '../../../org/allbinary/business/user/commerce/inventory/item/download/DownloadableItemView.js';
      //not GWT import const DownloadableItemView = globalThis.org.allbinary.business.user.commerce.inventory.item.download.DownloadableItemView;

      
import { HttpFileUploadUtil } from '../../../org/allbinary/logic/communication/http/file/upload/HttpFileUploadUtil.js';
      //not GWT import const HttpFileUploadUtil = globalThis.org.allbinary.logic.communication.http.file.upload.HttpFileUploadUtil;

      
import { HttpRequestUtil } from '../../../org/allbinary/logic/communication/http/request/HttpRequestUtil.js';
      //not GWT import const HttpRequestUtil = globalThis.org.allbinary.logic.communication.http.request.HttpRequestUtil;

      
import { MultipartRequestParams } from '../../../org/allbinary/logic/communication/http/request/MultipartRequestParams.js';
      //not GWT import const MultipartRequestParams = globalThis.org.allbinary.logic.communication.http.request.MultipartRequestParams;

      
import { RequestMapInterface } from '../../../org/allbinary/logic/communication/http/request/RequestMapInterface.js';
      //not GWT import const RequestMapInterface = globalThis.org.allbinary.logic.communication.http.request.RequestMapInterface;

      
//not plain js import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { AbPathData } from '../../../org/allbinary/logic/io/path/AbPathData.js';
      const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;

      
import { PathUtil } from '../../../org/allbinary/logic/io/path/PathUtil.js';
      //not GWT import const PathUtil = globalThis.org.allbinary.logic.io.path.PathUtil;

      
//not plain js import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { MediaData } from '../../../org/allbinary/logic/visual/media/MediaData.js';
      //not GWT import const MediaData = globalThis.org.allbinary.logic.visual.media.MediaData;

      
import { TransformInfoInterface } from '../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      //not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { FileItem } from '../../../org/apache/commons/fileupload/FileItem.js';
      //not GWT import const FileItem = globalThis.org.apache.commons.fileupload.FileItem;

      
import { HttpStoreComponentView } from '../../../views/business/context/modules/storefront/HttpStoreComponentView.js';
      //not GWT import const HttpStoreComponentView = globalThis.views.business.context.modules.storefront.HttpStoreComponentView;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InventoryUploadMediaUtil } from './InventoryUploadMediaUtil.js';
//not GWT import const  = globalThis.views.admin.inventory.InventoryUploadMediaUtil;

                
export class InventoryItemView extends HttpStoreComponentView implements RequestMapInterface {
        

    public static TYPE_ID: number = 10;

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly request: HttpServletRequest;

    private imageFileName: string;

    private mediaData: MediaData;

    itemInterface: ItemInterface;

    downloadableItemVector: Vector;

    private requestHashMap: HashMap<any, any>;

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.request= this.getPageContext()!.getRequest() as HttpServletRequest;
    
this.getFormData();
    
}


public constructor (transformInfoInterface: TransformInfoInterface, empty: string){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.request= this.getPageContext()!.getRequest() as HttpServletRequest;
    
}


    public getTypeId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return InventoryItemView.TYPE_ID;
    
}


                //@Throws(Exception.constructor)
            
    getFormData(){
this.setRequestHashMap(new MultipartRequestParams(this.request).toHashMap());
    

    var imageFileItemObject: any = this.getRequestHashMap()!.get(BasicItemData.IMAGE)!;;
    

                        if(HttpFileUploadUtil.getInstance()!.isValid(imageFileItemObject))
                        
                                    {
                                    
    var fileItem: FileItem = imageFileItemObject as FileItem;;
    

                        if(fileItem != 
                                    null
                                 && fileItem!.getSize() > 1)
                        
                                    {
                                    this.imageFileName= HttpRequestUtil.getInstance()!.generateFileName(fileItem!.getName());
    

    var pathData: AbPathData = AbPathData.getInstance()!;;
    

    var pathUtil: PathUtil = PathUtil.getInstance()!;;
    
this.mediaData= MediaData.get(pathData!.getExtension(this.imageFileName));
    
this.imageFileName= pathUtil!.getWithoutExtension(this.imageFileName);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Uploaded File Data: ");
    
stringBuffer!.append(this.imageFileName);
    
stringBuffer!.append(" Extension: ");
    
stringBuffer!.append(this.mediaData!.getName());
    
this.logUtil!.putF(stringBuffer!.toString(), this, "getFormData()");
    

                                    }
                                

                                    }
                                

                                    }
                                
this.itemInterface= new BasicItem(this.getRequestHashMap()) as ItemInterface;
    
}


    public addDomNodeInterfaces(){

    var vector: Vector = new Vector();;
    

    var downloadableItem: DownloadableItem;;
    

    var size: number = this.downloadableItemVector!.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
downloadableItem= this.downloadableItemVector!.get(index) as DownloadableItem;
    
vector.add(new DownloadableItemView(downloadableItem));
    
}

this.addDomNodeInterface(new BasicItemView(this.itemInterface, vector));
    
}


    public getItemInterface(): ItemInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.itemInterface;
    
}


                //@Throws(Exception.constructor)
            
    public view(): string{

        try {
            this.addDomNodeInterfaces();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.view();;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "view()", e);
    

                                    }
                                



                            throw e;
                    
}

}


                //@Throws(Exception.constructor)
            
    processImageFiles(){

    var set: Set = this.getRequestHashMap()!.keys()!;;
    

    var fieldNameArray: any[] = set.toArray()!;;
    

    var size: number = fieldNameArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var fieldName: string = fieldNameArray[index]! as string;;
    

                        if(fieldName!.compareTo(BasicItemData.IMAGE) == 0)
                        
                                    {
                                    
    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(this.getWeblisketSession()!.getStoreName())!;;
    

    var inventoryUploadMediaUtil: InventoryUploadMediaUtil = new InventoryUploadMediaUtil(storeFrontInterface, this.itemInterface);;
    

    var fileItem: FileItem = this.getRequestHashMap()!.get(BasicItemData.IMAGE) as FileItem;;
    
this.itemInterface= inventoryUploadMediaUtil!.saveFiles(fileItem!.get(), this.imageFileName, this.mediaData);
    

                                    }
                                
}

}


    setRequestHashMap(requestHashMap: HashMap<any, any>){
this.requestHashMap= requestHashMap;
    
}


    public getRequestHashMap(): HashMap<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.requestHashMap;
    
}


}



