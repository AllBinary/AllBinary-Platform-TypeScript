
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
        



            import Hashtable from "@ohos.util.HashMap";
        
import { ByteArrayInputStream } from "../../../../java/io/ByteArrayInputStream.js";

    
import { DataInputStream } from "../../../../java/io/DataInputStream.js";

    
import { EOFException } from "../../../../java/io/EOFException.js";

    
import { IOException } from "../../../../java/io/IOException.js";

    

//import { Hashtable } from "../../../../java/util/Hashtable.js";

    
import { RecordComparator } from "../../../../javax/microedition/rms/RecordComparator.js";

    
import { RecordEnumeration } from "../../../../javax/microedition/rms/RecordEnumeration.js";

    
import { RecordStore } from "../../../../javax/microedition/rms/RecordStore.js";

    
import { RecordStoreException } from "../../../../javax/microedition/rms/RecordStoreException.js";

    
import { RecordStoreNotFoundException } from "../../../../javax/microedition/rms/RecordStoreNotFoundException.js";

    
import { GameInfo } from "../../../../org/allbinary/game/GameInfo.js";

    
import { NullRecordComparator } from "../../../../org/allbinary/game/configuration/persistance/NullRecordComparator.js";

    
import { NullRecordFilter } from "../../../../org/allbinary/game/configuration/persistance/NullRecordFilter.js";

    
import { NullRecordStore } from "../../../../org/allbinary/game/configuration/persistance/NullRecordStore.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { PreLogUtil } from "../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { AbeClientInformationInterface } from "../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { PlatformRecordIdUtil } from "../../../../org/allbinary/persistance/PlatformRecordIdUtil.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

export class RecordStoreHighScores extends HighScores {
        

    private static readonly hashTable: Hashtable<any, any> = new Hashtable<any, any>();
        
        
@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static getInstance(abeClientInformation: AbeClientInformationInterface, gameInfo: GameInfo, highScoreName: string, heading: string, columnTwoHeading: string, recordComparatorInterface: RecordComparator): HighScores{
    //var abeClientInformation = abeClientInformation
    //var gameInfo = gameInfo
    //var highScoreName = highScoreName
    //var heading = heading
    //var columnTwoHeading = columnTwoHeading
    //var recordComparatorInterface = recordComparatorInterface

    var highScoresCanBeNull: any? = hashTable!.get(highScoreName as Object);
        
        
;
    

                        if(highScoresCanBeNull == 
                                    null
                                )
                        
                                    {
                                    
    var highScores: HighScores = new RecordStoreHighScores(abeClientInformation, gameInfo, highScoreName, heading, columnTwoHeading, recordComparatorInterface);
        
        
;
    
hashTable!.put(highScores!.getName(), highScores);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return highScores;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return highScoresCanBeNull as HighScores;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly platformRecordIdUtil: PlatformRecordIdUtil = PlatformRecordIdUtil.getInstance()!;
        
        

    private readonly RECORD_ID: string = "_HS";
        
        

    private readonly MAXHIGHSCORES: number = 100;
        
        

    private readonly gameInfo: GameInfo

    private readonly abeClientInformation: AbeClientInformationInterface

    private readonly recordComparatorInterface: RecordComparator
private constructor (abeClientInformation: AbeClientInformationInterface, gameInfo: GameInfo, name: string, heading: string, columnTwoHeading: string, recordComparatorInterface: RecordComparator)                        

                            : super(name, heading, columnTwoHeading){

            super();
                //var abeClientInformation = abeClientInformation
    //var gameInfo = gameInfo
    //var name = name
    //var heading = heading
    //var columnTwoHeading = columnTwoHeading
    //var recordComparatorInterface = recordComparatorInterface


                            //For kotlin this is before the body of the constructor.
                    
this.abeClientInformation= abeClientInformation;
    
this.gameInfo= gameInfo;
    
this.recordComparatorInterface= recordComparatorInterface;
    
this.load();
    
}


    getRecordId(abeClientInformation: AbeClientInformationInterface): string{
    //var abeClientInformation = abeClientInformation



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return platformRecordIdUtil!.getRecordId(abeClientInformation, new StringMaker().
                            append(CommonSeps.getInstance()!.UNDERSCORE)!.append(this.getName())!.append(RECORD_ID)!.toString());

                        ;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public addHighScore(newHighScore: HighScore){
    //var newHighScore = newHighScore

    var recordStore: RecordStore = NullRecordStore.NULL_RECORD_STORE;
        
        
;
    

        try {
            logUtil!.put(new StringMaker().
                            append("Adding HighScore: ")!.appendlong(newHighScore!.getScore())!.toString(), this, commonStrings!.ADD);
    

                        if(this.isTooManyHighScores())
                        
                                    {
                                    logUtil!.put("Removing Lowest Score", this, commonStrings!.ADD);
    
this.removeLowestHighScore();
    

                                    }
                                
recordStore= RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true);
    

    var highScoreBytes: number[] = newHighScore!.getAsBytes()!;
        
        
;
    

    var recordId: number = recordStore!.addRecord(highScoreBytes, 0, highScoreBytes!.length)!;
        
        
;
    
this.load();
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.ADD, e);
    
}

                //: 
 catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.ADD, e);
    
}

                //: 
 catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.ADD, e);
    
}

         finally {
            
        try {
            
                        if(recordStore != 
                                    null
                                )
                        
                                    {
                                    PreLogUtil.put("Closing RecordStore", this, commonStrings!.ADD);
    
recordStore!.closeRecordStore();
    

                                    }
                                

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.ADD, e);
    
}


         }
        
}


    removeLowestHighScore(){

    var recordStore: RecordStore = NullRecordStore.NULL_RECORD_STORE;
        
        
;
    

        try {
            recordStore= RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true);
    

    var recordEnum: RecordEnumeration = recordStore!.enumerateRecords(NullRecordFilter.NULL_RECORD_FILTER, NullRecordComparator.NULL_RECORD_COMPARATOR, true)!;
        
        
;
    

    var scoreComparator: ScoreComparator = (this.recordComparatorInterface as ScoreComparator);
        
        
;
    

    var bestHighScore: HighScore = new HighScore( -1, "none", GameInfo.NONE, scoreComparator!.getBestScore());
        
        
;
    

    var recordAsBytes: number[]
;
    

    var byteArrayInputStream: ByteArrayInputStream
;
    

    var inputStream: DataInputStream
;
    

        while(recordEnum!.hasNextElement())
        {

    var id: number = recordEnum!.nextRecordId()!;
        
        
;
    
recordAsBytes= recordStore!.getRecord(id);
    

                        if(recordAsBytes != 
                                    null
                                )
                        
                                    {
                                    byteArrayInputStream= new ByteArrayInputStream(recordAsBytes);
    
inputStream= new DataInputStream(byteArrayInputStream);
    

    var name: string = inputStream!.readUTF()!;
        
        
;
    

    var nextScore: number = inputStream!.readLong()!;
        
        
;
    

    var nextCurrentHighScore: HighScore = new HighScore(id, name, GameInfo.NONE, nextScore);
        
        
;
    

                        if(this.recordComparatorInterface!.compare(nextCurrentHighScore!.getAsBytes(), bestHighScore!.getAsBytes()) == RecordComparator.FOLLOWS)
                        
                                    {
                                    bestHighScore= nextCurrentHighScore;
    

                                    }
                                

                                    }
                                
}


                        if(bestHighScore!.getId() !=  -1)
                        
                                    {
                                    logUtil!.put(new StringMaker().
                            append("Removing Lowest HighScore: ")!.appendlong(bestHighScore!.getScore())!.toString(), this, commonStrings!.LOAD);
    
recordStore!.deleteRecord(bestHighScore!.getId());
    

                                    }
                                

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, "removeLowestHighScore", e);
    
}

                //: 
 catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, "removeLowestHighScore", e);
    
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
                                

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, "removeLowestHighScore", e);
    
}


         }
        
}


    load(){

    var recordStore: RecordStore = NullRecordStore.NULL_RECORD_STORE;
        
        
;
    

        try {
            recordStore= RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true);
    
this.setList(new BasicArrayList());
    

    var recordEnum: RecordEnumeration = recordStore!.enumerateRecords(NullRecordFilter.NULL_RECORD_FILTER, NullRecordComparator.NULL_RECORD_COMPARATOR, true)!;
        
        
;
    

    var recordAsBytes: number[]
;
    

    var byteArrayInputStream: ByteArrayInputStream
;
    

    var inputStream: DataInputStream
;
    

        while(recordEnum!.hasNextElement())
        {

    var id: number = recordEnum!.nextRecordId()!;
        
        
;
    
recordAsBytes= recordStore!.getRecord(id);
    

                        if(recordAsBytes != 
                                    null
                                )
                        
                                    {
                                    byteArrayInputStream= new ByteArrayInputStream(recordAsBytes);
    
inputStream= new DataInputStream(byteArrayInputStream);
    

        try {
            
    var name: string = inputStream!.readUTF()!;
        
        
;
    

    var score: number = inputStream!.readLong()!;
        
        
;
    

    var newHighScore: HighScore = new HighScore(id, name, GameInfo.NONE, score);
        
        
;
    

    var list: BasicArrayList = this.getList()!;
        
        
;
    

    var size: number = list.size()!;
        
        
;
    

    var lastIndex: number = size;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var highScore: HighScore = list.objectArray[index]! as HighScore;
        
        
;
    

                        if(this.recordComparatorInterface!.compare(newHighScore!.getAsBytes(), highScore!.getAsBytes()) == RecordComparator.PRECEDES)
                        
                                    {
                                    lastIndex= index;
    
break;

                    

                                    }
                                
}

list.add(lastIndex, newHighScore);
    

                //: 
} catch(e) 
            {
logUtil!.put("EOF", this, commonStrings!.LOAD, e);
    



                            throw e
}


                                    }
                                
}


                //: 
} catch(e) 
            {
logUtil!.put("No High Scores", this, commonStrings!.LOAD, e);
    
}

                //: 
 catch(e) 
            {
logUtil!.put(commonStrings!.UNKNOWN, this, commonStrings!.LOAD, e);
    
}

                //: 
 catch(e) 
            {
logUtil!.put(commonStrings!.UNKNOWN, this, commonStrings!.LOAD, e);
    
}

                //: 
 catch(e) 
            {
logUtil!.put(commonStrings!.UNKNOWN, this, commonStrings!.LOAD, e);
    
}

         finally {
            
        try {
            
                        if(recordStore != 
                                    null
                                )
                        
                                    {
                                    PreLogUtil.put("Closing RecordStore", this, commonStrings!.LOAD);
    
recordStore!.closeRecordStore();
    

                                    }
                                

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.LOAD, e);
    
}


         }
        
}


    isTooManyHighScores(): boolean{

                        if(this.getList() != 
                                    null
                                 && this.getList()!.size() < MAXHIGHSCORES)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            logUtil!.put(new StringMaker().
                            append("HighScores RecordStore Max Reached: ")!.appendint(this.MAXHIGHSCORES)!.toString(), this, "isTooManyHighScores");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                        }
                            
}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public isBestScore(newHighScore: HighScore): boolean{
var newHighScore = newHighScore

        try {
            
                        if(!this.isTooManyHighScores();

                        )
                        
                                    {
                                    logUtil!.put("Slot Available for a High Score", this, "isBestScore");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            
    var list: BasicArrayList = this.getList()!;
        
        
;
    

    var size: number = list.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var highScore: HighScore = list.objectArray[index]! as HighScore;
        
        
;
    

                        if(recordComparatorInterface!.compare(newHighScore!.getAsBytes(), highScore!.getAsBytes()) == RecordComparator.FOLLOWS)
                        
                                    {
                                    logUtil!.put("Obtained a High Score", this, "isBestScore");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
}


                        }
                            
logUtil!.put("Not a High Score", this, "isBestScore");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.ADD, e);
    



                            throw e
}

}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(super.toString());
    

    var list: BasicArrayList = this.getList()!;
        
        
;
    

    var size: number = list.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var highScore: HighScore = list.objectArray[index]! as HighScore;
        
        
;
    
stringBuffer!.append(highScore!.getScoreString());
    
stringBuffer!.append(CommonSeps.getInstance()!.COMMA_SEP);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

