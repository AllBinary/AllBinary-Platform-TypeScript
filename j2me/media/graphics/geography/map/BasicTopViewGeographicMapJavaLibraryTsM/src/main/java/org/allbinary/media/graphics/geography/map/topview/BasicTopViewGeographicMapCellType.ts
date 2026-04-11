
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
        



import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { GeographicMapCellType } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js";

    
import { GeographicMapCellTypeFactory } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellTypeFactory.js";

    
import { RaceTrackGeographicMapCellType } from "../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMapCellType.js";

    
import { CommonSeps } from "../../../../../../../org/allbinary/string/CommonSeps.js";

    
import { BasicArrayList } from "../../../../../../../org/allbinary/util/BasicArrayList.js";

    

export class BasicTopViewGeographicMapCellType
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public readonly name: string

    public readonly cost: number

    private readonly types: number[]
public constructor (name: string, type: number, cost: number){

            super();
                //var name = name
    //var type = type
    //var cost = cost

                        if(GeographicMapCellTypeFactory.getInstance()!.getGeographicMapCellTypeArray()[type] == 
                                    null
                                )
                        
                                    {
                                    RaceTrackGeographicMapCellType(name, type, cost);
    

                                    }
                                
                        else {
                            
                        }
                            
this.name= name;
    
this.cost= cost;
    
this.types= new Array(1);
    
this.types[0]= type;
    
}

public constructor (name: string, types: number[], cost: number){

            super();
                //var name = name
    //var types = types
    //var cost = cost

    var size: number = types.length
                ;
        
        
;
    

    var type: number= 0
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
type= types[index]!;
    

                        if(GeographicMapCellTypeFactory.getInstance()!.getGeographicMapCellTypeArray()[type] == 
                                    null
                                )
                        
                                    {
                                    RaceTrackGeographicMapCellType(name, type, cost);
    

                                    }
                                
                        else {
                            
                        }
                            
}

this.name= name;
    
this.types= types;
    
this.cost= cost;
    
}

public constructor (name: string, types: BasicArrayList, cost: number){

            super();
                //var name = name
    //var types = types
    //var cost = cost

    var size: number = types.size()!;
        
        
;
    

    var typeArray: number[] = new Array(size);
        
        
;
    

    var typeAsInteger: Integer
;
    

    var type: number= 0
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
typeAsInteger= (types.get(index);

                         as Integer);
    
type= typeAsInteger!.toInt();
    

                        if(GeographicMapCellTypeFactory.getInstance()!.getGeographicMapCellTypeArray()[type] == 
                                    null
                                )
                        
                                    {
                                    RaceTrackGeographicMapCellType(name, type, cost);
    

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
    //var type = type



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isType(type.getType());

                        ;
    
}


    public isType(type: number): boolean{
    //var type = type

    var size: number = types.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

                        if(types[index] == type)
                        
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

    var stringMaker: StringMaker = new StringMaker();
        
        
;
    

    var size: number = types.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
stringMaker!.appendint(types[index]!)!.append(CommonSeps.getInstance()!.COMMA);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringMaker!.toString();

                        ;
    
}


}
                
            

