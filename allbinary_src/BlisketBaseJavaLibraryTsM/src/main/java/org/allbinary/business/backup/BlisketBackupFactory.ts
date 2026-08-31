
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
        



            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { Vector } from '../../../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
import { StoreFrontInterface } from '../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      //not GWT import const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
import { StoreFrontsEntity } from '../../../../org/allbinary/data/tables/context/module/storefronts/StoreFrontsEntity.js';
      //not GWT import const StoreFrontsEntity = globalThis.org.allbinary.data.tables.context.module.storefronts.StoreFrontsEntity;

      
import { StoreFrontsEntityFactory } from '../../../../org/allbinary/data/tables/context/module/storefronts/StoreFrontsEntityFactory.js';
      //not GWT import const StoreFrontsEntityFactory = globalThis.org.allbinary.data.tables.context.module.storefronts.StoreFrontsEntityFactory;

      
import { PATH_GLOBALS } from '../../../../org/allbinary/globals/PATH_GLOBALS.js';
      //not GWT import const PATH_GLOBALS = globalThis.org.allbinary.globals.PATH_GLOBALS;

      
import { URLGLOBALS } from '../../../../org/allbinary/globals/URLGLOBALS.js';
      //not GWT import const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
import { AbFile } from '../../../../org/allbinary/logic/io/file/AbFile.js';
      //not GWT import const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
import { Directory } from '../../../../org/allbinary/logic/io/file/directory/Directory.js';
      //not GWT import const Directory = globalThis.org.allbinary.logic.io.file.directory.Directory;

      
import { ZipFileUtil } from '../../../../org/allbinary/logic/io/file/zip/ZipFileUtil.js';
      //not GWT import const ZipFileUtil = globalThis.org.allbinary.logic.io.file.zip.ZipFileUtil;

      
import { AbPath } from '../../../../org/allbinary/logic/io/path/AbPath.js';
      //not GWT import const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BlisketBackupFactory
            extends Object
         {
        

    private static readonly instance: BlisketBackupFactory = new BlisketBackupFactory();

    public static getInstance(): BlisketBackupFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BlisketBackupFactory.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly stringUtil: StringUtil = StringUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly directory: Directory = Directory.getInstance()!;

                //@Throws(Exception.constructor)
            
    getFileBasicArrayList(pathString: string): BasicArrayList{

    var path: AbPath = new AbPath(pathString, this.stringUtil!.EMPTY_STRING);;
    

    var file: AbFile = AbFile.createAbFileFromAbPath(path)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.directory.search(file, true);;
    
}


    public backup(){

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, "backup()");
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
stringBuffer!.append(PATH_GLOBALS.getInstance()!.BACKUP_PATH);
    

    var backupPath: string = stringBuffer!.toString()!;;
    

    var path: AbPath = new AbPath(backupPath, this.stringUtil!.EMPTY_STRING);;
    

    var fileBasicArrayList: BasicArrayList = this.getFileBasicArrayList(backupPath)!;;
    
this.backup(fileBasicArrayList, path.toFileSystemString() +"backup.zip");
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "backup()", e);
    
}

}


    public backupViews(){

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, "backupViews()");
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
stringBuffer!.append(PATH_GLOBALS.getInstance()!.BACKUP_PATH);
    

    var backupPath: string = stringBuffer!.toString()!;;
    

    var path: AbPath = new AbPath(backupPath, this.stringUtil!.EMPTY_STRING);;
    

    var fileBasicArrayList: BasicArrayList = new BasicArrayListD();;
    

    var storeFrontsEntity: StoreFrontsEntity = StoreFrontsEntityFactory.getInstance()!.getStoreFrontsEntityInstance()!;;
    

    var storeFrontNamesBasicArrayList: Vector = storeFrontsEntity!.getStoreFrontNames()!;;
    

    var size: number = storeFrontNamesBasicArrayList!.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var nextStore: string = storeFrontNamesBasicArrayList!.get(index) as string;;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
stringBuffer!.append(PATH_GLOBALS.getInstance()!.VIEWS_PATH);
    
stringBuffer!.append(nextStore);
    

    var viewsPath: string = stringBuffer!.toString()!;;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append("Backup Store Views: ");
    
stringBuffer!.append(nextStore);
    
stringBuffer!.append(" from: ");
    
stringBuffer!.append(viewsPath);
    
PreLogUtil.put(stringBuffer!.toString(), this, "backupViews()");
    
fileBasicArrayList!.addAllList(this.getFileBasicArrayList(viewsPath));
    
}

this.backup(fileBasicArrayList, path.toFileSystemString() +"backupViews.zip");
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "backupViews()", e);
    
}

}


    public backupResources(){

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, "backupResources()");
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
stringBuffer!.append(PATH_GLOBALS.getInstance()!.BACKUP_PATH);
    

    var backupPath: string = stringBuffer!.toString()!;;
    

    var path: AbPath = new AbPath(backupPath, this.stringUtil!.EMPTY_STRING);;
    

    var fileBasicArrayList: BasicArrayList = new BasicArrayListD();;
    

    var storeFrontsEntity: StoreFrontsEntity = StoreFrontsEntityFactory.getInstance()!.getStoreFrontsEntityInstance()!;;
    

    var storeFrontNamesBasicArrayList: Vector = storeFrontsEntity!.getStoreFrontNames()!;;
    

    var size: number = storeFrontNamesBasicArrayList!.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var nextStore: string = storeFrontNamesBasicArrayList!.get(index) as string;;
    

    var storeFrontInterface: StoreFrontInterface = storeFrontsEntity!.getStoreFrontInterface(nextStore)!;;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
stringBuffer!.append(storeFrontInterface!.getCurrentHostNamePath());
    
stringBuffer!.append(storeFrontInterface!.getCategoryPath());
    

    var resourcesPath: string = stringBuffer!.toString()!;;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append("Backup Store Resrouces: ");
    
stringBuffer!.append(nextStore);
    
stringBuffer!.append(" from: ");
    
stringBuffer!.append(resourcesPath);
    
PreLogUtil.put(stringBuffer!.toString(), this, "backupResources()");
    
fileBasicArrayList!.addAllList(this.getFileBasicArrayList(resourcesPath));
    
}

this.backup(fileBasicArrayList, path.toFileSystemString() +"backupResources.zip");
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "backupResources()", e);
    
}

}


    public backupJsps(){

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, "backupJsps()");
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
stringBuffer!.append(PATH_GLOBALS.getInstance()!.BACKUP_PATH);
    

    var backupPath: string = stringBuffer!.toString()!;;
    

    var path: AbPath = new AbPath(backupPath, this.stringUtil!.EMPTY_STRING);;
    

    var fileBasicArrayList: BasicArrayList = new BasicArrayListD();;
    

    var storeFrontsEntity: StoreFrontsEntity = StoreFrontsEntityFactory.getInstance()!.getStoreFrontsEntityInstance()!;;
    

    var storeFrontNamesBasicArrayList: Vector = storeFrontsEntity!.getStoreFrontNames()!;;
    

    var size: number = storeFrontNamesBasicArrayList!.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var nextStore: string = storeFrontNamesBasicArrayList!.get(index) as string;;
    
PreLogUtil.put("Backup Store Jsps: " +nextStore, this, "backupJsps()");
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
stringBuffer!.append(nextStore);
    
fileBasicArrayList!.addAllList(this.getFileBasicArrayList(stringBuffer!.toString()));
    
}

this.backup(fileBasicArrayList, path.toFileSystemString() +"backupJsps.zip");
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "backupJsps()", e);
    
}

}


    public backup(fileBasicArrayList: BasicArrayList, zipFile: string){

        try {
            
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append("ZipFile: ");
    
stringBuffer!.append(zipFile);
    
stringBuffer!.append(" BasicArrayList: ");
    
stringBuffer!.appendint(fileBasicArrayList!.size());
    
PreLogUtil.put("Creating Backup Zip File: " +stringBuffer!.toString(), this, "backup()");
    
ZipFileUtil.getInstance()!.create(zipFile, fileBasicArrayList);
    
this.logUtil!.putF("Created Backup Zip File", this, "backup()");
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "backup()", e);
    
}

}


}



