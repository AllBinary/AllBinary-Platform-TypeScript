
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

    
import { Set } from "../../../java/util/Set.js";

    
import { Vector } from "../../../java/util/Vector.js";

    
import { HttpServletRequest } from "../../../javax/servlet/http/HttpServletRequest.js";

    
import { StoreFrontFactory } from "../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js";

    
import { StoreFrontInterface } from "../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { BasicItem } from "../../../org/allbinary/business/user/commerce/inventory/item/BasicItem.js";

    
import { BasicItemData } from "../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js";

    
import { BasicItemView } from "../../../org/allbinary/business/user/commerce/inventory/item/BasicItemView.js";

    
import { ItemInterface } from "../../../org/allbinary/business/user/commerce/inventory/item/ItemInterface.js";

    
import { DownloadableItem } from "../../../org/allbinary/business/user/commerce/inventory/item/download/DownloadableItem.js";

    
import { DownloadableItemView } from "../../../org/allbinary/business/user/commerce/inventory/item/download/DownloadableItemView.js";

    
import { HttpFileUploadUtil } from "../../../org/allbinary/logic/communication/http/file/upload/HttpFileUploadUtil.js";

    
import { HttpRequestUtil } from "../../../org/allbinary/logic/communication/http/request/HttpRequestUtil.js";

    
import { MultipartRequestParams } from "../../../org/allbinary/logic/communication/http/request/MultipartRequestParams.js";

    
import { RequestMapInterface } from "../../../org/allbinary/logic/communication/http/request/RequestMapInterface.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { PathUtil } from "../../../org/allbinary/logic/io/path/PathUtil.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { MediaData } from "../../../org/allbinary/logic/visual/media/MediaData.js";

    
import { TransformInfoInterface } from "../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { FileItem } from "../../../org/apache/commons/fileupload/FileItem.js";

    
import { HttpStoreComponentView } from "../../../views/business/context/modules/storefront/HttpStoreComponentView.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class InventoryItemView extends HttpStoreComponentView implements RequestMapInterface {
        

    public TYPE_ID: number = 10;
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly request: HttpServletRequest

    private imageFileName: string

    private mediaData: MediaData

    itemInterface: ItemInterface

    downloadableItemVector: Vector

    private requestHashMap: HashMap<any, any>
public constructor (transformInfoInterface: TransformInfoInterface)                        

                            : super(transformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
this.request= this.getPageContext()!.getRequest();

                         as HttpServletRequest;
    
this.getFormData();
    
}

public constructor (transformInfoInterface: TransformInfoInterface, empty: string)                        

                            : super(transformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface
var empty = empty


                            //For kotlin this is before the body of the constructor.
                    
this.request= this.getPageContext()!.getRequest();

                         as HttpServletRequest;
    
}


    public getTypeId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TYPE_ID;
    
}


                //@Throws(Error::class)
            
    getFormData(){
this.setRequestHashMap(new MultipartRequestParams(request).
                            toHashMap());
    

    var imageFileItemObject: any = this.getRequestHashMap()!.get(BasicItemData.IMAGE)!;
        
        
;
    

                        if(HttpFileUploadUtil.getInstance()!.isValid(imageFileItemObject))
                        
                                    {
                                    
    var fileItem: FileItem = imageFileItemObject as FileItem;
        
        
;
    

                        if(fileItem != 
                                    null
                                 && fileItem!.getSize() > 1)
                        
                                    {
                                    this.imageFileName= HttpRequestUtil.getInstance()!.generateFileName(fileItem!.getName());
    

    var pathUtil: PathUtil = PathUtil.getInstance()!;
        
        
;
    
this.mediaData= MediaData.get(pathUtil!.getExtension(this.imageFileName));
    
this.imageFileName= pathUtil!.getWithoutExtension(this.imageFileName);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
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

    var vector: Vector = new Vector();
        
        
;
    

    var downloadableItem: DownloadableItem
;
    

    var size: number = this.downloadableItemVector!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
downloadableItem= this.downloadableItemVector!.get(index);

                         as DownloadableItem;
    
vector.add(new DownloadableItemView(downloadableItem));
    
}

this.addDomNodeInterface(new BasicItemView(itemInterface, vector));
    
}


    public getItemInterface(): ItemInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.itemInterface;
    
}


                //@Throws(Error::class)
            
    public view(): string{

        try {
            this.addDomNodeInterfaces();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.view();

                        ;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "view()", e);
    

                                    }
                                



                            throw e
}

}


                //@Throws(Error::class)
            
    processImageFiles(){

    var set: Set = this.getRequestHashMap()!.keys!;
        
        
;
    

    var fieldNameArray: any[] = set.toArray()!;
        
        
;
    

    var size: number = fieldNameArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var fieldName: string = fieldNameArray[index]! as String;
        
        
;
    

                        if(fieldName!.compareTo(BasicItemData.IMAGE) == 0)
                        
                                    {
                                    
    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(this.getWeblisketSession()!.getStoreName())!;
        
        
;
    

    var inventoryUploadMediaUtil: InventoryUploadMediaUtil = new InventoryUploadMediaUtil(storeFrontInterface, this.itemInterface);
        
        
;
    

    var fileItem: FileItem = this.getRequestHashMap()!.get(BasicItemData.IMAGE);

                         as FileItem;
        
        
;
    
this.itemInterface= inventoryUploadMediaUtil!.saveFiles(fileItem!.get(), this.imageFileName, this.mediaData);
    

                                    }
                                
}

}


    setRequestHashMap(requestHashMap: HashMap<any, any>){
var requestHashMap = requestHashMap
this.requestHashMap= requestHashMap;
    
}


    public getRequestHashMap(): HashMap<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return requestHashMap;
    
}


}
                
            

