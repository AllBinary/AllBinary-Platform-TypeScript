
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
        
            import { System } from '../../../../java/lang/System.js';
        
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { LogConfigTypeFactory } from '../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js';
//not GWT import const LogConfigTypeFactory

import { LogConfigTypes } from '../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js';
//not GWT import const LogConfigTypes

import { AbFile } from '../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile

import { SubDirectory } from '../../../../org/allbinary/logic/io/file/directory/SubDirectory.js';
//not GWT import const SubDirectory

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
        
export class WeblisketFinder
            extends Object
         {
        

    private static readonly instance: WeblisketFinder = new WeblisketFinder();

    public static getInstance(): WeblisketFinder{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return WeblisketFinder.instance;
    
}


    private static readonly KEY: string = "installerdata.dat";

                //@Throws(Exception.constructor)
            
    public static main(args: string[]){

    let stringUtil: StringUtil = StringUtil.getInstance()!;;
    

    let vector: BasicArrayList = WeblisketFinder.getInstance()!.findAll(stringUtil!.EMPTY_STRING)!;;
    
console.log(vector.size());
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly subDirectory: SubDirectory = SubDirectory.getInstance()!;

private constructor (){

            super();
        }


    public findAll(path: string): BasicArrayList{

 try { this.logUtil!.putF(this.commonStrings!.START, this, "findAll");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.subDirectory!.search(WeblisketFinder.KEY, AbFile.createAbFile(path));;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "findAll", e);
    

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "findAll", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


    public getInstallationPath(file: AbFile): string{

 try { 
    let filePath: string = file.getPath()!;;
    

    let end: number = filePath!.indexOf(KEY)!;;
    

                        if(end < 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return filePath!.substring(0, end);;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PRELOADERERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "getInstallationPath", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


}

