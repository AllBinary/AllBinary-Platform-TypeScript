
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
        



            import { Integer } from "../../../../../java/lang/Integer.js";
        
import { awt } from "../../../../java/awt.js";

    
import { File } from "../../../../java/io/File.js";

    
import { HashMap } from "../../../../java/util/HashMap.js";

    
import { swing } from "../../../../javax/swing.js";

    
import { XslHelper } from "../../../../org/allbinary/data/tree/dom/XslHelper.js";

    
import { DomHelper } from "../../../../org/allbinary/dom/DomHelper.js";

    
import { NewWorkAreaJDialog } from "../../../../org/allbinary/graphics/j2me/dialog/NewWorkAreaJDialog.js";

    
import { RotateJDialog } from "../../../../org/allbinary/graphics/j2me/dialog/RotateJDialog.js";

    
import { WorkAreaDom } from "../../../../org/allbinary/graphics/j2me/workarea/WorkAreaDom.js";

    
import { WorkAreaJPanel } from "../../../../org/allbinary/graphics/j2me/workarea/WorkAreaJPanel.js";

    
import { WorkAreaJPanelInterface } from "../../../../org/allbinary/graphics/j2me/workarea/WorkAreaJPanelInterface.js";

    
import { MyCanvasEvent } from "../../../../org/allbinary/graphics/j2me/workarea/canvas/event/MyCanvasEvent.js";

    
import { MyCanvasEventService } from "../../../../org/allbinary/graphics/j2me/workarea/canvas/event/MyCanvasEventService.js";

    
import { MyCanvasEventSource } from "../../../../org/allbinary/graphics/j2me/workarea/canvas/event/MyCanvasEventSource.js";

    
import { FileJDialog } from "../../../../org/allbinary/gui/dialog/FileJDialog.js";

    
import { FileJDialogListenerInterface } from "../../../../org/allbinary/gui/dialog/FileJDialogListenerInterface.js";

    
import { HashMapJDialogListenerInterface } from "../../../../org/allbinary/gui/dialog/HashMapJDialogListenerInterface.js";

    
import { LOGGING } from "../../../../org/allbinary/log/LOGGING.js";

    
import { GuiLog } from "../../../../org/allbinary/logic/communication/log/GuiLog.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { SmallIntegerSingletonFactory } from "../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { AngleFactory } from "../../../../org/allbinary/math/AngleFactory.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { Document } from "../../../../org/w3c/dom/Document.js";

    

export class MyFrame extends javax.swing.JFrame
                , FileJDialogListenerInterface
                , HashMapJDialogListenerInterface
                , java.awt.event.KeyListener {
        

    private static readonly MAXWORKAREAS: number = 10;
        
        

    private numberOfWorkAreas: number = 0;
        
        

    private static readonly PATH: string = "G:/mnt/bc/mydev/work/graphics/AllBinaryGraphicsJavaApplication";
        
        

    private static readonly SAVE_PATH: string = PATH +"/save";
        
        

    private static readonly TEMPLATE_EXPORT_PATH: string = PATH +"/templates/export";
        
        

    public static main(args: string[]){
var args = args

        try {
            AngleFactory.getInstance();
    
SmallIntegerSingletonFactory.getInstance()!.init();
    
new MyFrame().
                            show();
    

                //: 
} catch(e) 
            {

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    
logUtil!.put(CommonStrings.getInstance()!.EXCEPTION, 
                            null, "main", e);
    
}

}


    statusJLabel: javax.swing.JLabel

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly guiLog: GuiLog = GuiLog.getInstance()!;
        
        

    private readonly xslHelper: XslHelper = XslHelper.getInstance()!;
        
        

    private readonly JAVA_TEMPLATE: string = "svgExport.xsl";
        
        

    private readonly SAVEEXTENSION: string = ".gxml";
        
        

    private readonly JAVAEXTENSION: string = ".javax";
        
        

    private fileJDialog: FileJDialog

    private rotateJDialog: RotateJDialog
public constructor (){

            super();
            initComponents();
    
this.setSize(new Dimension(550, 400));
    
this.mainJPanel!.setSize(new Dimension(550, 400));
    
this.jTabbedPane!.setSize(new Dimension(550, 400));
    
fileJDialog= new FileJDialog();
    
fileJDialog!.addFinishedListener(this);
    
this.rotateJDialog= new RotateJDialog(this, false);
    
}


    initComponents(){
jToolBar1= new javax.swing.JToolBar();
    
jButton2= new javax.swing.JButton();
    
saveJButton= new javax.swing.JButton();
    
jButton1= new javax.swing.JButton();
    
openJButton= new javax.swing.JButton();
    
jButton3= new javax.swing.JButton();
    
jButton4= new javax.swing.JButton();
    
jButton41= new javax.swing.JButton();
    
jButton5= new javax.swing.JButton();
    
animateJButton= new javax.swing.JButton();
    
playJButton= new javax.swing.JButton();
    
stopJjButton= new javax.swing.JButton();
    
jPanel1= new javax.swing.JPanel();
    
mainJPanel= new javax.swing.JPanel();
    
jTabbedPane= new javax.swing.JTabbedPane();
    
statusJPanel= new javax.swing.JPanel();
    
statusJLabel= new javax.swing.JLabel();
    
menuJMenuBar= new javax.swing.JMenuBar();
    
fileJMenu= new javax.swing.JMenu();
    
newJMenuItem= new javax.swing.JMenuItem();
    
openJMenuItem= new javax.swing.JMenuItem();
    
saveJMenuItem= new javax.swing.JMenuItem();
    
saveAsJMenuItem= new javax.swing.JMenuItem();
    
exportJMenuItem1= new javax.swing.JMenuItem();
    
exitJMenuItem= new javax.swing.JMenuItem();
    
viewJMenu= new javax.swing.JMenu();
    
zoomInJMenuItem= new javax.swing.JMenuItem();
    
zoomOutJMenuItem= new javax.swing.JMenuItem();
    
objectJMenu= new javax.swing.JMenu();
    
explodeAllJMenuItem= new javax.swing.JMenuItem();
    
frameJMenu= new javax.swing.JMenu();
    
previousFrameJMenuItem= new javax.swing.JMenuItem();
    
nextFrameJMenuItem= new javax.swing.JMenuItem();
    
removeJMenuItem= new javax.swing.JMenuItem();
    
copyJMenuItem1= new javax.swing.JMenuItem();
    
insertAfterJMenuItem= new javax.swing.JMenuItem();
    
insertBeforeJMenuItem= new javax.swing.JMenuItem();
    
generateJMenu= new javax.swing.JMenu();
    
centerJMenuItem= new javax.swing.JMenuItem();
    
autoDamageJMenuItem= new javax.swing.JMenuItem();
    
autoExplodeJMenuItem= new javax.swing.JMenuItem();
    
autoGrowJMenuItem= new javax.swing.JMenuItem();
    
jMenuItem1= new javax.swing.JMenuItem();
    
autoRotateGenerationJMenuItem= new javax.swing.JMenuItem();
    
autoSheildMenuItem= new javax.swing.JMenuItem();
    
autoShrinkJMenuItem= new javax.swing.JMenuItem();
    
jMenu1= new javax.swing.JMenu();
    
addWindowListener(new object: java.awt.event.WindowAdapter()
                                {
                                
    public windowClosing(evt: java.awt.event.WindowEvent){
var evt = evt
exitForm(evt);
    
}

                                }
                            );
    
jButton2!.setText("New");
    
jButton2!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
jButton2ActionPerformed(evt);
    
}

                                }
                            );
    
jToolBar1!.add(jButton2);
    
saveJButton!.setText("Save");
    
saveJButton!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
saveJButtonActionPerformed(evt);
    
}

                                }
                            );
    
jToolBar1!.add(saveJButton);
    
jButton1!.setText("Export");
    
jButton1!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
jButton1ActionPerformed(evt);
    
}

                                }
                            );
    
jToolBar1!.add(jButton1);
    
openJButton!.setText("Open");
    
openJButton!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
openJButtonActionPerformed(evt);
    
}

                                }
                            );
    
jToolBar1!.add(openJButton);
    
jButton3!.setText("Copy");
    
jToolBar1!.add(jButton3);
    
jButton4!.setText("Insert Before");
    
jToolBar1!.add(jButton4);
    
jButton41!.setText("Insert After");
    
jToolBar1!.add(jButton41);
    
jButton5!.setText("Delete");
    
jToolBar1!.add(jButton5);
    
animateJButton!.setText("AnimateEdit");
    
jToolBar1!.add(animateJButton);
    
playJButton!.setText("Play");
    
playJButton!.addMouseListener(new object: java.awt.event.MouseAdapter()
                                {
                                
    public mousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
playJButtonMousePressed(evt);
    
}

                                }
                            );
    
jToolBar1!.add(playJButton);
    
stopJjButton!.setText("Stop");
    
stopJjButton!.addMouseListener(new object: java.awt.event.MouseAdapter()
                                {
                                
    public mousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
stopJjButtonMousePressed(evt);
    
}

                                }
                            );
    
jToolBar1!.add(stopJjButton);
    
getContentPane()!.add(jToolBar1, java.awt.BorderLayout.NORTH);
    
jPanel1!.setLayout(new java.awt.GridLayout(1, 0));
    
mainJPanel!.setLayout(new java.awt.GridLayout(1, 0));
    
jTabbedPane!.setMinimumSize(new java.awt.Dimension(550, 400));
    
jTabbedPane!.addChangeListener(new object: javax.swing.event.ChangeListener()
                                {
                                
    public stateChanged(evt: javax.swing.event.ChangeEvent){
var evt = evt
jTabbedPaneStateChanged(evt);
    
}

                                }
                            );
    
mainJPanel!.add(jTabbedPane);
    
jPanel1!.add(mainJPanel);
    
getContentPane()!.add(jPanel1, java.awt.BorderLayout.CENTER);
    
statusJPanel!.setLayout(new java.awt.GridLayout(1, 0));
    
statusJLabel!.setText("Status Bar");
    
statusJPanel!.add(statusJLabel);
    
getContentPane()!.add(statusJPanel, java.awt.BorderLayout.SOUTH);
    
fileJMenu!.setText("File");
    
fileJMenu!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
fileJMenuActionPerformed(evt);
    
}

                                }
                            );
    
newJMenuItem!.setText("New");
    
newJMenuItem!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
newJMenuItemActionPerformed(evt);
    
}

                                }
                            );
    
fileJMenu!.add(newJMenuItem);
    
openJMenuItem!.setText("Open");
    
openJMenuItem!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
openJMenuItemActionPerformed(evt);
    
}

                                }
                            );
    
fileJMenu!.add(openJMenuItem);
    
saveJMenuItem!.setText("Save");
    
saveJMenuItem!.addMouseListener(new object: java.awt.event.MouseAdapter()
                                {
                                
    public mousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
saveJMenuItemMousePressed(evt);
    
}

                                }
                            );
    
fileJMenu!.add(saveJMenuItem);
    
saveAsJMenuItem!.setText("SaveAs");
    
fileJMenu!.add(saveAsJMenuItem);
    
exportJMenuItem1!.setText("Export");
    
exportJMenuItem1!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
exportJMenuItem1ActionPerformed(evt);
    
}

                                }
                            );
    
fileJMenu!.add(exportJMenuItem1);
    
exitJMenuItem!.setText("Exit");
    
exitJMenuItem!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
exitJMenuItemActionPerformed(evt);
    
}

                                }
                            );
    
fileJMenu!.add(exitJMenuItem);
    
menuJMenuBar!.add(fileJMenu);
    
viewJMenu!.setText("View");
    
zoomInJMenuItem!.setText("Zoom In");
    
zoomInJMenuItem!.addMouseListener(new object: java.awt.event.MouseAdapter()
                                {
                                
    public mousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
zoomInJMenuItemMousePressed(evt);
    
}

                                }
                            );
    
viewJMenu!.add(zoomInJMenuItem);
    
zoomOutJMenuItem!.setText("Zoom Out");
    
zoomOutJMenuItem!.addMouseListener(new object: java.awt.event.MouseAdapter()
                                {
                                
    public mousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
zoomOutJMenuItemMousePressed(evt);
    
}

                                }
                            );
    
viewJMenu!.add(zoomOutJMenuItem);
    
menuJMenuBar!.add(viewJMenu);
    
objectJMenu!.setText("Objects");
    
explodeAllJMenuItem!.setText("Explode All");
    
explodeAllJMenuItem!.addMouseListener(new object: java.awt.event.MouseAdapter()
                                {
                                
    public mousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
explodeAllJMenuItemMousePressed(evt);
    
}

                                }
                            );
    
objectJMenu!.add(explodeAllJMenuItem);
    
menuJMenuBar!.add(objectJMenu);
    
frameJMenu!.setText("Frame");
    
frameJMenu!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
frameJMenuActionPerformed(evt);
    
}

                                }
                            );
    
previousFrameJMenuItem!.setText("Previous");
    
frameJMenu!.add(previousFrameJMenuItem);
    
nextFrameJMenuItem!.setText("Next");
    
frameJMenu!.add(nextFrameJMenuItem);
    
removeJMenuItem!.setText("Remove");
    
frameJMenu!.add(removeJMenuItem);
    
copyJMenuItem1!.setText("Copy");
    
frameJMenu!.add(copyJMenuItem1);
    
insertAfterJMenuItem!.setText("Ins After");
    
frameJMenu!.add(insertAfterJMenuItem);
    
insertBeforeJMenuItem!.setText("Ins Before");
    
frameJMenu!.add(insertBeforeJMenuItem);
    
menuJMenuBar!.add(frameJMenu);
    
generateJMenu!.setText("Generate");
    
centerJMenuItem!.setText("Center");
    
centerJMenuItem!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
centerJMenuItemActionPerformed(evt);
    
}

                                }
                            );
    
generateJMenu!.add(centerJMenuItem);
    
autoDamageJMenuItem!.setText("Damage");
    
generateJMenu!.add(autoDamageJMenuItem);
    
autoExplodeJMenuItem!.setText("Explode");
    
autoExplodeJMenuItem!.addMouseListener(new object: java.awt.event.MouseAdapter()
                                {
                                
    public mousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
autoExplodeJMenuItemMousePressed(evt);
    
}

                                }
                            );
    
generateJMenu!.add(autoExplodeJMenuItem);
    
autoGrowJMenuItem!.setText("Grow");
    
generateJMenu!.add(autoGrowJMenuItem);
    
jMenuItem1!.setText("Mirror");
    
jMenuItem1!.addActionListener(new object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
jMenuItem1ActionPerformed(evt);
    
}

                                }
                            );
    
generateJMenu!.add(jMenuItem1);
    
autoRotateGenerationJMenuItem!.setText("Rotate");
    
autoRotateGenerationJMenuItem!.addMouseListener(new object: java.awt.event.MouseAdapter()
                                {
                                
    public mousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
autoRotateGenerationJMenuItemMousePressed(evt);
    
}

                                }
                            );
    
generateJMenu!.add(autoRotateGenerationJMenuItem);
    
autoSheildMenuItem!.setText("Shield");
    
generateJMenu!.add(autoSheildMenuItem);
    
autoShrinkJMenuItem!.setText("Shrink");
    
generateJMenu!.add(autoShrinkJMenuItem);
    
menuJMenuBar!.add(generateJMenu);
    
jMenu1!.setText("Help");
    
menuJMenuBar!.add(jMenu1);
    
setJMenuBar(menuJMenuBar);
    
pack();
    
}


    explodeAllJMenuItemMousePressed(evt: java.awt.event.MouseEvent){
var evt = evt

        try {
            MyCanvasEventService.fire(new MyCanvasEvent(new MyCanvasEventSource(MyCanvasEventService.EXPLODE, 
                            null) as Object));
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, "explodeAllJMenuItemMousePressed", e);
    
}

}


    autoExplodeJMenuItemMousePressed(evt: java.awt.event.MouseEvent){
var evt = evt

        try {
            MyCanvasEventService.fire(new MyCanvasEvent(new MyCanvasEventSource(MyCanvasEventService.AUTOEXPLODE, 
                            null) as Object));
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, "autoExplodeJMenuItemMousePressed", e);
    
}

}


    stopJjButtonMousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
this.getSelectedWorkArea()!.stop();
    
}


    playJButtonMousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
this.getSelectedWorkArea()!.play();
    
}


    autoRotateGenerationJMenuItemMousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
this.rotateJDialog!.setVisible(true);
    
}


    zoomOutJMenuItemMousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
getSelectedWorkArea()!.changeZoom( -1);
    
}


    zoomInJMenuItemMousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
getSelectedWorkArea()!.changeZoom(1);
    
}


    openJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.openGraphics();
    
}


    exportJMenuItem1ActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.export();
    
}


    saveJMenuItemMousePressed(evt: java.awt.event.MouseEvent){
var evt = evt
this.save();
    
}


    jTabbedPaneStateChanged(evt: javax.swing.event.ChangeEvent){
var evt = evt
this.updateSelectedWorkArea();
    
}


    frameJMenuActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
}


    exitJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
System.exit(0);
    
}


    newJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.newGraphics();
    
}


    fileJMenuActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
}


    exitForm(evt: java.awt.event.WindowEvent){
var evt = evt
System.exit(0);
    
}


    openJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.openGraphics();
    
}


    jButton2ActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.newGraphics();
    
}


    centerJMenuItemActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            MyCanvasEventService.fire(new MyCanvasEvent(new MyCanvasEventSource(MyCanvasEventService.CENTER, 
                            null) as Object));
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, "centerJMenuItemActionPerformed", e);
    
}

}


    saveJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.save();
    
}


    jButton1ActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.export();
    
}


    jMenuItem1ActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            this.getSelectedWorkArea()!.autoMirror();
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, "centerJMenuItemActionPerformed", e);
    
}

}


    public onFiles(files: File[]){
var files = files

        try {
            this.logUtil!.putF("Reading: " +files, this, "onFiles");
    




                        for (
    var index: number = 0;
        
        
index < files.length; index++)
        {

    var document: Document = DomHelper.getInstance()!.createDocument(files[index]!)!;
        
        
;
    

    var workAreaJPanel: WorkAreaJPanel = new WorkAreaJPanel(new WorkAreaDom(document), this.getSize());
        
        
;
    
workAreaJPanel!.setLayout(new GridLayout(1, 1));
    
this.add(workAreaJPanel as WorkAreaJPanelInterface);
    
}

this.fileJDialog!.setVisible(false);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, "onFiles", e);
    
}

}


    newGraphics(){

        try {
            
    var newName: string = "graphic" +this.numberOfWorkAreas;
        
        
;
    

    var dim: Dimension = this.getSize()!;
        
        
;
    

    var newDialog: NewWorkAreaJDialog = new NewWorkAreaJDialog(this, false, dim, newName);
        
        
;
    

                //: 
} catch(e) 
            {

                        if(LOGGING.contains(LOGGING.MENUEVENT))
                        
                                    {
                                    guiLog!.put(commonStrings!.EXCEPTION, this, "newJMenuItemActionPerformed", e);
    

                                    }
                                
}

}


    openGraphics(){

        try {
            this.logUtil!.putF("Starting", this, "openImageJMenuItemActionPerformed");
    
fileJDialog!.setVisible(true);
    

                //: 
} catch(e) 
            {

                        if(LOGGING.contains(LOGGING.MENUEVENT))
                        
                                    {
                                    guiLog!.put(commonStrings!.EXCEPTION, this, "open", e);
    

                                    }
                                
}

}


    export(){

        try {
            
    var workAreaJPanel: WorkAreaJPanelInterface = this.jTabbedPane!.getSelectedComponent();

                         as WorkAreaJPanelInterface;
        
        
;
    

    var file: File = new File(this.SAVE_PATH +"/" +workAreaJPanel!.getName() +JAVAEXTENSION);
        
        
;
    

    var document: Document = workAreaJPanel!.toDocument()!;
        
        
;
    
this.logUtil!.putF("Export: " +DomHelper.getInstance()!.toString(document), this, "exportJMenuItem1ActionPerformed");
    
xslHelper!.export(file, this.TEMPLATE_EXPORT_PATH +"/" +this.JAVA_TEMPLATE, document);
    

                //: 
} catch(e) 
            {

                        if(LOGGING.contains(LOGGING.MENUEVENT))
                        
                                    {
                                    guiLog!.put(commonStrings!.EXCEPTION, this, "export", e);
    

                                    }
                                
}

}


    save(){

        try {
            
    var workAreaJPanel: WorkAreaJPanelInterface = this.jTabbedPane!.getSelectedComponent();

                         as WorkAreaJPanelInterface;
        
        
;
    
DomHelper.getInstance()!.save(new File(this.SAVE_PATH +"/" +workAreaJPanel!.getName() +SAVEEXTENSION), workAreaJPanel!.toDocument());
    

                //: 
} catch(e) 
            {

                        if(LOGGING.contains(LOGGING.MENUEVENT))
                        
                                    {
                                    guiLog!.put(commonStrings!.EXCEPTION, this, commonStrings!.SAVE, e);
    

                                    }
                                
}

}


                //@Throws(Error::class)
            
    public onHashMap(hashMap: HashMap<any, any>){
var hashMap = hashMap

    var angleIncrementInteger: Integer = hashMap!.get(Integer(Integer.valueOf(0)));

                         as Integer;
        
        
;
    

    var totalRotationInteger: Integer = hashMap!.get(Integer(Integer.valueOf(1)));

                         as Integer;
        
        
;
    
this.getSelectedWorkArea()!.autoRotate(angleIncrementInteger!.toInt(), totalRotationInteger!.toInt());
    
}


    getSelectedWorkArea(): WorkAreaJPanelInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.jTabbedPane!.getSelectedComponent();

                         as WorkAreaJPanelInterface;
    
}


    public updateSelectedWorkArea(){

    var numberOfTabs: number = this.jTabbedPane!.getTabCount()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < numberOfTabs; index++)
        {

    var workAreaJPanel: WorkAreaJPanelInterface = this.jTabbedPane!.getComponentAt(index);

                         as WorkAreaJPanelInterface;
        
        
;
    
workAreaJPanel!.deselect();
    
}


    var workAreaJPanel: WorkAreaJPanelInterface = this.jTabbedPane!.getSelectedComponent();

                         as WorkAreaJPanelInterface;
        
        
;
    

                        if(workAreaJPanel != 
                                    null
                                )
                        
                                    {
                                    workAreaJPanel!.select();
    

                                    }
                                
}


                //@Throws(Error::class)
            
    public add(newCanvasInterface: WorkAreaJPanelInterface){
var newCanvasInterface = newCanvasInterface

        try {
            this.numberOfWorkAreas++;
    

                        if(this.numberOfWorkAreas == MAXWORKAREAS)
                        
                                    {
                                    


                            throw new Error()

                                    }
                                
jTabbedPane!.addTab(newCanvasInterface!.getName(), newCanvasInterface as JPanel);
    
jTabbedPane!.setSelectedComponent(newCanvasInterface as JPanel);
    

    var animationThread: Thread = new Thread(newCanvasInterface as Runnable);
        
        
;
    
animationThread!.start();
    
this.updateSelectedWorkArea();
    

                //: 
} catch(e) 
            {

                        if(LOGGING.contains(LOGGING.GRAPHICSCREATION))
                        
                                    {
                                    guiLog!.put(commonStrings!.EXCEPTION, this, "addNewCanvas", e);
    

                                    }
                                
}

}


    public keyPressed(keyEvent: java.awt.event.KeyEvent){
var keyEvent = keyEvent
this.getSelectedWorkArea()!.keyPressed(keyEvent);
    
}


    public keyReleased(keyEvent: java.awt.event.KeyEvent){
var keyEvent = keyEvent
}


    public keyTyped(keyEvent: java.awt.event.KeyEvent){
var keyEvent = keyEvent
}


    private animateJButton: javax.swing.JButton

    private autoDamageJMenuItem: javax.swing.JMenuItem

    private autoExplodeJMenuItem: javax.swing.JMenuItem

    private autoGrowJMenuItem: javax.swing.JMenuItem

    private autoRotateGenerationJMenuItem: javax.swing.JMenuItem

    private autoSheildMenuItem: javax.swing.JMenuItem

    private autoShrinkJMenuItem: javax.swing.JMenuItem

    private centerJMenuItem: javax.swing.JMenuItem

    private copyJMenuItem1: javax.swing.JMenuItem

    private exitJMenuItem: javax.swing.JMenuItem

    private explodeAllJMenuItem: javax.swing.JMenuItem

    private exportJMenuItem1: javax.swing.JMenuItem

    private fileJMenu: javax.swing.JMenu

    private frameJMenu: javax.swing.JMenu

    private generateJMenu: javax.swing.JMenu

    private insertAfterJMenuItem: javax.swing.JMenuItem

    private insertBeforeJMenuItem: javax.swing.JMenuItem

    private jButton1: javax.swing.JButton

    private jButton2: javax.swing.JButton

    private jButton3: javax.swing.JButton

    private jButton4: javax.swing.JButton

    private jButton41: javax.swing.JButton

    private jButton5: javax.swing.JButton

    private jMenu1: javax.swing.JMenu

    private jMenuItem1: javax.swing.JMenuItem

    private jPanel1: javax.swing.JPanel

    private jTabbedPane: javax.swing.JTabbedPane

    private jToolBar1: javax.swing.JToolBar

    private mainJPanel: javax.swing.JPanel

    private menuJMenuBar: javax.swing.JMenuBar

    private newJMenuItem: javax.swing.JMenuItem

    private nextFrameJMenuItem: javax.swing.JMenuItem

    private objectJMenu: javax.swing.JMenu

    private openJButton: javax.swing.JButton

    private openJMenuItem: javax.swing.JMenuItem

    private playJButton: javax.swing.JButton

    private previousFrameJMenuItem: javax.swing.JMenuItem

    private removeJMenuItem: javax.swing.JMenuItem

    private saveAsJMenuItem: javax.swing.JMenuItem

    private saveJButton: javax.swing.JButton

    private saveJMenuItem: javax.swing.JMenuItem

    private statusJPanel: javax.swing.JPanel

    private stopJjButton: javax.swing.JButton

    private viewJMenu: javax.swing.JMenu

    private zoomInJMenuItem: javax.swing.JMenuItem

    private zoomOutJMenuItem: javax.swing.JMenuItem

}
                
            

