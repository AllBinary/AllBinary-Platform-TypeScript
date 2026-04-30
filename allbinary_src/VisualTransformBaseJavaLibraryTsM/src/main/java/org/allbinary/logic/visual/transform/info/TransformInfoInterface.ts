
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
        



import { HashMap } from "../../../../../../java/util/HashMap.js";

    
import { TableMappingInterface } from "../../../../../../org/allbinary/data/tables/TableMappingInterface.js";

    
import { AbPath } from "../../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { TransformInfoObjectConfigInterface } from "../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfigInterface.js";

    
import { Document } from "../../../../../../org/w3c/dom/Document.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface TransformInfoInterface extends TableMappingInterface {
        

    log(): string

                //@Throws(Error::class)
            
    override(hashMap: HashMap<any, any>)

    getName(): string

    setStoreName(value: string)

    getStoreName(): string

    getObjectFile(): string

    getObject(): any

                //@Throws(Error::class)
            
    getTemplateFilePath(): AbPath

    getTemplateFile(): string

    getTemplate(): string

                //@Throws(Error::class)
            
    getDataFilePath(): AbPath

    getDataFile(): string

                //@Throws(Error::class)
            
    getDataDocument(): Document

    setName(value: string)

    setObjectFile(value: string)

    setObject(anyType: Object)

                //@Throws(Error::class)
            
    setObjectConfigInterface(transformInfoObjectConfigInterface: Object)

                //@Throws(Error::class)
            
    getObjectConfigInterface(): TransformInfoObjectConfigInterface

    setTemplateFile(value: string)

    setTemplate(value: string)

    setDataFile(value: string)

    setData(value: string)

    setChild()

    isChild(): boolean

}
                
            

