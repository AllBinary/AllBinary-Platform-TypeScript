
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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
        



            import { Object } from '../../java/lang/Object.js';


        
            import { ClassLoader } from '../../java/lang/ClassLoader.js';
        
            import { InterruptedException } from '../../java/lang/InterruptedException.js';
        
import { Displayable } from '../../javax/microedition/lcdui/Displayable.js';
      
import { Form } from '../../javax/microedition/lcdui/Form.js';
      
import { InvalidRecordIDException } from '../../javax/microedition/rms/InvalidRecordIDException.js';
      
import { RecordStore } from '../../javax/microedition/rms/RecordStore.js';
      
import { RecordStoreException } from '../../javax/microedition/rms/RecordStoreException.js';
      
import { RecordStoreNotOpenException } from '../../javax/microedition/rms/RecordStoreNotOpenException.js';
      
import { NullUtil } from '../../org/allbinary/logic/NullUtil.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TsUtil
            extends Object
         {
        

    private static readonly instance: TsUtil = new TsUtil();

    public static getInstance(): TsUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TsUtil.instance;
    
}


    public hashCode(anyType: any = {}): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return anyType!.hashCode();;
    
}


                //@Throws(InterruptedException.constructor)
            
    public waitFor(any: any = {}, timeoutMillis: number){

    var anyType: any = any;;
    
anyType!.wait(timeoutMillis);
    
}


                //@Throws(RecordStoreNotOpenException.constructor, InvalidRecordIDException.constructor, RecordStoreException.constructor)
            
    public getRecord(anyType: any = {}, recordId: number): number[]{

    var recordStore: RecordStore = anyType as RecordStore;;
    

    var data: number[];;
    

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        //synchronized(this) 

        //mutex.withLock
        
data= new Array(recordStore!.getRecordSize(recordId));
    
recordStore!.getRecord(recordId, data, 0);
    





                        //if statement needs to be on the same line and ternary does not work the same way.
                        return data.length < 1
                        ?       
                                NullUtil.getInstance()!.NULL_BYTE_ARRAY
                                :

                            data;

    ;
    
}


    public compareTo(a: string, b: string): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return a.compareTo(b);;
    
}


    public equalIgnoreCase(a: string, b: string): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return a.equalsIgnoreCase(b);;
    
}


    public equalsNotstring(anyType: any = {}, object2: any = {}): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return anyType! === object2;;
    
}


    public getClassClassLoader(anyType: any = {}): ClassLoader{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return anyType!.constructor.namegetClassLoader();;
    
}


    public toNumber(value: string): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Math.round(value);
    
}


    public toNumber(value: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return value;
    
}


    public getByteArray(string: string): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return string.getBytes();;
    
}


    public isItemListener(owner: Displayable): boolean{

                        if(owner instanceof Form)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


}
                
            

