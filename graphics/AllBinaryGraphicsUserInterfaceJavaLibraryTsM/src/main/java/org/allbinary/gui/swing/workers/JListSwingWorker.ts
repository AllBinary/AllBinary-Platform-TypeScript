
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

        


import { swing } from '../../../../../javax/swing.js';
//not GWT import const swing = globalThis.javax.swing;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SwingWorker } from './SwingWorker.js';
//not GWT import - same folder const SwingWorker = globalThis.org.allbinary.gui.swing.workers.SwingWorker;

                import { JList } from './JList.js';
//not GWT import - same folder const JList = globalThis.org.allbinary.gui.swing.workers.JList;

                import { ListModel } from './ListModel.js';
//not GWT import - same folder const ListModel = globalThis.org.allbinary.gui.swing.workers.ListModel;

                
export class JListSwingWorker extends SwingWorker {
        

    private jList: JList;

    private listModel: ListModel;

public constructor (jList: JList, listModel: ListModel){

            super();
        this.setJList(jList);
    
this.setListModel(listModel);
    
}


    public doInBackground(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    done(){
this.getJList()!.setModel(this.getListModel());
    
}


    getJList(): JList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.jList;
    
}


    setJList(jList: JList){
this.jList= jList;
    
}


    getListModel(): ListModel{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.listModel;
    
}


    setListModel(listModel: ListModel){
this.listModel= listModel;
    
}


}



