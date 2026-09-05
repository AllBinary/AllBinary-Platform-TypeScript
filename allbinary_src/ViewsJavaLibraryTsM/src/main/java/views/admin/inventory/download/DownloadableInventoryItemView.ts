
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
import { ByteArrayInputStream } from '../../../../java/io/ByteArrayInputStream.js';
//not GWT import const ByteArrayInputStream = globalThis.java.io.ByteArrayInputStream;

      
import { HashMap } from '../../../../java/util/HashMap.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { HttpServletRequest } from '../../../../javax/servlet/http/HttpServletRequest.js';
//not GWT import const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
import { StoreFrontFactory } from '../../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
//not GWT import const StoreFrontFactory = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontFactory;

      
import { StoreFrontInterface } from '../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
//not GWT import const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
import { BasicItemData } from '../../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js';
//not GWT import const BasicItemData = globalThis.org.allbinary.business.user.commerce.inventory.item.BasicItemData;

      
import { BasicItemView } from '../../../../org/allbinary/business/user/commerce/inventory/item/BasicItemView.js';
//not GWT import const BasicItemView = globalThis.org.allbinary.business.user.commerce.inventory.item.BasicItemView;

      
import { ItemInterface } from '../../../../org/allbinary/business/user/commerce/inventory/item/ItemInterface.js';
//not GWT import const ItemInterface = globalThis.org.allbinary.business.user.commerce.inventory.item.ItemInterface;

      
import { DownloadableItem } from '../../../../org/allbinary/business/user/commerce/inventory/item/download/DownloadableItem.js';
//not GWT import const DownloadableItem = globalThis.org.allbinary.business.user.commerce.inventory.item.download.DownloadableItem;

      
import { DownloadableItemView } from '../../../../org/allbinary/business/user/commerce/inventory/item/download/DownloadableItemView.js';
//not GWT import const DownloadableItemView = globalThis.org.allbinary.business.user.commerce.inventory.item.download.DownloadableItemView;

      
import { URLGLOBALS } from '../../../../org/allbinary/globals/URLGLOBALS.js';
//not GWT import const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
import { MultipartRequestParams } from '../../../../org/allbinary/logic/communication/http/request/MultipartRequestParams.js';
//not GWT import const MultipartRequestParams = globalThis.org.allbinary.logic.communication.http.request.MultipartRequestParams;

      
import { RequestMapInterface } from '../../../../org/allbinary/logic/communication/http/request/RequestMapInterface.js';
//not GWT import const RequestMapInterface = globalThis.org.allbinary.logic.communication.http.request.RequestMapInterface;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbFile } from '../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
//not plain js import { FilePathData } 
const FilePathData = globalThis.org.allbinary.logic.io.file.FilePathData;

      
import { FileUtil } from '../../../../org/allbinary/logic/io/file/FileUtil.js';
//not GWT import const FileUtil = globalThis.org.allbinary.logic.io.file.FileUtil;

      
import { ZipFileUtil } from '../../../../org/allbinary/logic/io/file/zip/ZipFileUtil.js';
//not GWT import const ZipFileUtil = globalThis.org.allbinary.logic.io.file.zip.ZipFileUtil;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { TransformInfoInterface } from '../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { FileItem } from '../../../../org/apache/commons/fileupload/FileItem.js';
//not GWT import const FileItem = globalThis.org.apache.commons.fileupload.FileItem;

      
import { HttpStoreComponentView } from '../../../../views/business/context/modules/storefront/HttpStoreComponentView.js';
//not GWT import const HttpStoreComponentView = globalThis.views.business.context.modules.storefront.HttpStoreComponentView;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class DownloadableInventoryItemView extends HttpStoreComponentView implements RequestMapInterface {
        

    public static TYPE_ID: number = 11;

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly basicItemData: BasicItemData = BasicItemData.getInstance()!;

    readonly request: HttpServletRequest;

    id: string;

    itemInterface: ItemInterface;

    downloadableItem: DownloadableItem;

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
                        return DownloadableInventoryItemView.TYPE_ID;
    
}


                //@Throws(Exception.constructor)
            
    getFormData(){
this.setRequestHashMap(new MultipartRequestParams(this.request).toHashMap());
    
this.id= this.getRequestHashMap()!.get(basicItemData!.ID) as string;
    
}


    public addDomNodeInterfaces(){

    var vector: BasicArrayList = new BasicArrayListD();;
    

                        if(this.downloadableItem != 
                                    null
                                )
                        
                                    {
                                    vector.add(new DownloadableItemView(this.downloadableItem));
    

                                    }
                                
this.addDomNodeInterface(new BasicItemView(this.itemInterface, vector));
    
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
            
    processFile(fileItem: FileItem){

    var fileName: string = fileItem!.getName()!;;
    

    var fullPath: string = this.getItemFilePath()!;;
    

    var itemResourceFile: AbFile = AbFile.createAbFile(fullPath)!;;
    
itemResourceFile!.mkdir();
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(fullPath);
    
stringBuffer!.append(fileName);
    
this.logUtil!.putF("FileName: " +fileName, this, "processFile()");
    

    var file: AbFile = AbFile.createAbFile(stringBuffer!.toString())!;;
    
this.logUtil!.putF(file.getPath(), this, "processFiles()");
    
file.createNewFile();
    

    var byteArray: number[] = fileItem!.get()!;;
    
FileUtil.getInstance()!.write(new ByteArrayInputStream(byteArray), file);
    
}


                //@Throws(Exception.constructor)
            
    unzip(fileItem: FileItem){

    var fileName: string = fileItem!.getName()!;;
    

    var fullPath: string = this.getItemFilePath()!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(fullPath);
    
stringBuffer!.append(fileName);
    
this.logUtil!.putF("FileName: " +fileName, this, "unzip()");
    

    var file: AbFile = AbFile.createAbFile(stringBuffer!.toString())!;;
    
this.logUtil!.putF(file.getPath(), this, "unzip()");
    
ZipFileUtil.getInstance()!.unzip(fullPath, file, fileName);
    
}


    getItemFilePath(): string{

    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(this.getWeblisketSession()!.getStoreName())!;;
    

    var filePathData: FilePathData = FilePathData.getInstance()!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
stringBuffer!.append(storeFrontInterface!.getCurrentHostNamePath());
    
stringBuffer!.append(this.itemInterface!.getCategory());
    
stringBuffer!.appendchar(filePathData!.SEPARATORCHAR);
    
stringBuffer!.append(this.itemInterface!.getId());
    
stringBuffer!.appendchar(filePathData!.SEPARATORCHAR);
    
stringBuffer!.append(this.downloadableItem!.getId());
    
stringBuffer!.appendchar(filePathData!.SEPARATORCHAR);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    setRequestHashMap(requestHashMap: HashMap<any, any>){
this.requestHashMap= requestHashMap;
    
}


    public getRequestHashMap(): HashMap<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.requestHashMap;
    
}


    public getDownloadableItem(): DownloadableItem{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.downloadableItem;
    
}


}



