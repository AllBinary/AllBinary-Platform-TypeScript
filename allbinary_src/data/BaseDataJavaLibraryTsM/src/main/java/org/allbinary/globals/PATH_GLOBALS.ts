
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

        


            import { Object } from '../../../java/lang/Object.js';
        
//not plain js import { AbPathData } 
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;
type AbPathData<T = any, U = any> = typeof AbPathData extends abstract new (...args: any[]) => infer Instance ? Instance : typeof AbPathData;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PATH_GLOBALS
            extends Object
         {
        

    private static readonly instance: PATH_GLOBALS = new PATH_GLOBALS();

    public static getInstance(): PATH_GLOBALS{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PATH_GLOBALS.instance;
    
}


private constructor (){

            super();
        
    let stringBuffer: StringMaker = new StringMaker();;
    

    let abPathData: AbPathData = AbPathData.getInstance()!;;
    
stringBuffer!.append("data");
    
stringBuffer!.append(abPathData!.SEPARATOR);
    
this.DATA_PATH= stringBuffer!.toString();
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(this.DATA_PATH);
    
stringBuffer!.append(CommonStrings.getInstance()!.INIT);
    
stringBuffer!.append(abPathData!.SEPARATOR);
    
this.INIT_PATH= stringBuffer!.toString();
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(this.DATA_PATH);
    
stringBuffer!.append("log");
    
stringBuffer!.append(abPathData!.SEPARATOR);
    
this.LOG_PATH= stringBuffer!.toString();
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(this.DATA_PATH);
    
stringBuffer!.append("backup");
    
stringBuffer!.append(abPathData!.SEPARATOR);
    
this.BACKUP_PATH= stringBuffer!.toString();
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(this.INIT_PATH);
    
stringBuffer!.append("views");
    
stringBuffer!.append(abPathData!.SEPARATOR);
    
this.VIEWS_PATH= stringBuffer!.toString();
    
}


    public readonly DATA_PATH: string;

    public readonly INIT_PATH: string;

    public readonly VIEWS_PATH: string;

    public readonly LOG_PATH: string;

    public readonly BACKUP_PATH: string;

}

