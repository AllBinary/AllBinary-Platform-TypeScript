
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
        
            import { Integer } from '../../../../java/lang/Integer.js';
        
import { ByteArrayInputStream } from '../../../../java/io/ByteArrayInputStream.js';
//not GWT import const ByteArrayInputStream

import { ByteArrayOutputStream } from '../../../../java/io/ByteArrayOutputStream.js';
//not GWT import const ByteArrayOutputStream

import { DataInputStream } from '../../../../java/io/DataInputStream.js';
//not GWT import const DataInputStream

import { DataOutputStream } from '../../../../java/io/DataOutputStream.js';
//not GWT import const DataOutputStream

import { RecordEnumeration } from '../../../../javax/microedition/rms/RecordEnumeration.js';
//not GWT import const RecordEnumeration

import { RecordStore } from '../../../../javax/microedition/rms/RecordStore.js';
//not GWT import const RecordStore

import { RecordStoreException } from '../../../../javax/microedition/rms/RecordStoreException.js';
//not GWT import const RecordStoreException

import { TsUtil } from '../../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil

import { GameInfo } from '../../../../org/allbinary/game/GameInfo.js';
//not GWT import const GameInfo

import { NullRecordComparator } from '../../../../org/allbinary/game/configuration/persistance/NullRecordComparator.js';
//not GWT import const NullRecordComparator

import { NullRecordFilter } from '../../../../org/allbinary/game/configuration/persistance/NullRecordFilter.js';
//not GWT import const NullRecordFilter

import { NullRecordStore } from '../../../../org/allbinary/game/configuration/persistance/NullRecordStore.js';
//not GWT import const NullRecordStore

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
type PreLogUtil<T = any, U = any> = typeof PreLogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof PreLogUtil;

//not plain js import { ExceptionUtil } 
const ExceptionUtil = globalThis.org.allbinary.logic.java.exception.ExceptionUtil;
type ExceptionUtil<T = any, U = any> = typeof ExceptionUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ExceptionUtil;

import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//not GWT import const SmallIntegerSingletonFactory

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { AbeClientInformationInterface } from '../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

import { PlatformRecordIdUtil } from '../../../../org/allbinary/persistance/PlatformRecordIdUtil.js';
//not GWT import const PlatformRecordIdUtil

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
        
export class HighScoreNamePersistanceSingleton
            extends Object
         {
        

    private static SINGLETON: HighScoreNamePersistanceSingleton = new HighScoreNamePersistanceSingleton();

    public static getInstance(): HighScoreNamePersistanceSingleton{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return HighScoreNamePersistanceSingleton.SINGLETON;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly tsUtil: TsUtil = TsUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly platformRecordIdUtil: PlatformRecordIdUtil = PlatformRecordIdUtil.getInstance()!;

    private readonly RECORD_ID: string = "_SN";

    private name: string = StringUtil.getInstance()!.EMPTY_STRING;

    private nameBasicArrayList: BasicArrayList = new BasicArrayListD();

    public clear(){
this.name= StringUtil.getInstance()!.EMPTY_STRING;
    
}


                //@Throws(Exception.constructor)
            
    public deleteAll(abeClientInformation: AbeClientInformationInterface, gameInfo: GameInfo){

    let size: number = this.nameBasicArrayList!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let integer: Integer = this.nameBasicArrayList!.objectArray[index]! as Integer;;
    
this.delete(abeClientInformation, gameInfo, integer.intValue());
    
}

this.clear();
    
}


    getRecordId(abeClientInformation: AbeClientInformationInterface): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.platformRecordIdUtil!.getRecordId(abeClientInformation, this.RECORD_ID);;
    
}


                //@Throws(Exception.constructor)
            
    public delete(abeClientInformation: AbeClientInformationInterface, gameInfo: GameInfo, deleteId: number){

    let recordStore: RecordStore = NullRecordStore.NULL_RECORD_STORE;;
    

 try { this.logUtil!.putF(new StringMaker().append("Deleting: ")!.appendint(deleteId)!.toString(), this, this.commonStrings!.delete);
    
recordStore= RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true);
    
recordStore!.deleteRecord(deleteId);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  



                            throw e;
                    

 }
   }
 finally { 
                        if(recordStore != 
                                    null
                                )
                        
                                    {
                                    PreLogUtil.put("Closing RecordStore", this, this.commonStrings!.delete);
    
recordStore!.closeRecordStore();
    

                                    }
                                
 }
}


    public getIds(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.nameBasicArrayList;
    
}


    public load(abeClientInformation: AbeClientInformationInterface, gameInfo: GameInfo): string{

    let recordStore: RecordStore = NullRecordStore.NULL_RECORD_STORE;;
    

 try { 
                        if(this.name == StringUtil.getInstance()!.EMPTY_STRING)
                        
                                    {
                                    
    let LOADING_ID: string = "Loading id: ";;
    
recordStore= RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true);
    

    let recordEnum: RecordEnumeration = recordStore!.enumerateRecords(NullRecordFilter.NULL_RECORD_FILTER, NullRecordComparator.NULL_RECORD_COMPARATOR, true)!;;
    

    let smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;;
    

    let recordAsBytes: number[];;
    

    let byteArrayInputStream: ByteArrayInputStream;;
    

    let inputStream: DataInputStream;;
    

        while(recordEnum!.hasNextElement())
        {

    let id: number = recordEnum!.nextRecordId()!;;
    
this.logUtil!.putF(new StringMaker().append(LOADING_ID)!.appendint(id)!.toString(), this, this.commonStrings!.LOAD);
    
recordAsBytes= this.tsUtil!.getRecord(recordStore, id);
    
byteArrayInputStream= new ByteArrayInputStream(recordAsBytes);
    
inputStream= new DataInputStream(byteArrayInputStream);
    

        while(inputStream!.available() > 0)
        {
this.name= inputStream!.readUTF();
    
}

this.nameBasicArrayList!.add(smallIntegerSingletonFactory!.getAt(id));
    
}


                                    }
                                
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.save(abeClientInformation, gameInfo, this.name);
    
this.logUtil!.putF(new StringMaker().append(this.commonStrings!.EXCEPTION_LABEL)!.append(ExceptionUtil.getInstance()!.getStackTrace(e))!.toString(), this, this.commonStrings!.LOAD);
    

 }
   }
 finally { 
 try { 
                        if(recordStore != 
                                    null
                                )
                        
                                    {
                                    PreLogUtil.put("Closing RecordStore", this, this.commonStrings!.LOAD);
    
recordStore!.closeRecordStore();
    

                                    }
                                
 }
 catch (caught: any) {
 if (caught instanceof RecordStoreException) {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.LOAD, e);
    

 }
  else { throw caught; } }
 
 }



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public save(abeClientInformation: AbeClientInformationInterface, gameInfo: GameInfo, name: string){

    let recordStore: RecordStore = NullRecordStore.NULL_RECORD_STORE;;
    

 try { this.logUtil!.putF(new StringMaker().append("Saving: ")!.append(name)!.toString(), this, this.commonStrings!.SAVE);
    
recordStore= RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true);
    

    let byteArrayOutputStream: ByteArrayOutputStream = new ByteArrayOutputStream();;
    

    let outputStream: DataOutputStream = new DataOutputStream(byteArrayOutputStream);;
    
outputStream!.writeUTF(name);
    

    let savedGameBytes: number[] = byteArrayOutputStream!.toByteArray()!;;
    
recordStore!.addRecord(savedGameBytes, 0, savedGameBytes!.length);
    
this.name= name;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.SAVE, e);
    

 }
   }
 finally { 
 try { 
                        if(recordStore != 
                                    null
                                )
                        
                                    {
                                    PreLogUtil.put("Closing RecordStore", this, this.commonStrings!.SAVE);
    
recordStore!.closeRecordStore();
    

                                    }
                                
 }
 catch (caught: any) {
 if (caught instanceof RecordStoreException) {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.SAVE, e);
    

 }
  else { throw caught; } }
 
 }
}


}

