
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
        



import { Vector } from "../../../../java/util/Vector.js";

    
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
        
        

                @Throws(Exception::class)
            
    getFileBasicArrayList(pathString: string): BasicArrayList{
var pathString = pathString

    var path: AbPath = new AbPath(pathString);
        
        


    var file: AbFile = new AbFile(path);
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return directory.search(file, true);
    
}


    public backup(){

        try {
            put(this.commonStrings!.START, this, "backup()")

    var stringBuffer: StringMaker = new StringMaker();
        
        

append(URLGLOBALS.getWebappPath())
append(PATH_GLOBALS.getInstance()!.BACKUP_PATH)

    var backupPath: string = stringBuffer!.toString()!;
        
        


    var path: AbPath = new AbPath(backupPath);
        
        


    var fileBasicArrayList: BasicArrayList = this.getFileBasicArrayList(backupPath)!;
        
        

this.backup(fileBasicArrayList, path.toFileSystemString() +"backup.zip")
} catch(e: Exception)
            {
put(this.commonStrings!.EXCEPTION, this, "backup()", e)
}

}


    public backupViews(){

        try {
            put(this.commonStrings!.START, this, "backupViews()")

    var stringBuffer: StringMaker = new StringMaker();
        
        

append(URLGLOBALS.getWebappPath())
append(PATH_GLOBALS.getInstance()!.BACKUP_PATH)

    var backupPath: string = stringBuffer!.toString()!;
        
        


    var path: AbPath = new AbPath(backupPath);
        
        


    var fileBasicArrayList: BasicArrayList = new BasicArrayList();
        
        


    var storeFrontsEntity: StoreFrontsEntity = StoreFrontsEntityFactory.getInstance()!.getStoreFrontsEntityInstance()!;
        
        


    var storeFrontNamesBasicArrayList: Vector = storeFrontsEntity!.getStoreFrontNames()!;
        
        


    var size: number = storeFrontNamesBasicArrayList!.length!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var nextStore: string = storeFrontNamesBasicArrayList!.get(index) as String;
        
        

delete(0, stringBuffer!.length())
append(URLGLOBALS.getWebappPath())
append(PATH_GLOBALS.getInstance()!.VIEWS_PATH)
append(nextStore)

    var viewsPath: string = stringBuffer!.toString()!;
        
        

delete(0, stringBuffer!.length())
append("Backup Store Views: ")
append(nextStore)
append(" from: ")
append(viewsPath)
put(stringBuffer!.toString(), this, "backupViews()")
addAll(this.getFileBasicArrayList(viewsPath))
}

this.backup(fileBasicArrayList, path.toFileSystemString() +"backupViews.zip")
} catch(e: Exception)
            {
put(this.commonStrings!.EXCEPTION, this, "backupViews()", e)
}

}


    public backupResources(){

        try {
            put(this.commonStrings!.START, this, "backupResources()")

    var stringBuffer: StringMaker = new StringMaker();
        
        

append(URLGLOBALS.getWebappPath())
append(PATH_GLOBALS.getInstance()!.BACKUP_PATH)

    var backupPath: string = stringBuffer!.toString()!;
        
        


    var path: AbPath = new AbPath(backupPath);
        
        


    var fileBasicArrayList: BasicArrayList = new BasicArrayList();
        
        


    var storeFrontsEntity: StoreFrontsEntity = StoreFrontsEntityFactory.getInstance()!.getStoreFrontsEntityInstance()!;
        
        


    var storeFrontNamesBasicArrayList: Vector = storeFrontsEntity!.getStoreFrontNames()!;
        
        


    var size: number = storeFrontNamesBasicArrayList!.length!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var nextStore: string = storeFrontNamesBasicArrayList!.get(index) as String;
        
        


    var storeFrontInterface: StoreFrontInterface = storeFrontsEntity!.getStoreFrontInterface(nextStore)!;
        
        

delete(0, stringBuffer!.length())
append(URLGLOBALS.getWebappPath())
append(storeFrontInterface!.getCurrentHostNamePath())
append(storeFrontInterface!.getCategoryPath())

    var resourcesPath: string = stringBuffer!.toString()!;
        
        

delete(0, stringBuffer!.length())
append("Backup Store Resrouces: ")
append(nextStore)
append(" from: ")
append(resourcesPath)
put(stringBuffer!.toString(), this, "backupResources()")
addAll(this.getFileBasicArrayList(resourcesPath))
}

this.backup(fileBasicArrayList, path.toFileSystemString() +"backupResources.zip")
} catch(e: Exception)
            {
put(this.commonStrings!.EXCEPTION, this, "backupResources()", e)
}

}


    public backupJsps(){

        try {
            put(this.commonStrings!.START, this, "backupJsps()")

    var stringBuffer: StringMaker = new StringMaker();
        
        

append(URLGLOBALS.getWebappPath())
append(PATH_GLOBALS.getInstance()!.BACKUP_PATH)

    var backupPath: string = stringBuffer!.toString()!;
        
        


    var path: AbPath = new AbPath(backupPath);
        
        


    var fileBasicArrayList: BasicArrayList = new BasicArrayList();
        
        


    var storeFrontsEntity: StoreFrontsEntity = StoreFrontsEntityFactory.getInstance()!.getStoreFrontsEntityInstance()!;
        
        


    var storeFrontNamesBasicArrayList: Vector = storeFrontsEntity!.getStoreFrontNames()!;
        
        


    var size: number = storeFrontNamesBasicArrayList!.length!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var nextStore: string = storeFrontNamesBasicArrayList!.get(index) as String;
        
        

put("Backup Store Jsps: " +nextStore, this, "backupJsps()")
delete(0, stringBuffer!.length())
append(URLGLOBALS.getWebappPath())
append(nextStore)
addAll(this.getFileBasicArrayList(stringBuffer!.toString()))
}

this.backup(fileBasicArrayList, path.toFileSystemString() +"backupJsps.zip")
} catch(e: Exception)
            {
put(this.commonStrings!.EXCEPTION, this, "backupJsps()", e)
}

}


    public backup(fileBasicArrayList: BasicArrayList, zipFile: string){
var fileBasicArrayList = fileBasicArrayList
var zipFile = zipFile

        try {
            
    var stringBuffer: StringMaker = new StringMaker();
        
        

delete(0, stringBuffer!.length())
append("ZipFile: ")
append(zipFile)
append(" BasicArrayList: ")
appendint(fileBasicArrayList!.size())
put("Creating Backup Zip File: " +stringBuffer!.toString(), this, "backup()")
create(zipFile, fileBasicArrayList)
put("Created Backup Zip File", this, "backup()")
} catch(e: Exception)
            {
put(this.commonStrings!.EXCEPTION, this, "backup()", e)
}

}


}
                
            

