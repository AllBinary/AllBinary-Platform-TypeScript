
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
        



import { ByteArrayOutputStream } from "../../../../java/io/ByteArrayOutputStream.js";

    
import { DataOutputStream } from "../../../../java/io/DataOutputStream.js";

    
import { GameInfo } from "../../../../org/allbinary/game/GameInfo.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class HighScore
            extends Object
         {
        

    private readonly id: number

    private name: string

    private readonly gameInfo: GameInfo

    private readonly score: number

    private readonly scoreString: string
public constructor (id: number, name: string, gameInfo: GameInfo, score: number){

            super();
        var id = id
var name = name
var gameInfo = gameInfo
var score = score
this.id= id;
    
this.name= name;
    
this.gameInfo= gameInfo;
    
this.score= score;
    
this.scoreString= (this.score).toString();
    
}


    public getId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.id;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public getScore(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.score;
    
}


                //@Throws(Error::class)
            
    public getAsBytes(): number[]{

    var byteArrayOutputStream: ByteArrayOutputStream = new ByteArrayOutputStream();
        
        
;
    

    var outputStream: DataOutputStream = new DataOutputStream(byteArrayOutputStream);
        
        
;
    
outputStream!.writeUTF(this.getName());
    
outputStream!.writeLong(this.getScore());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return byteArrayOutputStream!.toByteArray();;
    
}


    public getGameInfo(): GameInfo{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gameInfo;
    
}


    public getScoreString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scoreString;
    
}


    public setName(name: string){
var name = name
this.name= name;
    
}


    public toString(): string{

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StringMaker().
                            append(this.name)!.append(commonSeps!.COLON)!.appendlong(this.score)!.append(commonSeps!.FORWARD_SLASH)!.append(this.scoreString)!.toString();;
    
}


}
                
            

