
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
        



            import { Object } from '../../../../../../../java/lang/Object.js';


        
            import { Integer } from '../../../../../../../java/lang/Integer.js';
        
import { BasicColor } from '../../../../../../../org/allbinary/graphics/color/BasicColor.js';

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RaceTrackFrictionProperties } from './RaceTrackFrictionProperties.js';

export class RaceTrackInfo
            extends Object
         {
        

    private id: number

    private name: string

    private raceTrackFrictionProperties: RaceTrackFrictionProperties

    private foregroundBasicColor: BasicColor

    private backgroundBasicColor: BasicColor

    private qualifyTime: number

    private worstContinuePosition: number

    private totalLaps: number
public constructor (id: number, name: string, raceTrackFrictionProperties: RaceTrackFrictionProperties, foregroundBasicColor: BasicColor, backgroundBasicColor: BasicColor, qualifyTime: number, worstContinuePosition: number, totalLaps: number){

            super();
            //var id = id
    //var name = name
    //var raceTrackFrictionProperties = raceTrackFrictionProperties
    //var foregroundBasicColor = foregroundBasicColor
    //var backgroundBasicColor = backgroundBasicColor
    //var qualifyTime = qualifyTime
    //var worstContinuePosition = worstContinuePosition
    //var totalLaps = totalLaps
this.id= id;
    
this.name= name;
    
this.raceTrackFrictionProperties= raceTrackFrictionProperties;
    
this.backgroundBasicColor= backgroundBasicColor;
    
this.foregroundBasicColor= foregroundBasicColor;
    
this.qualifyTime= qualifyTime;
    
this.worstContinuePosition= worstContinuePosition;
    
this.totalLaps= totalLaps;
    
}


    public getId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.id;
    
}


    setId(id: number){
var id = id
this.id= id;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public setName(name: string){
var name = name
this.name= name;
    
}


    public getQualifyTime(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.qualifyTime;
    
}


    public setQualifyTime(qualifyTime: number){
var qualifyTime = qualifyTime
this.qualifyTime= qualifyTime;
    
}


    public getWorstContinuePosition(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.worstContinuePosition;
    
}


    public setWorstContinuePosition(worstContinuePosition: number){
var worstContinuePosition = worstContinuePosition
this.worstContinuePosition= worstContinuePosition;
    
}


    public getTotalLaps(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.totalLaps;
    
}


    public setTotalLaps(totalLaps: number){
var totalLaps = totalLaps
this.totalLaps= totalLaps;
    
}


    public getForegroundBasicColor(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.foregroundBasicColor;
    
}


    public setForegroundBasicColor(foregroundBasicColor: BasicColor){
var foregroundBasicColor = foregroundBasicColor
this.foregroundBasicColor= foregroundBasicColor;
    
}


    public getBackgroundBasicColor(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.backgroundBasicColor;
    
}


    public setBackgroundBasicColor(backgroundBasicColor: BasicColor){
var backgroundBasicColor = backgroundBasicColor
this.backgroundBasicColor= backgroundBasicColor;
    
}


    public getRaceTrackFrictionProperties(): RaceTrackFrictionProperties{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.raceTrackFrictionProperties;
    
}


    public setRaceTrackFrictionProperties(raceTrackFrictionProperties: RaceTrackFrictionProperties){
var raceTrackFrictionProperties = raceTrackFrictionProperties
this.raceTrackFrictionProperties= raceTrackFrictionProperties;
    
}


}
                
            

