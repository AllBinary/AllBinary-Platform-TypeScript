
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
        



import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

export class GeographicMapCellTypeFactory
            extends Object
         {
        

    private static readonly instance: GeographicMapCellTypeFactory = new GeographicMapCellTypeFactory();
        
        

    public static getInstance(): GeographicMapCellTypeFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly geographicMapCellTypeArray: GeographicMapCellType[] = new Array(512);
        
        

    public getInstance(type: number): GeographicMapCellType{
var type = type



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellTypeArray[type]!;
    
}


    public getGeographicMapCellTypeArray(): GeographicMapCellType[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellTypeArray;
    
}


    public getStartType(): number{



                            throw new RuntimeException()
}


    public getEndType(): number{



                            throw new RuntimeException()
}


    public getEmptyType(): number{



                            throw new RuntimeException()
}


    public isPath(cellType: GeographicMapCellType): boolean{
var cellType = cellType



                            throw new RuntimeException()
}


}
                
            

