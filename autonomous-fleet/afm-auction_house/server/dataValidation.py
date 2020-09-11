import re
class Validation_Data():
    def __init__(self):
        self.type_accept_input={
            "str":self.stringInputValidation,
            "int":self.intInputValidation
        }
        
    # Input: credentials - a list with information about the input:
    #   -credential[0] - str, an input added manually used to decide its type and generate other inputs based on the type;
    #   -credential[1] - str, a regex expresion used to generate new value;
    #   -credential[2] - int, the minimum length of a generate value
    #   -credential[3] - int, the maximum length of a generate value

    def entityField(self,credentials):
        # <class 'type'>
        typeInput=str(type(credentials[0]))[8:-2]
        message=self.type_accept_input[typeInput](credentials[0],credentials[1],credentials[2], credentials[3])
        return message

    def stringInputValidation(self,input_var,accept_char,dim_min,dim_max):
        message_match=self.match_str(input_var,accept_char)
        if not message_match==None:
            return message_match
        message_dim=self.validation_dimension_str(input_var,dim_max,dim_min)
        if not message_dim==None:
            return message_dim


    def validation_dimension_str(self,input_var,dim_max,dim_min):
        if not (len(input_var)>=dim_min and len(input_var)<=dim_max):
            return "The input does not have good length. The size must be in the range ["+str(dim_min)+","+str(dim_max)+"]."
        return None

    def match_str(self,input_var,regex):
        if bool(re.match(regex,input_var))==False:
            return "The input does not match the pattern."
        return None

    def intInputValidation(self,input_var,dim_min,dim_max):
        self.validation_dimension_int(input_var,dim_min,dim_max)

    def validation_dimension_int(self,input_var,dim_max,dim_min):
        if not (input_var>=dim_min and input_var<=dim_max):
            return "The input must be in the range ["+str(dim_min)+","+str(dim_max)+"]."
        return None