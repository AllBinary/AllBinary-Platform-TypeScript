
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
        



import { AnalogLocationInputFactory } from "../../../../org/allbinary/game/input/analog/AnalogLocationInputFactory.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class LocalPlayerInputIdFactory
            extends Object
         {
        

    private static readonly instance: LocalPlayerInputIdFactory = new LocalPlayerInputIdFactory();
        
        

    public static getInstance(): LocalPlayerInputIdFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public readonly MAX_NUMBER_OF_PLAYERS: number = 6;
        
        

    private readonly MAX_FAST_DEVICEID: number = 65;
        
        

    private readonly deviceIdToplayerId: number[] = new Array(MAX_FAST_DEVICEID);
        
        

    private readonly playerIdToDeviceId: number[] = new Array(MAX_NUMBER_OF_PLAYERS);
        
        

    private readonly playersInPlay: boolean[] = new Array(MAX_NUMBER_OF_PLAYERS);
        
        

    private totalDevicesMapped: number = 0;
        
        
private constructor (){

            super();
        



                        for (
    var index: number = deviceIdToplayerId!.length -1;
        
        
index >= 0; index--)
        {
deviceIdToplayerId[index]=  -1;
    
}

}


    public getDeviceId(playerInputId: number): number{
var playerInputId = playerInputId



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.playerIdToDeviceId[playerInputId]!;
    
}


    public getPlayerForDevice(deviceId: number): number{
var deviceId = deviceId

    var index: number= 0
;
    

                        if(deviceId < this.MAX_FAST_DEVICEID)
                        
                                    {
                                    
    var playerInputId: number = this.deviceIdToplayerId[deviceId]!;
        
        
;
    

                        if(playerInputId !=  -1)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return playerInputId;
    

                                    }
                                

                                    }
                                
                        else {
                            



                        for (
    index >= 0; index--)
        {

                        if(this.playerIdToDeviceId[index] == deviceId)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return index;
    

                                    }
                                
}


                        }
                            
index= this.totalDevicesMapped;
    

                        if(deviceId < this.MAX_FAST_DEVICEID)
                        
                                    {
                                    this.deviceIdToplayerId[deviceId]= index;
    

                                    }
                                
                        else {
                            this.logUtil!.putF(new StringMaker().
                            append("Added DeviceId: ")!.appendint(deviceId)!.append(" beyond fast Id list")!.toString(), this, "getPlayerForDevice");
    

                        }
                            
this.playerIdToDeviceId[index]= deviceId;
    
AnalogLocationInputFactory.getInstance()!.addPlayer(this.totalDevicesMapped);
    
totalDevicesMapped++;
    
this.logUtil!.putF(new StringMaker().
                            append("Added DeviceId: ")!.appendint(deviceId)!.append(" at: ")!.appendint(index)!.append(" Total: ")!.appendint(this.totalDevicesMapped)!.toString(), this, "getPlayerForDevice");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return index;
    
}


    public getTotalDevicesInPlay(): number{

    var total: number = 0;
        
        
;
    




                        for (
    var index: number = this.totalDevicesMapped -1;
        
        
index >= 0; index--)
        {

                        if(this.playersInPlay[index] == true)
                        
                                    {
                                    total++;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return total;
    
}


    public isPlayerInPlay(playerInputId: number): boolean{
var playerInputId = playerInputId



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.playersInPlay[playerInputId]!;
    
}


    public setPlayerInPlay(playerInputId: number){
var playerInputId = playerInputId
this.logUtil!.putF(new StringMaker().
                            append("Setting PlayerInPlay with playerInputId: ")!.appendint(playerInputId)!.toString(), this, "setPlayerInPlay");
    
this.playersInPlay[playerInputId]= true;
    
}


    public setPlayerOutOfPlay(playerInputId: number){
var playerInputId = playerInputId
this.logUtil!.putF(new StringMaker().
                            append("Setting PlayerOutOfPlay with playerInputId: ")!.appendint(playerInputId)!.toString(), this, "setPlayerOutOfPlay");
    
this.playersInPlay[playerInputId]= false;
    
}


    public getPlayersInPlay(): boolean[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return playersInPlay;
    
}


}
                
            

