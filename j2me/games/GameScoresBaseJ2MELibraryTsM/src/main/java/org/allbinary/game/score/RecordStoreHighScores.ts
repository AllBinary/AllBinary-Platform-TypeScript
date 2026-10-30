
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
//not GWT import const ByteArrayInputStream

import { DataInputStream } from '../../../../java/io/DataInputStream.js';
//not GWT import const DataInputStream

import { EOFException } from '../../../../java/io/EOFException.js';
//not GWT import const EOFException

import { IOException } from '../../../../java/io/IOException.js';
//not GWT import const IOException

import { RecordComparator, RecordComparatorI } from '../../../../javax/microedition/rms/RecordComparator.js';
//not GWT import const RecordComparator

import { RecordEnumeration } from '../../../../javax/microedition/rms/RecordEnumeration.js';
//not GWT import const RecordEnumeration

import { RecordStore } from '../../../../javax/microedition/rms/RecordStore.js';
//not GWT import const RecordStore

import { RecordStoreException } from '../../../../javax/microedition/rms/RecordStoreException.js';
//not GWT import const RecordStoreException

import { RecordStoreNotFoundException } from '../../../../javax/microedition/rms/RecordStoreNotFoundException.js';
//not GWT import const RecordStoreNotFoundException

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

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
type PreLogUtil<T = any, U = any> = typeof PreLogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof PreLogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { AbeClientInformationInterface } from '../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

import { PlatformRecordIdUtil } from '../../../../org/allbinary/persistance/PlatformRecordIdUtil.js';
//not GWT import const PlatformRecordIdUtil

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HighScores } from './HighScores.js';
//sameFolderImports - not GWT import - same folder const HighScores
import { HighScore } from './HighScore.js';
//sameFolderImports - not GWT import - same folder const HighScore
import { ScoreComparator } from './ScoreComparator.js';
//sameFolderImports - not GWT import - same folder const ScoreComparator

export class RecordStoreHighScores extends HighScores {
        

    private static readonly hashTable: ABHashtable<any, any> = StdUtil.getInstance()!.createHashtable()!;
//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public static getInstance(abeClientInformation: AbeClientInformationInterface, gameInfo: GameInfo, highScoreName: string, heading: string, columnTwoHeading: string, recordComparatorInterface: RecordComparator): HighScores{

    let highScoresCanBeNull: any = RecordStoreHighScores.hashTable!.get(highScoreName);;
    

                        if(highScoresCanBeNull == 
                                    null
                                )
                        
                                    {
                                    
    let highScores: HighScores = new RecordStoreHighScores(abeClientInformation, gameInfo, highScoreName, heading, columnTwoHeading, recordComparatorInterface);;
    
RecordStoreHighScores.hashTable!.put(highScores!.getName(), highScores);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return highScores;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return highScoresCanBeNull as HighScores;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly platformRecordIdUtil: PlatformRecordIdUtil = PlatformRecordIdUtil.getInstance()!;

    private readonly tsUtil: TsUtil = TsUtil.getInstance()!;

    private readonly RECORD_ID: string = "_HS";

    private readonly MAXHIGHSCORES: number = 100;

    private readonly gameInfo: GameInfo;

    private readonly abeClientInformation: AbeClientInformationInterface;

    private readonly recordComparatorInterface: RecordComparator;

private constructor (abeClientInformation: AbeClientInformationInterface, gameInfo: GameInfo, name: string, heading: string, columnTwoHeading: string, recordComparatorInterface: RecordComparator){
            super(name, heading, columnTwoHeading);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.abeClientInformation= abeClientInformation;
    
this.gameInfo= gameInfo;
    
this.recordComparatorInterface= recordComparatorInterface;
    
this.load();
    
}


    getRecordId(abeClientInformation: AbeClientInformationInterface): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.platformRecordIdUtil!.getRecordId(abeClientInformation, new StringMaker().append(CommonSeps.getInstance()!.UNDERSCORE)!.append(this.getName())!.append(this.RECORD_ID)!.toString());;
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public addHighScore(newHighScore: HighScore){

    let recordStore: RecordStore = NullRecordStore.NULL_RECORD_STORE;;
    

 try { this.logUtil!.putF(new StringMaker().append("Adding HighScore: ")!.appendlong(newHighScore!.getScore())!.toString(), this, this.commonStrings!.ADD);
    

                        if(this.isTooManyHighScores())
                        
                                    {
                                    this.logUtil!.putF("Removing Lowest Score", this, this.commonStrings!.ADD);
    
this.removeLowestHighScore();
    

                                    }
                                
recordStore= RecordStore.openRecordStore(this.getRecordId(this.abeClientInformation), true);
    

    let highScoreBytes: number[] = newHighScore!.getAsBytes()!;;
    

    let recordId: number = recordStore!.addRecord(highScoreBytes, 0, highScoreBytes!.length)!;;
    
this.load();
    
 }
 catch (caught: any) {
 if (caught instanceof RecordStoreException) {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.ADD, e);
    

 }
  else if (caught instanceof IOException) {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.ADD, e);
    

 }
  else {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.ADD, e);
    

 }
   }
 finally { 
 try { 
                        if(recordStore != 
                                    null
                                )
                        
                                    {
                                    PreLogUtil.put("Closing RecordStore", this, this.commonStrings!.ADD);
    
recordStore!.closeRecordStore();
    

                                    }
                                
 }
 catch (caught: any) {
 if (caught instanceof RecordStoreException) {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.ADD, e);
    

 }
  else { throw caught; } }
 
 }
}


    removeLowestHighScore(){

    let recordStore: RecordStore = NullRecordStore.NULL_RECORD_STORE;;
    

 try { recordStore= RecordStore.openRecordStore(this.getRecordId(this.abeClientInformation), true);
    

    let recordEnum: RecordEnumeration = recordStore!.enumerateRecords(NullRecordFilter.NULL_RECORD_FILTER, NullRecordComparator.NULL_RECORD_COMPARATOR, true)!;;
    

    let scoreComparator: ScoreComparator = (this.recordComparatorInterface as ScoreComparator);;
    

    let bestHighScore: HighScore = new HighScore( -1, "none", GameInfo.NONE, scoreComparator!.getBestScore());;
    

    let recordAsBytes: number[];;
    

    let byteArrayInputStream: ByteArrayInputStream;;
    

    let inputStream: DataInputStream;;
    

        while(recordEnum!.hasNextElement())
        {

    let id: number = recordEnum!.nextRecordId()!;;
    
recordAsBytes= this.tsUtil!.getRecord(recordStore, id);
    

                        if(recordAsBytes != 
                                    null
                                )
                        
                                    {
                                    byteArrayInputStream= new ByteArrayInputStream(recordAsBytes);
    
inputStream= new DataInputStream(byteArrayInputStream);
    

    let name: string = inputStream!.readUTF()!;;
    

    let nextScore: number = inputStream!.readLong()!;;
    

    let nextCurrentHighScore: HighScore = new HighScore(id, name, GameInfo.NONE, nextScore);;
    

                        if(this.recordComparatorInterface!.compare(nextCurrentHighScore!.getAsBytes(), bestHighScore!.getAsBytes()) == RecordComparatorI.FOLLOWS)
                        
                                    {
                                    bestHighScore= nextCurrentHighScore;
    

                                    }
                                

                                    }
                                
}


                        if(bestHighScore!.getId() !=  -1)
                        
                                    {
                                    this.logUtil!.putF(new StringMaker().append("Removing Lowest HighScore: ")!.appendlong(bestHighScore!.getScore())!.toString(), this, this.commonStrings!.LOAD);
    
recordStore!.deleteRecord(bestHighScore!.getId());
    

                                    }
                                
 }
 catch (caught: any) {
 if (caught instanceof RecordStoreException) {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "removeLowestHighScore", e);
    

 }
  else {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "removeLowestHighScore", e);
    

 }
   }
 finally { 
 try { 
                        if(recordStore != 
                                    null
                                )
                        
                                    {
                                    PreLogUtil.put("Closing RecordStore", this, "removeLowestHighScore");
    
recordStore!.closeRecordStore();
    

                                    }
                                
 }
 catch (caught: any) {
 if (caught instanceof RecordStoreException) {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "removeLowestHighScore", e);
    

 }
  else { throw caught; } }
 
 }
}


    load(){

    let recordStore: RecordStore = NullRecordStore.NULL_RECORD_STORE;;
    

 try { recordStore= RecordStore.openRecordStore(this.getRecordId(this.abeClientInformation), true);
    
this.setList(new BasicArrayListD());
    

    let recordEnum: RecordEnumeration = recordStore!.enumerateRecords(NullRecordFilter.NULL_RECORD_FILTER, NullRecordComparator.NULL_RECORD_COMPARATOR, true)!;;
    

    let recordAsBytes: number[];;
    

    let byteArrayInputStream: ByteArrayInputStream;;
    

    let inputStream: DataInputStream;;
    

        while(recordEnum!.hasNextElement())
        {

    let id: number = recordEnum!.nextRecordId()!;;
    
recordAsBytes= this.tsUtil!.getRecord(recordStore, id);
    

                        if(recordAsBytes != 
                                    null
                                )
                        
                                    {
                                    byteArrayInputStream= new ByteArrayInputStream(recordAsBytes);
    
inputStream= new DataInputStream(byteArrayInputStream);
    

 try { 
    let name: string = inputStream!.readUTF()!;;
    

    let score: number = inputStream!.readLong()!;;
    

    let newHighScore: HighScore = new HighScore(id, name, GameInfo.NONE, score);;
    

    let list: BasicArrayList = this.getList()!;;
    

    let size: number = list.size()!;;
    

    let lastIndex: number = size;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let highScore: HighScore = list.objectArray[index]! as HighScore;;
    

                        if(this.recordComparatorInterface!.compare(newHighScore!.getAsBytes(), highScore!.getAsBytes()) == RecordComparatorI.PRECEDES)
                        
                                    {
                                    lastIndex= index;
    
break;

                    

                                    }
                                
}

list.addAt(lastIndex, newHighScore);
    
 }
 catch (caught: any) {
 if (caught instanceof EOFException) {
  const e = caught;
  
this.logUtil!.put("EOF", this, this.commonStrings!.LOAD, e);
    



                            throw e;
                    

 }
  else { throw caught; } }
 

                                    }
                                
}

 }
 catch (caught: any) {
 if (caught instanceof RecordStoreNotFoundException) {
  const e = caught;
  
this.logUtil!.put("No High Scores", this, this.commonStrings!.LOAD, e);
    

 }
  else if (caught instanceof RecordStoreException) {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.UNKNOWN, this, this.commonStrings!.LOAD, e);
    

 }
  else if (caught instanceof IOException) {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.UNKNOWN, this, this.commonStrings!.LOAD, e);
    

 }
  else {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.UNKNOWN, this, this.commonStrings!.LOAD, e);
    

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
}


    isTooManyHighScores(): boolean{

                        if(this.getList() != 
                                    null
                                 && this.getList()!.size() < this.MAXHIGHSCORES)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            this.logUtil!.putF(new StringMaker().append("HighScores RecordStore Max Reached: ")!.appendint(this.MAXHIGHSCORES)!.toString(), this, "isTooManyHighScores");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                        }
                            
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public isBestScore(newHighScore: HighScore): boolean{

 try { 
                        if(!this.isTooManyHighScores())
                        
                                    {
                                    this.logUtil!.putF("Slot Available for a High Score", this, "isBestScore");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            
    let list: BasicArrayList = this.getList()!;;
    

    let size: number = list.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let highScore: HighScore = list.objectArray[index]! as HighScore;;
    

                        if(this.recordComparatorInterface!.compare(newHighScore!.getAsBytes(), highScore!.getAsBytes()) == RecordComparatorI.FOLLOWS)
                        
                                    {
                                    this.logUtil!.putF("Obtained a High Score", this, "isBestScore");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
}


                        }
                            
this.logUtil!.putF("Not a High Score", this, "isBestScore");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.ADD, e);
    



                            throw e;
                    

 }
   }
 
}


    public toString(): string{

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(super.toString());
    

    let list: BasicArrayList = this.getList()!;;
    

    let size: number = list.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let highScore: HighScore = list.objectArray[index]! as HighScore;;
    
stringBuffer!.append(highScore!.getScoreString());
    
stringBuffer!.append(CommonSeps.getInstance()!.COMMA_SEP);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}

