
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
        



            import Vector from "@ohos.util.Vector";
        
import { ByteArrayInputStream } from "../../../../java/io/ByteArrayInputStream.js";

    
import { HashMap } from "../../../../java/util/HashMap.js";

    

//import { Vector } from "../../../../java/util/Vector.js";

    
import { HttpServletRequest } from "../../../../javax/servlet/http/HttpServletRequest.js";

    
import { StoreFrontFactory } from "../../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js";

    
import { StoreFrontInterface } from "../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { BasicItemData } from "../../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js";

    
import { BasicItemView } from "../../../../org/allbinary/business/user/commerce/inventory/item/BasicItemView.js";

    
import { ItemInterface } from "../../../../org/allbinary/business/user/commerce/inventory/item/ItemInterface.js";

    
import { DownloadableItem } from "../../../../org/allbinary/business/user/commerce/inventory/item/download/DownloadableItem.js";

    
import { DownloadableItemView } from "../../../../org/allbinary/business/user/commerce/inventory/item/download/DownloadableItemView.js";

    
import { URLGLOBALS } from "../../../../org/allbinary/globals/URLGLOBALS.js";

    
import { MultipartRequestParams } from "../../../../org/allbinary/logic/communication/http/request/MultipartRequestParams.js";

    
import { RequestMapInterface } from "../../../../org/allbinary/logic/communication/http/request/RequestMapInterface.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbFile } from "../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { FilePathData } from "../../../../org/allbinary/logic/io/file/FilePathData.js";

    
import { FileUtil } from "../../../../org/allbinary/logic/io/file/FileUtil.js";

    
import { ZipFileUtil } from "../../../../org/allbinary/logic/io/file/zip/ZipFileUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { TransformInfoInterface } from "../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { FileItem } from "../../../../org/apache/commons/fileupload/FileItem.js";

    
import { HttpStoreComponentView } from "../../../../views/business/context/modules/storefront/HttpStoreComponentView.js";

    

export class DownloadableInventoryItemView extends HttpStoreComponentView
                , RequestMapInterface {
        

    public TYPE_ID: number = 11;
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly request: HttpServletRequest

    id: string

    itemInterface: ItemInterface

    downloadableItem: DownloadableItem

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
    
this.id= this.getRequestHashMap()!.get(BasicItemData.ID);

                         as String;
    
}


    public addDomNodeInterfaces(){

    var vector: Vector = new Vector();
        
        
;
    

                        if(this.downloadableItem != 
                                    null
                                )
                        
                                    {
                                    vector.add(new DownloadableItemView(this.downloadableItem));
    

                                    }
                                
this.addDomNodeInterface(new BasicItemView(itemInterface, vector));
    
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
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "view()", e);
    

                                    }
                                



                            throw e
}

}


                //@Throws(Error::class)
            
    processFile(fileItem: FileItem){
    //var fileItem = fileItem

    var fileName: string = fileItem!.getName()!;
        
        
;
    

    var fullPath: string = this.getItemFilePath()!;
        
        
;
    

    var itemResourceFile: AbFile = new AbFile(fullPath);
        
        
;
    
itemResourceFile!.mkdir();
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(fullPath);
    
stringBuffer!.append(fileName);
    
logUtil!.put("FileName: " +fileName, this, "processFile()");
    

    var file: AbFile = new AbFile(stringBuffer!.toString());
        
        
;
    
logUtil!.put(file.getPath(), this, "processFiles()");
    
file.createNewFile();
    

    var byteArray: number[] = fileItem!.get()!;
        
        
;
    
FileUtil.getInstance()!.write(new ByteArrayInputStream(byteArray), file);
    
}


                //@Throws(Error::class)
            
    unzip(fileItem: FileItem){
    //var fileItem = fileItem

    var fileName: string = fileItem!.getName()!;
        
        
;
    

    var fullPath: string = this.getItemFilePath()!;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(fullPath);
    
stringBuffer!.append(fileName);
    
logUtil!.put("FileName: " +fileName, this, "unzip()");
    

    var file: AbFile = new AbFile(stringBuffer!.toString());
        
        
;
    
logUtil!.put(file.getPath(), this, "unzip()");
    
ZipFileUtil.getInstance()!.unzip(fullPath, file, fileName);
    
}


    getItemFilePath(): string{

    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(this.getWeblisketSession()!.getStoreName())!;
        
        
;
    

    var filePathData: FilePathData = FilePathData.getInstance()!;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
stringBuffer!.append(storeFrontInterface!.getCurrentHostNamePath());
    
stringBuffer!.append(this.itemInterface!.getCategory());
    
stringBuffer!.append(filePathData!.SEPARATOR);
    
stringBuffer!.append(this.itemInterface!.getId());
    
stringBuffer!.append(filePathData!.SEPARATOR);
    
stringBuffer!.append(this.downloadableItem!.getId());
    
stringBuffer!.append(filePathData!.SEPARATOR);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


    setRequestHashMap(requestHashMap: HashMap<any, any>){
var requestHashMap = requestHashMap
this.requestHashMap= requestHashMap;
    
}


    public getRequestHashMap(): HashMap<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return requestHashMap;
    
}


    public getDownloadableItem(): DownloadableItem{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return downloadableItem;
    
}


}
                
            

