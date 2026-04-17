
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
        



import { Node } from "../../../../../../../org/w3c/dom/Node.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class DisplayInBrowserContraints
            extends Object
         implements DisplayInBrowserContraintsInterface {
        

    private frameable: boolean= false

    private mountable: boolean= false

    private quickFrameable: boolean= false

    private mountedLink: string
public constructor (node: Node){

            super();
            var node = node
}


    public isMountable(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return mountable;
    
}


    public setMountable(mountable: boolean){
var mountable = mountable
this.mountable= mountable;
    
}


    public isFrameable(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return frameable;
    
}


    public setFrameable(frameable: boolean){
var frameable = frameable
this.frameable= frameable;
    
}


    public isQuickFrameable(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return quickFrameable;
    
}


    public setQuickFrameable(quickFrameable: boolean){
var quickFrameable = quickFrameable
this.quickFrameable= quickFrameable;
    
}


    public getMountedLink(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return mountedLink;
    
}


    public setMountedLink(mountedLink: string){
var mountedLink = mountedLink
this.mountedLink= mountedLink;
    
}


}
                
            

