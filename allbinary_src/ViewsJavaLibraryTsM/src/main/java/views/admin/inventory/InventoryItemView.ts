
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
//not GWT import const HashMap

import { Set } from '../../../java/util/Set.js';
//not GWT import const Set

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { HttpServletRequest } from '../../../javax/servlet/http/HttpServletRequest.js';
//not GWT import const HttpServletRequest

import { StoreFrontFactory } from '../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
//not GWT import const StoreFrontFactory

import { StoreFrontInterface } from '../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
//not GWT import const StoreFrontInterface

import { BasicItem } from '../../../org/allbinary/business/user/commerce/inventory/item/BasicItem.js';
//not GWT import const BasicItem

import { BasicItemData } from '../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js';
//not GWT import const BasicItemData

import { BasicItemView } from '../../../org/allbinary/business/user/commerce/inventory/item/BasicItemView.js';
//not GWT import const BasicItemView

import { ItemInterface } from '../../../org/allbinary/business/user/commerce/inventory/item/ItemInterface.js';
//not GWT import const ItemInterface

import { DownloadableItem } from '../../../org/allbinary/business/user/commerce/inventory/item/download/DownloadableItem.js';
//not GWT import const DownloadableItem

import { DownloadableItemView } from '../../../org/allbinary/business/user/commerce/inventory/item/download/DownloadableItemView.js';
//not GWT import const DownloadableItemView

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

import { HttpFileUploadUtil } from '../../../org/allbinary/logic/communication/http/file/upload/HttpFileUploadUtil.js';
//not GWT import const HttpFileUploadUtil

import { HttpRequestUtil } from '../../../org/allbinary/logic/communication/http/request/HttpRequestUtil.js';
//not GWT import const HttpRequestUtil

import { MultipartRequestParams } from '../../../org/allbinary/logic/communication/http/request/MultipartRequestParams.js';
//not GWT import const MultipartRequestParams

import { RequestMapInterface } from '../../../org/allbinary/logic/communication/http/request/RequestMapInterface.js';
//not GWT import const RequestMapInterface

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { AbPathData } 
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;
type AbPathData<T = any, U = any> = typeof AbPathData extends abstract new (...args: any[]) => infer Instance ? Instance : typeof AbPathData;

import { PathUtil } from '../../../org/allbinary/logic/io/path/PathUtil.js';
//not GWT import const PathUtil

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { MediaData } from '../../../org/allbinary/logic/visual/media/MediaData.js';
//not GWT import const MediaData

import { TransformInfoInterface } from '../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface

import { FileItem } from '../../../org/apache/commons/fileupload/FileItem.js';
//not GWT import const FileItem

import { HttpStoreComponentView } from '../../../views/business/context/modules/storefront/HttpStoreComponentView.js';
//not GWT import const HttpStoreComponentView

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InventoryUploadMediaUtil } from './InventoryUploadMediaUtil.js';
//not GWT import - same folder const InventoryUploadMediaUtil

export class InventoryItemView extends HttpStoreComponentView implements RequestMapInterface {
        

    public static TYPE_ID: number = 10;

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly basicItemData: BasicItemData = BasicItemData.getInstance()!;

    readonly request: HttpServletRequest;

    private imageFileName: string;

    private mediaData: MediaData;

    itemInterface: ItemInterface;

    downloadableItemVector: BasicArrayList;

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
    

    let imageFileItemObject: any = this.getRequestHashMap()!.get(this.basicItemData!.IMAGE)!;;
    

                        if(HttpFileUploadUtil.getInstance()!.isValid(imageFileItemObject))
                        
                                    {
                                    
    let fileItem: FileItem = imageFileItemObject as FileItem;;
    

                        if(fileItem != 
                                    null
                                 && fileItem!.getSize() > 1)
                        
                                    {
                                    this.imageFileName= HttpRequestUtil.getInstance()!.generateFileName(fileItem!.getName());
    

    let pathData: AbPathData = AbPathData.getInstance()!;;
    

    let pathUtil: PathUtil = PathUtil.getInstance()!;;
    
this.mediaData= MediaData.get(pathData!.getExtension(this.imageFileName));
    
this.imageFileName= pathUtil!.getWithoutExtension(this.imageFileName);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
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

    let vector: BasicArrayList = new BasicArrayListD();;
    

    let downloadableItem: DownloadableItem;;
    

    let size: number = this.downloadableItemVector!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
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

 try { this.addDomNodeInterfaces();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.view();;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "view()", e);
    

                                    }
                                



                            throw e;
                    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    processImageFiles(){

    let set: Set = this.getRequestHashMap()!.keys()!;;
    

    let fieldNameArray: any[] = set.toArray()!;;
    

    let size: number = fieldNameArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let fieldName: string = fieldNameArray[index]! as string;;
    

                        if(fieldName!.compareTo(this.basicItemData!.IMAGE) == 0)
                        
                                    {
                                    
    let storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(this.getWeblisketSession()!.getStoreName())!;;
    

    let inventoryUploadMediaUtil: InventoryUploadMediaUtil = new InventoryUploadMediaUtil(storeFrontInterface, this.itemInterface);;
    

    let fileItem: FileItem = this.getRequestHashMap()!.get(this.basicItemData!.IMAGE) as FileItem;;
    
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

