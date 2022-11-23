# Import module
import tkinter as tk
from tkinter import *
import os


root = tk.Tk(  )
# Create object

root.title('Modular DAO Generator')

Environment_path = "F:\Blockchain\EF\POC\Hardhat_Env"
  
# Adjust size
root.geometry( "800x400" )

#Token_factory_Code
def Token_factory_Code():
    Dao_Template.write("")


# Copy Code
def Copy_code():  
    Token_factory_Code();
    Contract_path =   Environment_path + '\contracts\Temp_Contract.sol'
    #Contract_path = "F:\Blockchain\EF\POC\Hardhat_Env\contracts\Temp_Contract.sol"
    print("*******"+Contract_path+"*******")
    Dao_Template = open(Contract_path, "a")
    Dao_Template.write("")
    Dao_Template.close()


  
# Generate DAO
def Generate_DAO():
    Copy_code();
    os.system('cd' + Environment_path)
    stream=os.popen('cmd /k "npx hardhat compile"') 
    output = stream.read()
    #print(output) 
    finalRead = str(output)
    text_info.insert(tk.END, finalRead)
  
# Clear selection
def Clear_Selection():
    Voting_Dropdown_menu.set( " " )
    Membership_Dropdown_menu.set( " " )
  
# Dropdown menu options for voting
Voting_options = [
    "1 to 1 voting",
    "Quadratic voting",

]


# Dropdown menu options for Membership Options
Membership_options = [
    "Tokens",
    "NFT",

]
  
# datatype of menu text
Voting_Dropdown_menu = StringVar()
Membership_Dropdown_menu = StringVar()
  
# initial menu text
Voting_Dropdown_menu.set( "1 to 1 voting" )
Membership_Dropdown_menu.set( "Tokens" )
 
# Create Dropdown menu
drop_vote = OptionMenu( root , Voting_Dropdown_menu , *Voting_options )
drop_vote.grid(row=2,column=3)

drop_Member = OptionMenu( root , Membership_Dropdown_menu , *Membership_options )
drop_Member.grid(row=3,column=3)
  
# Create button, it will change label text
button = tk.Label( root , text = "Voting Options"  ).grid(row=2,column=2)
button = tk.Label( root , text = "Membership Options"  ).grid(row=3,column=2)
button = Button( root , text = "Generate DAO" , command = Generate_DAO ).grid(row=4,column=2)
button = Button( root , text = "Clear selection" , command = Clear_Selection ).grid(row=4,column=3)

text_info = Text(root,)
text_info.grid(row=5,column=4)


# Create Label
label = Label( root , text = " " )



  
# Execute tkinter
root.mainloop()