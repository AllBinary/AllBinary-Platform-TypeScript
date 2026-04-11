
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
        



            import Vector from "@ohos.util.Vector";
        

//import { Vector } from "../../../../../../../java/util/Vector.js";

    
import { GenericProfile } from "../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/GenericProfile.js";

    
import { GenericProfileDataWorkerType } from "../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/GenericProfileDataWorkerType.js";

    
import { GenericProfiles } from "../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/GenericProfiles.js";

    
import { GenericProfileActions } from "../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/GenericProfileActions.js";

    
import { GenericProfileActionsJPanel } from "../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/GenericProfileActionsJPanel.js";

    
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringUtil } from "../../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    

export class GenericModuleConfigurationJPanel extends javax.swing.JPanel
                , GenericModuleConfigurationInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly stringUtil: StringUtil = StringUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private genericProfiles: GenericProfiles

    private selectedGenericProfile: GenericProfile
public constructor (){

            super();
            initComponents();
    
this.setGenericProfiles(GenericProfiles(GenericProfiles.DEFAULT_FILE));
    
this.selectFirstElement();
    
}


    initComponents(){
newProfileJDialog= javax.swing.JDialog();
    
okNewProfileJButton= javax.swing.JButton();
    
newProfileNameJLabel= javax.swing.JLabel();
    
newProfileNameJTextField= javax.swing.JTextField();
    
buttonGroup2= javax.swing.ButtonGroup();
    
genericJTabbedPane= javax.swing.JTabbedPane();
    
genericProfilesJPanel= javax.swing.JPanel();
    
genericProfilesJScrollPane= javax.swing.JScrollPane();
    
genericProfilesJList= javax.swing.JList();
    
newProfileJButton= javax.swing.JButton();
    
deleteProfileJButton= javax.swing.JButton();
    
jPanel1= javax.swing.JPanel();
    
screenCaptureJRadioButton= javax.swing.JRadioButton();
    
jLabel1= javax.swing.JLabel();
    
jLabel2= javax.swing.JLabel();
    
savedCaptureJRadioButton= javax.swing.JRadioButton();
    
captureMotionAnalysisJCheckBox= javax.swing.JCheckBox();
    
captureComparisonJCheckBox= javax.swing.JCheckBox();
    
jLabel3= javax.swing.JLabel();
    
blankGenericProfileActionsJPanel= javax.swing.JPanel();
    
newProfileJDialog!.setMinimumSize(java.awt.Dimension(250, 150));
    
newProfileJDialog!.setResizable(false);
    
okNewProfileJButton!.setText("Ok");
    
okNewProfileJButton!.addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
okNewProfileJButtonActionPerformed(evt);
    
}

                                }
                            );
    
newProfileNameJLabel!.setText("New Profile Name");
    

    var newProfileJDialogLayout: javax.swing.GroupLayout = new javax.swing.GroupLayout(newProfileJDialog!.getContentPane());
        
        
;
    
newProfileJDialog!.getContentPane()!.setLayout(newProfileJDialogLayout);
    
newProfileJDialogLayout!.setHorizontalGroup(newProfileJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(newProfileJDialogLayout!.createSequentialGroup()!.addGroup(newProfileJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(newProfileJDialogLayout!.createSequentialGroup()!.addGap(80, 80, 80)!.addComponent(newProfileNameJLabel))!.addGroup(newProfileJDialogLayout!.createSequentialGroup()!.addGap(30, 30, 30)!.addComponent(newProfileNameJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 180, javax.swing.GroupLayout.PREFERRED_SIZE))!.addGroup(newProfileJDialogLayout!.createSequentialGroup()!.addGap(100, 100, 100)!.addComponent(okNewProfileJButton)))!.addContainerGap(35, Short.MAX_VALUE)));
    
newProfileJDialogLayout!.setVerticalGroup(newProfileJDialogLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(newProfileJDialogLayout!.createSequentialGroup()!.addGap(10, 10, 10)!.addComponent(newProfileNameJLabel)!.addGap(16, 16, 16)!.addComponent(newProfileNameJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addGap(20, 20, 20)!.addComponent(okNewProfileJButton)));
    
setLayout(java.awt.GridLayout(1, 0));
    
setMinimumSize(java.awt.Dimension(400, 300));
    
setPreferredSize(java.awt.Dimension(700, 700));
    
genericJTabbedPane!.setToolTipText(stringUtil!.EMPTY_STRING);
    
genericJTabbedPane!.setMinimumSize(java.awt.Dimension(800, 600));
    
genericProfilesJPanel!.setMinimumSize(java.awt.Dimension(400, 300));
    
genericProfilesJPanel!.setPreferredSize(java.awt.Dimension(0, 0));
    
genericProfilesJList!.addListSelectionListener(object: javax.swing.event.ListSelectionListener()
                                {
                                
    public valueChanged(evt: javax.swing.event.ListSelectionEvent){
var evt = evt
genericProfilesJListValueChanged(evt);
    
}

                                }
                            );
    
genericProfilesJScrollPane!.setViewportView(genericProfilesJList);
    
newProfileJButton!.setText("New");
    
newProfileJButton!.setToolTipText("Creates a new profile");
    
newProfileJButton!.addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
newProfileJButtonActionPerformed(evt);
    
}

                                }
                            );
    
deleteProfileJButton!.setText("Delete");
    
deleteProfileJButton!.setToolTipText("Deletes the selected profile");
    
deleteProfileJButton!.addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
deleteProfileJButtonActionPerformed(evt);
    
}

                                }
                            );
    
jPanel1!.setPreferredSize(java.awt.Dimension(1000, 100));
    
screenCaptureJRadioButton!.setText("Screen Captures");
    
screenCaptureJRadioButton!.setToolTipText("Records the screen into memory for logical processing");
    
screenCaptureJRadioButton!.setBorder(javax.swing.BorderFactory.createEmptyBorder(0, 0, 0, 0));
    
screenCaptureJRadioButton!.setMargin(java.awt.Insets(0, 0, 0, 0));
    
screenCaptureJRadioButton!.addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
screenCaptureJRadioButtonActionPerformed(evt);
    
}

                                }
                            );
    
jLabel1!.setText("Profile Options");
    
jLabel2!.setText("Process From:");
    
savedCaptureJRadioButton!.setText("Saved Images");
    
savedCaptureJRadioButton!.setToolTipText("Loads images from files for logical processing.  Usually for debugging your profile actions");
    
savedCaptureJRadioButton!.setBorder(javax.swing.BorderFactory.createEmptyBorder(0, 0, 0, 0));
    
savedCaptureJRadioButton!.setMargin(java.awt.Insets(0, 0, 0, 0));
    
savedCaptureJRadioButton!.addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
savedCaptureJRadioButtonActionPerformed(evt);
    
}

                                }
                            );
    
captureMotionAnalysisJCheckBox!.setText("Motion Analysis");
    
captureMotionAnalysisJCheckBox!.setToolTipText("Uses image comparison and contraints to locate moving objects");
    
captureMotionAnalysisJCheckBox!.setBorder(javax.swing.BorderFactory.createEmptyBorder(0, 0, 0, 0));
    
captureMotionAnalysisJCheckBox!.setMargin(java.awt.Insets(0, 0, 0, 0));
    
captureMotionAnalysisJCheckBox!.addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
captureMotionAnalysisJCheckBoxActionPerformed(evt);
    
}

                                }
                            );
    
captureComparisonJCheckBox!.setText("Comparison");
    
captureComparisonJCheckBox!.setToolTipText("Compares the last two input images for multi image logic");
    
captureComparisonJCheckBox!.setBorder(javax.swing.BorderFactory.createEmptyBorder(0, 0, 0, 0));
    
captureComparisonJCheckBox!.setMargin(java.awt.Insets(0, 0, 0, 0));
    
captureComparisonJCheckBox!.addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
captureComparisonJCheckBoxActionPerformed(evt);
    
}

                                }
                            );
    
jLabel3!.setText("Image Processing:");
    
jLabel3!.setToolTipText("Turns on/off various extended image processing");
    

    var jPanel1Layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(jPanel1);
        
        
;
    
jPanel1!.setLayout(jPanel1Layout);
    
jPanel1Layout!.setHorizontalGroup(jPanel1Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(jPanel1Layout!.createSequentialGroup()!.addGroup(jPanel1Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(screenCaptureJRadioButton)!.addComponent(jLabel1)!.addComponent(jLabel2)!.addComponent(savedCaptureJRadioButton)!.addComponent(captureMotionAnalysisJCheckBox)!.addComponent(captureComparisonJCheckBox)!.addComponent(jLabel3))!.addContainerGap(22, Short.MAX_VALUE)));
    
jPanel1Layout!.setVerticalGroup(jPanel1Layout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(jPanel1Layout!.createSequentialGroup()!.addComponent(jLabel1)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(jLabel2)!.addGap(7, 7, 7)!.addComponent(screenCaptureJRadioButton)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(savedCaptureJRadioButton)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(jLabel3)!.addGap(7, 7, 7)!.addComponent(captureComparisonJCheckBox)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(captureMotionAnalysisJCheckBox)!.addContainerGap(106, Short.MAX_VALUE)));
    

    var genericProfilesJPanelLayout: javax.swing.GroupLayout = new javax.swing.GroupLayout(genericProfilesJPanel);
        
        
;
    
genericProfilesJPanel!.setLayout(genericProfilesJPanelLayout);
    
genericProfilesJPanelLayout!.setHorizontalGroup(genericProfilesJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(genericProfilesJPanelLayout!.createSequentialGroup()!.addGroup(genericProfilesJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(genericProfilesJPanelLayout!.createSequentialGroup()!.addComponent(newProfileJButton)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(deleteProfileJButton))!.addGroup(genericProfilesJPanelLayout!.createSequentialGroup()!.addComponent(genericProfilesJScrollPane, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, 119, Short.MAX_VALUE)))!.addContainerGap()));
    
genericProfilesJPanelLayout!.setVerticalGroup(genericProfilesJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(genericProfilesJPanelLayout!.createSequentialGroup()!.addGroup(genericProfilesJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(newProfileJButton)!.addComponent(deleteProfileJButton))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(genericProfilesJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, 246, Short.MAX_VALUE)!.addComponent(genericProfilesJScrollPane, javax.swing.GroupLayout.DEFAULT_SIZE, 246, Short.MAX_VALUE))));
    
genericJTabbedPane!.addTab("Profiles", genericProfilesJPanel);
    

    var blankGenericProfileActionsJPanelLayout: javax.swing.GroupLayout = new javax.swing.GroupLayout(blankGenericProfileActionsJPanel);
        
        
;
    
blankGenericProfileActionsJPanel!.setLayout(blankGenericProfileActionsJPanelLayout);
    
blankGenericProfileActionsJPanelLayout!.setHorizontalGroup(blankGenericProfileActionsJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 395, Short.MAX_VALUE));
    
blankGenericProfileActionsJPanelLayout!.setVerticalGroup(blankGenericProfileActionsJPanelLayout!.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 275, Short.MAX_VALUE));
    
genericJTabbedPane!.addTab("Actions", blankGenericProfileActionsJPanel);
    
add(genericJTabbedPane);
    
}


    savedCaptureJRadioButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            
                        if(this.savedCaptureJRadioButton!.isSelected())
                        
                                    {
                                    logUtil!.put("Selected", this, "savedCaptureJRadioButtonActionPerformed");
    
this.getSelectedGenericProfile()!.add(GenericProfileDataWorkerType.SAVED_CAPTURE);
    
this.getSelectedGenericProfile()!.remove(GenericProfileDataWorkerType.SCREEN_CAPTURE);
    
this.screenCaptureJRadioButton!.setSelected(false);
    
this.getGenericProfiles()!.save();
    

                                    }
                                

                //: 
} catch(e) 
            {
logUtil!.put(this.commonStrings!.EXCEPTION, this, "savedCaptureJRadioButtonActionPerformed", e);
    
}

}


    screenCaptureJRadioButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            
                        if(this.screenCaptureJRadioButton!.isSelected())
                        
                                    {
                                    logUtil!.put("Selected", this, "screenCaptureJRadioButtonActionPerformed");
    
this.getSelectedGenericProfile()!.add(GenericProfileDataWorkerType.SCREEN_CAPTURE);
    
this.getSelectedGenericProfile()!.remove(GenericProfileDataWorkerType.SAVED_CAPTURE);
    
this.savedCaptureJRadioButton!.setSelected(false);
    
this.getGenericProfiles()!.save();
    

                                    }
                                

                //: 
} catch(e) 
            {
logUtil!.put(this.commonStrings!.EXCEPTION, this, "screenCaptureJRadioButtonActionPerformed", e);
    
}

}


    captureMotionAnalysisJCheckBoxActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            
                        if(this.captureMotionAnalysisJCheckBox!.isSelected())
                        
                                    {
                                    this.getSelectedGenericProfile()!.add(GenericProfileDataWorkerType.MOTION);
    

                                    }
                                
                        else {
                            this.getSelectedGenericProfile()!.remove(GenericProfileDataWorkerType.MOTION);
    

                        }
                            
this.getGenericProfiles()!.save();
    

                //: 
} catch(e) 
            {
logUtil!.put(this.commonStrings!.EXCEPTION, this, "captureComparisonJCheckBoxActionPerformed", e);
    
}

}


    captureComparisonJCheckBoxActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            
                        if(this.captureComparisonJCheckBox!.isSelected())
                        
                                    {
                                    this.getSelectedGenericProfile()!.add(GenericProfileDataWorkerType.COMPARISON);
    

                                    }
                                
                        else {
                            this.getSelectedGenericProfile()!.remove(GenericProfileDataWorkerType.COMPARISON);
    

                        }
                            
this.getGenericProfiles()!.save();
    

                //: 
} catch(e) 
            {
logUtil!.put(this.commonStrings!.EXCEPTION, this, "captureComparisonJCheckBoxActionPerformed", e);
    
}

}


                //@Throws(Error::class)
            
    updateProfileUI(profileNameString: string){
var profileNameString = profileNameString
this.getBlankGenericProfileActionsJPanel()!.removeAll();
    

                        if(profileNameString != 
                                    null
                                )
                        
                                    {
                                    
    var genericProfileActionsJPanel: GenericProfileActionsJPanel = new GenericProfileActionsJPanel();
        
        
;
    
this.setSelectedGenericProfile(this.getGenericProfiles()!.get(profileNameString));
    
this.getSelectedGenericProfile()!.setGenericProfileActions(GenericProfileActions(genericProfileActionsJPanel, profileNameString));
    
genericProfileActionsJPanel!.setGenericProfileActions(this.getSelectedGenericProfile()!.getGenericProfileActions());
    
genericProfileActionsJPanel!.selectFirstElement();
    

    var layout: javax.swing.GroupLayout = this.getBlankGenericProfileActionsJPanel()!.getLayout();

                         as javax.swing.GroupLayout;
        
        
;
    
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 395, Short.MAX_VALUE)!.addComponent(genericProfileActionsJPanel, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE));
    
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGap(0, 256, Short.MAX_VALUE)!.addComponent(genericProfileActionsJPanel, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE));
    
this.updateProfileOptions();
    
logUtil!.put("Setting Configuration Profile JPanel", this, "updateProfileUI");
    

                                    }
                                
                        else {
                            logUtil!.put("Null Configuration Profile", this, "updateProfileUI");
    

                        }
                            
}


                //@Throws(Error::class)
            
    selectFirstElement(){
this.genericProfilesJList!.setModel(this.getGenericProfiles()!.getDefaultListModelHelper()!.getListModel());
    

                        if(this.genericProfilesJList!.getModel()!.getSize() > 0)
                        
                                    {
                                    this.genericProfilesJList!.setSelectedValue(this.genericProfilesJList!.getModel()!.getElementAt(0), true);
    
this.updateProfileUI(this.genericProfilesJList!.getModel()!.getElementAt(0);

                         as String);
    

                                    }
                                
}


                //@Throws(Error::class)
            
    updateProfileOptions(){
logUtil!.put(this.commonStrings!.START, this, "updateProfileOptions");
    

    var genericProfile: GenericProfile = this.getSelectedGenericProfile()!;
        
        
;
    

    var vector: Vector = genericProfile!.getGenericProfileDataWorkerTypeVector()!;
        
        
;
    
this.screenCaptureJRadioButton!.setSelected(false);
    
this.savedCaptureJRadioButton!.setSelected(false);
    
this.captureComparisonJCheckBox!.setSelected(false);
    
this.captureMotionAnalysisJCheckBox!.setSelected(false);
    

    var size: number = vector.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var genericProfileDataWorkerType: GenericProfileDataWorkerType = vector.get(index);

                         as GenericProfileDataWorkerType;
        
        
;
    
logUtil!.put(genericProfile!.getName() +" has GenericProfileDataWorkerType: " +genericProfileDataWorkerType!.toString(), this, "updateProfileOptions");
    

                        if(genericProfileDataWorkerType == GenericProfileDataWorkerType.SCREEN_CAPTURE)
                        
                                    {
                                    logUtil!.put("Screen Capture Selected", this, "updateProfileOptions");
    
this.screenCaptureJRadioButton!.setSelected(true);
    

                                    }
                                
                             else 
                        if(genericProfileDataWorkerType == GenericProfileDataWorkerType.SAVED_CAPTURE)
                        
                                    {
                                    logUtil!.put("Saved Capture Selected", this, "updateProfileOptions");
    
this.savedCaptureJRadioButton!.setSelected(true);
    

                                    }
                                
                             else 
                        if(genericProfileDataWorkerType == GenericProfileDataWorkerType.COMPARISON)
                        
                                    {
                                    logUtil!.put("Checking Comparison Box", this, "updateProfileOptions");
    
this.captureComparisonJCheckBox!.setSelected(true);
    

                                    }
                                
                             else 
                        if(genericProfileDataWorkerType == GenericProfileDataWorkerType.MOTION)
                        
                                    {
                                    logUtil!.put("Checking Motion Box", this, "updateProfileOptions");
    
this.captureMotionAnalysisJCheckBox!.setSelected(true);
    

                                    }
                                
}


                        if(!this.screenCaptureJRadioButton!.isSelected();

                         && !this.savedCaptureJRadioButton!.isSelected();

                        )
                        
                                    {
                                    this.screenCaptureJRadioButton!.setSelected(true);
    
this.getSelectedGenericProfile()!.add(GenericProfileDataWorkerType.SCREEN_CAPTURE);
    

                                    }
                                
logUtil!.put(this.commonStrings!.END, this, "updateProfileOptions");
    
}


    public getBlankGenericProfileActionsJPanel(): javax.swing.JPanel{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return blankGenericProfileActionsJPanel;
    
}


    public setBlankGenericProfileActionsJPanel(blankGenericProfileActionsJPanel: javax.swing.JPanel){
var blankGenericProfileActionsJPanel = blankGenericProfileActionsJPanel
this.blankGenericProfileActionsJPanel= blankGenericProfileActionsJPanel;
    
}


    getGenericProfiles(): GenericProfiles{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return genericProfiles;
    
}


    setGenericProfiles(genericProfiles: GenericProfiles){
var genericProfiles = genericProfiles
this.genericProfiles= genericProfiles;
    
}


    public getSelectedGenericProfile(): GenericProfile{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return selectedGenericProfile;
    
}


    public setSelectedGenericProfile(selectedGenericProfile: GenericProfile){
var selectedGenericProfile = selectedGenericProfile
this.selectedGenericProfile= selectedGenericProfile;
    
}


    genericProfilesJListValueChanged(evt: javax.swing.event.ListSelectionEvent){
var evt = evt

        try {
            
    var profileNameString: string = this.genericProfilesJList!.getSelectedValue();

                         as String;
        
        
;
    
this.updateProfileUI(profileNameString);
    

                //: 
} catch(e) 
            {
logUtil!.put(this.commonStrings!.EXCEPTION, this, "genericProfilesJListValueChanged", e);
    
}

}


    deleteProfileJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            
    var anyType: any[] = this.genericProfilesJList!.getSelectedValues()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < anyType!.length; index++)
        {

    var nextSelectedValueString: string = anyType[index]! as String;
        
        
;
    
this.getGenericProfiles()!.remove(nextSelectedValueString);
    
}

this.selectFirstElement();
    

                //: 
} catch(e) 
            {
logUtil!.put(this.commonStrings!.EXCEPTION, this, "deleteProfileJButtonActionPerformed", e);
    
}

}


    okNewProfileJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

        try {
            
    var newProfileName: string = this.newProfileNameJTextField!.getText()!;
        
        
;
    
this.getGenericProfiles()!.add(newProfileName);
    
this.genericProfilesJList!.setModel(this.getGenericProfiles()!.getDefaultListModelHelper()!.getListModel());
    
this.genericProfilesJList!.setSelectedValue(newProfileName, true);
    
this.newProfileJDialog!.setVisible(false);
    
this.updateProfileUI(newProfileName);
    

                //: 
} catch(e) 
            {
logUtil!.put(this.commonStrings!.EXCEPTION, this, "okNewProfileJButtonActionPerformed", e);
    
}

}


    newProfileJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
this.newProfileJDialog!.setVisible(true);
    
}


    private blankGenericProfileActionsJPanel: javax.swing.JPanel

    private buttonGroup2: javax.swing.ButtonGroup

    private captureComparisonJCheckBox: javax.swing.JCheckBox

    private captureMotionAnalysisJCheckBox: javax.swing.JCheckBox

    private deleteProfileJButton: javax.swing.JButton

    private genericJTabbedPane: javax.swing.JTabbedPane

    private genericProfilesJList: javax.swing.JList

    private genericProfilesJPanel: javax.swing.JPanel

    private genericProfilesJScrollPane: javax.swing.JScrollPane

    private jLabel1: javax.swing.JLabel

    private jLabel2: javax.swing.JLabel

    private jLabel3: javax.swing.JLabel

    private jPanel1: javax.swing.JPanel

    private newProfileJButton: javax.swing.JButton

    private newProfileJDialog: javax.swing.JDialog

    private newProfileNameJLabel: javax.swing.JLabel

    private newProfileNameJTextField: javax.swing.JTextField

    private okNewProfileJButton: javax.swing.JButton

    private savedCaptureJRadioButton: javax.swing.JRadioButton

    private screenCaptureJRadioButton: javax.swing.JRadioButton

}
                
            

