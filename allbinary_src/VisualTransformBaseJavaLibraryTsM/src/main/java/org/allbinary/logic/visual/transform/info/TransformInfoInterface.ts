
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

    

interface TransformInfoInterface extends TableMappingInterface {
        

    public log(): string

                //@Throws(Error::class)
            
    public override(hashMap: HashMap<any, any>)

    public getName(): string

    public setStoreName(value: string)

    public getStoreName(): string

    public getObjectFile(): string

    public getObject(): any = {}

                //@Throws(Error::class)
            
    public getTemplateFilePath(): AbPath

    public getTemplateFile(): string

    public getTemplate(): string

                //@Throws(Error::class)
            
    public getDataFilePath(): AbPath

    public getDataFile(): string

                //@Throws(Error::class)
            
    public getDataDocument(): Document

    public setName(value: string)

    public setObjectFile(value: string)

    public setObject(anyType: Object)

                //@Throws(Error::class)
            
    public setObjectConfigInterface(transformInfoObjectConfigInterface: Object)

                //@Throws(Error::class)
            
    public getObjectConfigInterface(): TransformInfoObjectConfigInterface

    public setTemplateFile(value: string)

    public setTemplate(value: string)

    public setDataFile(value: string)

    public setData(value: string)

    public setChild()

    public isChild(): boolean

}
                
            

