
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
type PreLogUtil<T = any, U = any> = typeof PreLogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof PreLogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Sound } from './Sound.js';
//not GWT import - same folder const Sound
import { NoSound } from './NoSound.js';
//not GWT import - same folder const NoSound

export class PlayerQueue
            extends Object
         {
        

    private static readonly TOTAL: string = "Sounds In Queue: ";

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly list: BasicArrayList = new BasicArrayListD();

    private max: number;

 constructor (max: number){

            super();
        this.max= max;
    
}


    public add(sound: Sound){

 try { 
                        if(!this.list.contains(sound))
                        
                                    {
                                    this.list.add(sound);
    

                                    }
                                
 }
 catch (caught: any) {
 {
  const e = caught;
  
PreLogUtil.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.ADD);
    

 }
   }
 
}


    public process(): boolean{

    let sound: Sound = NoSound.getInstance()!;;
    

 try { 
    let played: boolean = false;;
    

                        if(this.list.size() > 0)
                        
                                    {
                                    sound= this.list.removeAt(0) as Sound;
    

                        if(sound != 
                                    null
                                )
                        
                                    {
                                    sound.getPlayerP()!.start();
    

                                    }
                                

        while(this.list.size() > this.max)
        {
this.list.removeAt(0);
    
}

played= true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return played;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let resource: string = StringUtil.getInstance()!.EMPTY_STRING;;
    

                        if(sound != 
                                    null
                                )
                        
                                    {
                                    resource= sound.getResource();
    

                                    }
                                
PreLogUtil.put(new StringMaker().append(this.commonStrings!.EXCEPTION_LABEL)!.append(resource)!.toString(), this, this.commonStrings!.PROCESS);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

 }
   }
 
}


    public clear(){
this.list.clear();
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StringMaker().append(PlayerQueue.TOTAL)!.appendint(this.list.size())!.toString();;
    
}


}

