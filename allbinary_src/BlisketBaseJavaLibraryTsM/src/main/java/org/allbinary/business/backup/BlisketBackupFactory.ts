
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
        

//import { Vector } from "../../../../java/util/Vector.js";

    
import { StoreFrontInterface } from "../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { StoreFrontsEntity } from "../../../../org/allbinary/data/tables/context/module/storefronts/StoreFrontsEntity.js";

    
import { StoreFrontsEntityFactory } from "../../../../org/allbinary/data/tables/context/module/storefronts/StoreFrontsEntityFactory.js";

    
import { PATH_GLOBALS } from "../../../../org/allbinary/globals/PATH_GLOBALS.js";

    
import { URLGLOBALS } from "../../../../org/allbinary/globals/URLGLOBALS.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { PreLogUtil } from "../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { AbFile } from "../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { Directory } from "../../../../org/allbinary/logic/io/file/directory/Directory.js";

    
import { ZipFileUtil } from "../../../../org/allbinary/logic/io/file/zip/ZipFileUtil.js";

    
import { AbPath } from "../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

export class BlisketBackupFactory
            extends Object
         {
        

    private static readonly instance: BlisketBackupFactory = new BlisketBackupFactory();
        
        

    public static getInstance(): BlisketBackupFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly directory: Directory = Directory.getInstance()!;
        
        

                //@Throws(Error::class)
            
    getFileBasicArrayList(pathString: string): BasicArrayList{
var pathString = pathString

    var path: AbPath = new AbPath(pathString);
        
        
;
    

    var file: AbFile = new AbFile(path);
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directory.search(file, true);

                        ;
    
}


    public backup(){

        try {
            logUtil!.put(this.commonStrings!.START, this, "backup()");
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
stringBuffer!.append(PATH_GLOBALS.getInstance()!.BACKUP_PATH);
    

    var backupPath: string = stringBuffer!.toString()!;
        
        
;
    

    var path: AbPath = new AbPath(backupPath);
        
        
;
    

    var fileBasicArrayList: BasicArrayList = this.getFileBasicArrayList(backupPath)!;
        
        
;
    
this.backup(fileBasicArrayList, path.toFileSystemString() +"backup.zip");
    

                //: 
} catch(e) 
            {
logUtil!.put(this.commonStrings!.EXCEPTION, this, "backup()", e);
    
}

}


    public backupViews(){

        try {
            logUtil!.put(this.commonStrings!.START, this, "backupViews()");
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
stringBuffer!.append(PATH_GLOBALS.getInstance()!.BACKUP_PATH);
    

    var backupPath: string = stringBuffer!.toString()!;
        
        
;
    

    var path: AbPath = new AbPath(backupPath);
        
        
;
    

    var fileBasicArrayList: BasicArrayList = new BasicArrayList();
        
        
;
    

    var storeFrontsEntity: StoreFrontsEntity = StoreFrontsEntityFactory.getInstance()!.getStoreFrontsEntityInstance()!;
        
        
;
    

    var storeFrontNamesBasicArrayList: Vector = storeFrontsEntity!.getStoreFrontNames()!;
        
        
;
    

    var size: number = storeFrontNamesBasicArrayList!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var nextStore: string = storeFrontNamesBasicArrayList!.get(index);

                         as String;
        
        
;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
stringBuffer!.append(PATH_GLOBALS.getInstance()!.VIEWS_PATH);
    
stringBuffer!.append(nextStore);
    

    var viewsPath: string = stringBuffer!.toString()!;
        
        
;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append("Backup Store Views: ");
    
stringBuffer!.append(nextStore);
    
stringBuffer!.append(" from: ");
    
stringBuffer!.append(viewsPath);
    
PreLogUtil.put(stringBuffer!.toString(), this, "backupViews()");
    
fileBasicArrayList!.addAll(this.getFileBasicArrayList(viewsPath));
    
}

this.backup(fileBasicArrayList, path.toFileSystemString() +"backupViews.zip");
    

                //: 
} catch(e) 
            {
logUtil!.put(this.commonStrings!.EXCEPTION, this, "backupViews()", e);
    
}

}


    public backupResources(){

        try {
            logUtil!.put(this.commonStrings!.START, this, "backupResources()");
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
stringBuffer!.append(PATH_GLOBALS.getInstance()!.BACKUP_PATH);
    

    var backupPath: string = stringBuffer!.toString()!;
        
        
;
    

    var path: AbPath = new AbPath(backupPath);
        
        
;
    

    var fileBasicArrayList: BasicArrayList = new BasicArrayList();
        
        
;
    

    var storeFrontsEntity: StoreFrontsEntity = StoreFrontsEntityFactory.getInstance()!.getStoreFrontsEntityInstance()!;
        
        
;
    

    var storeFrontNamesBasicArrayList: Vector = storeFrontsEntity!.getStoreFrontNames()!;
        
        
;
    

    var size: number = storeFrontNamesBasicArrayList!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var nextStore: string = storeFrontNamesBasicArrayList!.get(index);

                         as String;
        
        
;
    

    var storeFrontInterface: StoreFrontInterface = storeFrontsEntity!.getStoreFrontInterface(nextStore)!;
        
        
;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
stringBuffer!.append(storeFrontInterface!.getCurrentHostNamePath());
    
stringBuffer!.append(storeFrontInterface!.getCategoryPath());
    

    var resourcesPath: string = stringBuffer!.toString()!;
        
        
;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append("Backup Store Resrouces: ");
    
stringBuffer!.append(nextStore);
    
stringBuffer!.append(" from: ");
    
stringBuffer!.append(resourcesPath);
    
PreLogUtil.put(stringBuffer!.toString(), this, "backupResources()");
    
fileBasicArrayList!.addAll(this.getFileBasicArrayList(resourcesPath));
    
}

this.backup(fileBasicArrayList, path.toFileSystemString() +"backupResources.zip");
    

                //: 
} catch(e) 
            {
logUtil!.put(this.commonStrings!.EXCEPTION, this, "backupResources()", e);
    
}

}


    public backupJsps(){

        try {
            logUtil!.put(this.commonStrings!.START, this, "backupJsps()");
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
stringBuffer!.append(PATH_GLOBALS.getInstance()!.BACKUP_PATH);
    

    var backupPath: string = stringBuffer!.toString()!;
        
        
;
    

    var path: AbPath = new AbPath(backupPath);
        
        
;
    

    var fileBasicArrayList: BasicArrayList = new BasicArrayList();
        
        
;
    

    var storeFrontsEntity: StoreFrontsEntity = StoreFrontsEntityFactory.getInstance()!.getStoreFrontsEntityInstance()!;
        
        
;
    

    var storeFrontNamesBasicArrayList: Vector = storeFrontsEntity!.getStoreFrontNames()!;
        
        
;
    

    var size: number = storeFrontNamesBasicArrayList!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var nextStore: string = storeFrontNamesBasicArrayList!.get(index);

                         as String;
        
        
;
    
PreLogUtil.put("Backup Store Jsps: " +nextStore, this, "backupJsps()");
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
stringBuffer!.append(nextStore);
    
fileBasicArrayList!.addAll(this.getFileBasicArrayList(stringBuffer!.toString()));
    
}

this.backup(fileBasicArrayList, path.toFileSystemString() +"backupJsps.zip");
    

                //: 
} catch(e) 
            {
logUtil!.put(this.commonStrings!.EXCEPTION, this, "backupJsps()", e);
    
}

}


    public backup(fileBasicArrayList: BasicArrayList, zipFile: string){
var fileBasicArrayList = fileBasicArrayList
var zipFile = zipFile

        try {
            
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append("ZipFile: ");
    
stringBuffer!.append(zipFile);
    
stringBuffer!.append(" BasicArrayList: ");
    
stringBuffer!.appendint(fileBasicArrayList!.size());
    
PreLogUtil.put("Creating Backup Zip File: " +stringBuffer!.toString(), this, "backup()");
    
ZipFileUtil.getInstance()!.create(zipFile, fileBasicArrayList);
    
logUtil!.put("Created Backup Zip File", this, "backup()");
    

                //: 
} catch(e) 
            {
logUtil!.put(this.commonStrings!.EXCEPTION, this, "backup()", e);
    
}

}


}
                
            

