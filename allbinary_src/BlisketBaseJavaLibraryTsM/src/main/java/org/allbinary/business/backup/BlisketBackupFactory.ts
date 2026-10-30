
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
        
import { StoreFrontInterface } from '../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
//not GWT import const StoreFrontInterface

import { StoreFrontsEntity } from '../../../../org/allbinary/data/tables/context/module/storefronts/StoreFrontsEntity.js';
//not GWT import const StoreFrontsEntity

import { StoreFrontsEntityFactory } from '../../../../org/allbinary/data/tables/context/module/storefronts/StoreFrontsEntityFactory.js';
//not GWT import const StoreFrontsEntityFactory

import { PATH_GLOBALS } from '../../../../org/allbinary/globals/PATH_GLOBALS.js';
//not GWT import const PATH_GLOBALS

import { URLGLOBALS } from '../../../../org/allbinary/globals/URLGLOBALS.js';
//not GWT import const URLGLOBALS

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
type PreLogUtil<T = any, U = any> = typeof PreLogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof PreLogUtil;

import { AbFile } from '../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile

import { Directory } from '../../../../org/allbinary/logic/io/file/directory/Directory.js';
//not GWT import const Directory

import { ZipFileUtil } from '../../../../org/allbinary/logic/io/file/zip/ZipFileUtil.js';
//not GWT import const ZipFileUtil

import { AbPath } from '../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

















                                        
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

    let path: AbPath = new AbPath(pathString, this.stringUtil!.EMPTY_STRING);;
    

    let file: AbFile = AbFile.createAbFileFromAbPath(path)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.directory.search(file, true);;
    
}

backup(...args: any[]): any {
   
    if (args.length === 0) return this.backup$overload1();
   
    if (args.length === 2 && typeof args[1] === 'string') return this.backup$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: backup'); }
  
    public backup$overload1(){

 try { this.logUtil!.putF(this.commonStrings!.START, this, "backup()");
    

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
stringBuffer!.append(PATH_GLOBALS.getInstance()!.BACKUP_PATH);
    

    let backupPath: string = stringBuffer!.toString()!;;
    

    let path: AbPath = new AbPath(backupPath, this.stringUtil!.EMPTY_STRING);;
    

    let fileBasicArrayList: BasicArrayList = this.getFileBasicArrayList(backupPath)!;;
    
this.backup(fileBasicArrayList, path.toFileSystemString() +"backup.zip");
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "backup()", e);
    

 }
   }
 
}


    public backupViews(){

 try { this.logUtil!.putF(this.commonStrings!.START, this, "backupViews()");
    

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
stringBuffer!.append(PATH_GLOBALS.getInstance()!.BACKUP_PATH);
    

    let backupPath: string = stringBuffer!.toString()!;;
    

    let path: AbPath = new AbPath(backupPath, this.stringUtil!.EMPTY_STRING);;
    

    let fileBasicArrayList: BasicArrayList = new BasicArrayListD();;
    

    let storeFrontsEntity: StoreFrontsEntity = StoreFrontsEntityFactory.getInstance()!.getStoreFrontsEntityInstance()!;;
    

    let storeFrontNamesBasicArrayList: BasicArrayList = storeFrontsEntity!.getStoreFrontNames()!;;
    

    let size: number = storeFrontNamesBasicArrayList!.size()!;;
    

    let nextStore: string;;
    

    let viewsPath: string;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
nextStore= storeFrontNamesBasicArrayList!.get(index) as string;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
stringBuffer!.append(PATH_GLOBALS.getInstance()!.VIEWS_PATH);
    
stringBuffer!.append(nextStore);
    
viewsPath= stringBuffer!.toString();
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append("Backup Store Views: ");
    
stringBuffer!.append(nextStore);
    
stringBuffer!.append(" from: ");
    
stringBuffer!.append(viewsPath);
    
PreLogUtil.put(stringBuffer!.toString(), this, "backupViews()");
    
fileBasicArrayList!.addAllList(this.getFileBasicArrayList(viewsPath));
    
}

this.backup(fileBasicArrayList, path.toFileSystemString() +"backupViews.zip");
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "backupViews()", e);
    

 }
   }
 
}


    public backupResources(){

 try { this.logUtil!.putF(this.commonStrings!.START, this, "backupResources()");
    

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
stringBuffer!.append(PATH_GLOBALS.getInstance()!.BACKUP_PATH);
    

    let backupPath: string = stringBuffer!.toString()!;;
    

    let path: AbPath = new AbPath(backupPath, this.stringUtil!.EMPTY_STRING);;
    

    let fileBasicArrayList: BasicArrayList = new BasicArrayListD();;
    

    let storeFrontsEntity: StoreFrontsEntity = StoreFrontsEntityFactory.getInstance()!.getStoreFrontsEntityInstance()!;;
    

    let storeFrontNamesBasicArrayList: BasicArrayList = storeFrontsEntity!.getStoreFrontNames()!;;
    

    let size: number = storeFrontNamesBasicArrayList!.size()!;;
    

    let nextStore: string;;
    

    let storeFrontInterface: StoreFrontInterface;;
    

    let resourcesPath: string;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
nextStore= storeFrontNamesBasicArrayList!.get(index) as string;
    
storeFrontInterface= storeFrontsEntity!.getStoreFrontInterface(nextStore);
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
stringBuffer!.append(storeFrontInterface!.getCurrentHostNamePath());
    
stringBuffer!.append(storeFrontInterface!.getCategoryPath());
    
resourcesPath= stringBuffer!.toString();
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append("Backup Store Resrouces: ");
    
stringBuffer!.append(nextStore);
    
stringBuffer!.append(" from: ");
    
stringBuffer!.append(resourcesPath);
    
PreLogUtil.put(stringBuffer!.toString(), this, "backupResources()");
    
fileBasicArrayList!.addAllList(this.getFileBasicArrayList(resourcesPath));
    
}

this.backup(fileBasicArrayList, path.toFileSystemString() +"backupResources.zip");
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "backupResources()", e);
    

 }
   }
 
}


    public backupJsps(){

 try { this.logUtil!.putF(this.commonStrings!.START, this, "backupJsps()");
    

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
stringBuffer!.append(PATH_GLOBALS.getInstance()!.BACKUP_PATH);
    

    let backupPath: string = stringBuffer!.toString()!;;
    

    let path: AbPath = new AbPath(backupPath, this.stringUtil!.EMPTY_STRING);;
    

    let fileBasicArrayList: BasicArrayList = new BasicArrayListD();;
    

    let storeFrontsEntity: StoreFrontsEntity = StoreFrontsEntityFactory.getInstance()!.getStoreFrontsEntityInstance()!;;
    

    let storeFrontNamesBasicArrayList: BasicArrayList = storeFrontsEntity!.getStoreFrontNames()!;;
    

    let size: number = storeFrontNamesBasicArrayList!.size()!;;
    

    let nextStore: string;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
nextStore= storeFrontNamesBasicArrayList!.get(index) as string;
    
PreLogUtil.put("Backup Store Jsps: " +nextStore, this, "backupJsps()");
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
stringBuffer!.append(nextStore);
    
fileBasicArrayList!.addAllList(this.getFileBasicArrayList(stringBuffer!.toString()));
    
}

this.backup(fileBasicArrayList, path.toFileSystemString() +"backupJsps.zip");
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "backupJsps()", e);
    

 }
   }
 
}


    public backup$overload2(fileBasicArrayList: BasicArrayList, zipFile: string){

 try { 
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append("ZipFile: ");
    
stringBuffer!.append(zipFile);
    
stringBuffer!.append(" BasicArrayList: ");
    
stringBuffer!.appendint(fileBasicArrayList!.size());
    
PreLogUtil.put("Creating Backup Zip File: " +stringBuffer!.toString(), this, "backup()");
    
ZipFileUtil.getInstance()!.create(zipFile, fileBasicArrayList);
    
this.logUtil!.putF("Created Backup Zip File", this, "backup()");
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "backup()", e);
    

 }
   }
 
}


}

