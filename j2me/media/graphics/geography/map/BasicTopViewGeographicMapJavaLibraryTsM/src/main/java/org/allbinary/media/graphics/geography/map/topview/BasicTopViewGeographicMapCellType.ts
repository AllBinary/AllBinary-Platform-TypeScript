
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
        
//not plain js import { LogUtil } from '../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } from '../../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { GeographicMapCellType } from '../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js';
      //not GWT import const GeographicMapCellType = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellType;

      
import { GeographicMapCellTypeFactory } from '../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellTypeFactory.js';
      //not GWT import const GeographicMapCellTypeFactory = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellTypeFactory;

      
import { RaceTrackGeographicMapCellType } from '../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMapCellType.js';
      //not GWT import const RaceTrackGeographicMapCellType = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackGeographicMapCellType;

      
//not plain js import { CommonSeps } from '../../../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not plain js import { BasicArrayList } from '../../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListS } from '../../../../../../../org/allbinary/util/BasicArrayListS.js';
      const BasicArrayListS = globalThis.org.allbinary.util.BasicArrayListS;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BasicTopViewGeographicMapCellType
            extends Object
         {
        

    public static createType(name: string, type: number, cost: number): BasicTopViewGeographicMapCellType{

    var types: BasicArrayList = new BasicArrayListS(1);;
    
types.add(type);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new BasicTopViewGeographicMapCellType(name, types, cost);
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    public readonly name: string;

    public readonly cost: number;

    private readonly types: number[];

public constructor (name: string, types: BasicArrayList, cost: number){

            super();
        
    var size: number = types.size()!;;
    

    var typeArray: number[] = new Array(size);;
    

    var typeAsInteger: Integer;;
    

    var type: number= 0;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
typeAsInteger= (types.get(index) as Integer);
    
type= typeAsInteger!.intValue();
    

                        if(GeographicMapCellTypeFactory.getInstance()!.getGeographicMapCellTypeArray()[type] == 
                                    null
                                )
                        
                                    {
                                    new RaceTrackGeographicMapCellType(name, type, cost, 0);
    

                                    }
                                
                        else {
                            
                        }
                            
typeArray[index]= type;
    
}

this.name= name;
    
this.cost= cost;
    
this.types= typeArray;
    
}


    public isType(type: GeographicMapCellType): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hasType(type.getType());;
    
}


    public hasType(type: number): boolean{

    var size: number = this.types.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

                        if(this.types[index] == type)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public getTypes(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.types;
    
}


    public toString(): string{

    var stringMaker: StringMaker = new StringMaker();;
    

    var size: number = this.types.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
stringMaker!.appendint(this.types[index]!)!.append(CommonSeps.getInstance()!.COMMA);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringMaker!.toString();;
    
}


}



