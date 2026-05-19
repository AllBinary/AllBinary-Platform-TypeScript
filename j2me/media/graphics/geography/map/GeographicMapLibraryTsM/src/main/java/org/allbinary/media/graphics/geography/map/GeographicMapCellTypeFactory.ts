
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
        



            import { Object } from '../../../../../../java/lang/Object.js';


        
            import { RuntimeException } from '../../../../../../java/lang/RuntimeException.js';
        
import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GeographicMapCellType } from './GeographicMapCellType.js';

export class GeographicMapCellTypeFactory
            extends Object
         {
        

    private static readonly instance: GeographicMapCellTypeFactory = new GeographicMapCellTypeFactory();

    public static getInstance(): GeographicMapCellTypeFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GeographicMapCellTypeFactory.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly geographicMapCellTypeArray: GeographicMapCellType[] = new Array(512);

    public get(type: number): GeographicMapCellType{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellTypeArray[type]!;
    
}


    public getGeographicMapCellTypeArray(): GeographicMapCellType[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.geographicMapCellTypeArray;
    
}


    public getStartType(): number{



                            throw new RuntimeException();
                    
}


    public getEndType(): number{



                            throw new RuntimeException();
                    
}


    public getEmptyType(): number{



                            throw new RuntimeException();
                    
}


    public isPath(cellType: GeographicMapCellType): boolean{



                            throw new RuntimeException();
                    
}


}
                
            

