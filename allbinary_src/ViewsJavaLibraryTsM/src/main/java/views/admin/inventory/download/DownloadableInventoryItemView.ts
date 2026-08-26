
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
        
//not game specific package import { ByteArrayInputStream } from '../../../../java/io/ByteArrayInputStream.js';
      const ByteArrayInputStream = globalThis.java.io.ByteArrayInputStream;

      
//not game specific package import { HashMap } from '../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { Vector } from '../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { HttpServletRequest } from '../../../../javax/servlet/http/HttpServletRequest.js';
      const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
//not game specific package import { StoreFrontFactory } from '../../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
      const StoreFrontFactory = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontFactory;

      
//not game specific package import { StoreFrontInterface } from '../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
//not game specific package import { BasicItemData } from '../../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js';
      const BasicItemData = globalThis.org.allbinary.business.user.commerce.inventory.item.BasicItemData;

      
//not game specific package import { BasicItemView } from '../../../../org/allbinary/business/user/commerce/inventory/item/BasicItemView.js';
      const BasicItemView = globalThis.org.allbinary.business.user.commerce.inventory.item.BasicItemView;

      
//not game specific package import { ItemInterface } from '../../../../org/allbinary/business/user/commerce/inventory/item/ItemInterface.js';
      const ItemInterface = globalThis.org.allbinary.business.user.commerce.inventory.item.ItemInterface;

      
//not game specific package import { DownloadableItem } from '../../../../org/allbinary/business/user/commerce/inventory/item/download/DownloadableItem.js';
      const DownloadableItem = globalThis.org.allbinary.business.user.commerce.inventory.item.download.DownloadableItem;

      
//not game specific package import { DownloadableItemView } from '../../../../org/allbinary/business/user/commerce/inventory/item/download/DownloadableItemView.js';
      const DownloadableItemView = globalThis.org.allbinary.business.user.commerce.inventory.item.download.DownloadableItemView;

      
//not game specific package import { URLGLOBALS } from '../../../../org/allbinary/globals/URLGLOBALS.js';
      const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
//not game specific package import { MultipartRequestParams } from '../../../../org/allbinary/logic/communication/http/request/MultipartRequestParams.js';
      const MultipartRequestParams = globalThis.org.allbinary.logic.communication.http.request.MultipartRequestParams;

      
//not game specific package import { RequestMapInterface } from '../../../../org/allbinary/logic/communication/http/request/RequestMapInterface.js';
      const RequestMapInterface = globalThis.org.allbinary.logic.communication.http.request.RequestMapInterface;

      
//not game specific package import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { AbFile } from '../../../../org/allbinary/logic/io/file/AbFile.js';
      const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
//not game specific package import { FilePathData } from '../../../../org/allbinary/logic/io/file/FilePathData.js';
      const FilePathData = globalThis.org.allbinary.logic.io.file.FilePathData;

      
//not game specific package import { FileUtil } from '../../../../org/allbinary/logic/io/file/FileUtil.js';
      const FileUtil = globalThis.org.allbinary.logic.io.file.FileUtil;

      
//not game specific package import { ZipFileUtil } from '../../../../org/allbinary/logic/io/file/zip/ZipFileUtil.js';
      const ZipFileUtil = globalThis.org.allbinary.logic.io.file.zip.ZipFileUtil;

      
//not game specific package import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { TransformInfoInterface } from '../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
//not game specific package import { FileItem } from '../../../../org/apache/commons/fileupload/FileItem.js';
      const FileItem = globalThis.org.apache.commons.fileupload.FileItem;

      
//not game specific package import { HttpStoreComponentView } from '../../../../views/business/context/modules/storefront/HttpStoreComponentView.js';
      const HttpStoreComponentView = globalThis.views.business.context.modules.storefront.HttpStoreComponentView;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class DownloadableInventoryItemView extends HttpStoreComponentView implements RequestMapInterface {
        

    public static TYPE_ID: number = 11;

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

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
    
this.id= this.getRequestHashMap()!.get(BasicItemData.ID) as string;
    
}


    public addDomNodeInterfaces(){

    var vector: Vector = new Vector();;
    

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
                
            

