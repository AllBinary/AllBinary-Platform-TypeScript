
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
        
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { GeographicMapCellType } from '../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js';
//not GWT import const GeographicMapCellType

import { GeographicMapCellTypeFactory } from '../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellTypeFactory.js';
//not GWT import const GeographicMapCellTypeFactory

import { RaceTrackGeographicMapCellType } from '../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMapCellType.js';
//not GWT import const RaceTrackGeographicMapCellType

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListS } 
const BasicArrayListS = globalThis.org.allbinary.util.BasicArrayListS;
type BasicArrayListS<T = any, U = any> = typeof BasicArrayListS extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListS;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BasicTopViewGeographicMapCellType
            extends Object
         {
        

    public static createType(name: string, type: number, cost: number): BasicTopViewGeographicMapCellType{

    let types: BasicArrayList = new BasicArrayListS(1);;
    
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
        
    let size: number = types.size()!;;
    

    let typeArray: number[] = new Array(size);;
    

    let typeAsInteger: Integer;;
    

    let type: number= 0;;
    




                        for (
    let index: number = 0;index < size; index++)
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

    let size: number = this.types.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
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

    let stringMaker: StringMaker = new StringMaker();;
    

    let size: number = this.types.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
stringMaker!.appendint(this.types[index]!)!.append(CommonSeps.getInstance()!.COMMA);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringMaker!.toString();;
    
}


}

