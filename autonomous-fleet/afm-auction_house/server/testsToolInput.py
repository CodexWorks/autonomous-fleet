import re
import exrex
from .enumValidation import ValidationStatus


# Tasks:
# - Implement generation for int inputs
# - Support for email inputs

class TestTool():

    def __init__(self):
        self.type_accept_input={
            "str":self.stringInputTests,
            "int":self.intInputTests
        }

    # This function decide the type of an input. Base on the type, will be call a function that create a list of generate values for the input
    #
    # Input: credentials - a list with information about the input:
    #   -credential[0] - str, an input added manually used to decide its type and generate other inputs based on the type;
    #   -credential[1] - str, a regex expresion used to generate new value;
    #   -credential[2] - int, the minimum length of a generate value
    #   -credential[3] - int, the maximum length of a generate value
    #   -credential[4] - str, the type of action for which it is generated a value
    #
    # Output: a list with generate values and a validation status
    #

    def entityField(self,credentials):
        typeInput=str(type(credentials[0]))[8:-2]
        return self.type_accept_input[typeInput](credentials[1],credentials[2], credentials[3],credentials[4])


    # This function is call when must generate values for a string type input. The values are generate based on pattern and dimension.
    #
    # Input: - regex - str, describe a pattern
    #        - dim_min - int, the minimum length of a generate value
    #        - dim_max - int, the maximum length of a generate value
    #        - action_type - str, the type of action for which it is generated a value
    # Output: a list with generate values and a validation status

    def stringInputTests(self,regex,dim_min,dim_max,action_type):
        list_output=[]
        print("message")
        if action_type=="read":
            for _ in range(5):
                # for value generate only following a pattern
                list_output.append(self.match_str(regex+"{"+str(dim_min)+","+str(dim_max)+"}",ValidationStatus.Invalid))
            
        if action_type=="create":
            # for value generate following a pattern and a strict length
            for _ in range(5):
                # for value generate only following a pattern
                list_output.append(self.match_str(regex+"{"+str(dim_min)+","+str(dim_max)+"}",ValidationStatus.Valid))
            if not (dim_max==None or dim_min==None):
                list_output=list_output+self.validation_dimension_str(regex,dim_max,dim_min)
        print(len(list_output))
        return list_output


    # This function is call for generate values following a pattern and a strict length
    #
    # Input: - regex - str, describe a pattern
    #        - dim_min - int, the minimum length of a generate value
    #        - dim_max - int, the maximum length of a generate value
    #
    # Output: a list with generate values with strict length and a validation status
    #

    def validation_dimension_str(self,regex,dim_max,dim_min):
        verification_case=[]
        if 0<dim_min or 0>dim_max:
           verification_case.append([0,ValidationStatus.Invalid])
        else:
            verification_case.append([0,ValidationStatus.Valid])

        # list with dimension and validation status
        verification_case=[
            [dim_min-1,ValidationStatus.Invalid],
            [dim_min,ValidationStatus.Valid],
            [dim_max,ValidationStatus.Valid],
            [dim_max+1,ValidationStatus.Invalid],
            [(dim_min+dim_max)/2,ValidationStatus.Valid]
            ]

        list_verif_dim=[]
        for case in verification_case:
            list_verif_dim.append(self.match_str(regex+"{"+str(int(case[0]))+"}",case[1]))
        return list_verif_dim

    # This function is call for generate values following a pattern
    #
    # Input: - regex - str, describe a pattern
    #        - validation_status - ValidationStatus, enum, decide if a generate value is valid or invalid
    #
    # Output: list with the generate value and the status\
    #
    def match_str(self,regex,validation_status):
    
        return [exrex.getone(regex),validation_status]



    def intInputTests(self,dim_min,dim_max):
        pass
