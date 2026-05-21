
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
        

    private id: Integer

    private name: string

    private raceTrackFrictionProperties: RaceTrackFrictionProperties

    private foregroundBasicColor: BasicColor

    private backgroundBasicColor: BasicColor

    private qualifyTime: number

    private worstContinuePosition: number

    private totalLaps: number
public constructor (id: Integer, name: string, raceTrackFrictionProperties: RaceTrackFrictionProperties, foregroundBasicColor: BasicColor, backgroundBasicColor: BasicColor, qualifyTime: number, worstContinuePosition: number, totalLaps: number){

            super();
        this.id= id;
    
this.name= name;
    
this.raceTrackFrictionProperties= raceTrackFrictionProperties;
    
this.backgroundBasicColor= backgroundBasicColor;
    
this.foregroundBasicColor= foregroundBasicColor;
    
this.qualifyTime= qualifyTime;
    
this.worstContinuePosition= worstContinuePosition;
    
this.totalLaps= totalLaps;
    
}


    public getId(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.id;
    
}


    setId(id: Integer){
this.id= id;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public setName(name: string){
this.name= name;
    
}


    public getQualifyTime(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.qualifyTime;
    
}


    public setQualifyTime(qualifyTime: number){
this.qualifyTime= qualifyTime;
    
}


    public getWorstContinuePosition(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.worstContinuePosition;
    
}


    public setWorstContinuePosition(worstContinuePosition: number){
this.worstContinuePosition= worstContinuePosition;
    
}


    public getTotalLaps(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.totalLaps;
    
}


    public setTotalLaps(totalLaps: number){
this.totalLaps= totalLaps;
    
}


    public getForegroundBasicColor(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.foregroundBasicColor;
    
}


    public setForegroundBasicColor(foregroundBasicColor: BasicColor){
this.foregroundBasicColor= foregroundBasicColor;
    
}


    public getBackgroundBasicColor(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.backgroundBasicColor;
    
}


    public setBackgroundBasicColor(backgroundBasicColor: BasicColor){
this.backgroundBasicColor= backgroundBasicColor;
    
}


    public getRaceTrackFrictionProperties(): RaceTrackFrictionProperties{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.raceTrackFrictionProperties;
    
}


    public setRaceTrackFrictionProperties(raceTrackFrictionProperties: RaceTrackFrictionProperties){
this.raceTrackFrictionProperties= raceTrackFrictionProperties;
    
}


}
                
            

