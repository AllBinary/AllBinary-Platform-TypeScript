
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
        



import { swing } from "../../../../../javax/swing.js";

    

export class JListSwingWorker extends SwingWorker {
        

    private jList: JList

    private listModel: ListModel
public constructor (jList: JList, listModel: ListModel){

            super();
            var jList = jList
var listModel = listModel
this.setJList(jList)
this.setListModel(listModel)
}


    public doInBackground(): any = {}{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    done(){
this.getJList()!.setModel(this.getListModel())
}


    getJList(): JList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return jList;
    
}


    setJList(jList: JList){
var jList = jList
this.jList= jList
}


    getListModel(): ListModel{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return listModel;
    
}


    setListModel(listModel: ListModel){
var listModel = listModel
this.listModel= listModel
}


}
                
            

