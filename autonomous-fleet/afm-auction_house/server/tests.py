from django.test import TestCase
from rest_framework.test import APIClient
from django.contrib.auth import get_user_model
from rest_framework import status
from .testsToolInput import TestTool
from .enumValidation import ValidationStatus
from django.contrib.auth.models import User
import json
from urllib.parse import urlencode
# from django.contrib.auth import get_user_model


# TODO - move in a constants config
FAILED = "Test failed, response: "
KEY_LENGTH = 40


class SignUpTest(TestCase):
        def setUp(self):
                self.credentials={
                "username":"Valid",
                "password1":"testpass9876",
                "password2":"testpass9876",
                "email":"a@a.ro"
                }
                print("setUP")
                self.client=APIClient()
                self.tests=TestTool()
                # self.view=AccountDetail.as_view()



        def test_generate_signUp_credentials(self):
                # copy_credentials=self.credentials
                list_credentials_info=[
                        [[self.credentials['username'],"[A-Za-z]",4,150],"username"],
                        [[self.credentials['password1'],"[A-Za-z0-9@#$%^&*]",8,150],"password1"], #I choose arbitrarily a minimum and a maximum length
                        [[self.credentials['email'],"[A-Za-z0-9]+@[A-Za-z0-9]+\.[a-z]{2,3}",None,None],"email"]
                ]
                for inp in list_credentials_info:
                        copy_credentials=self.credentials
                        print(copy_credentials)
                        list_inputs_generate=self.tests.entityField(inp[0]+["create"])
                        for generate in list_inputs_generate:
                                if inp[-1]=="password1":
                                        copy_credentials["password2"]=generate[0]
                                pk=self.tests.match_str("[A-Za-z]{4,150}",ValidationStatus.Valid)[0]
                                copy_credentials["username"]=pk
                                print("message:")
                                copy_credentials[inp[-1]]=generate[0]
                                correct_credentials = str(copy_credentials).strip("'<>() ").replace('\'', '\"')
                                response = self.client.post('/createUser/',correct_credentials,content_type='application/json')
                                if generate[1] == ValidationStatus.Valid:

                                        # Asert
                                        self.assertEqual(response.status_code, status.HTTP_200_OK, FAILED + repr(response.content))
                                        self.assertTrue('key' in response.json(), FAILED + repr(response.content))
                                        self.assertTrue(len(response.json()['key']) == KEY_LENGTH, FAILED + repr(response.content))
                                else:


                                        # Asert
                                        self.assertEqual(response.status_code,status.HTTP_400_BAD_REQUEST, FAILED + repr(response.content))
                                        self.assertFalse('key' in response.json(), FAILED + repr(response.content))

# Test class for login function
class LoginTest(TestCase):

        # This function creates a user at begining of login tests
        #
        def setUp(self):
                """
                Creates a new user with valid credentials
                """

                self.credentials = {
                'username':     'testuser123',
                'password':     'testpass9876',
                'email':        'testuser123@gmail.com'
                }

                user_model = get_user_model()
                user = user_model.objects.create_user(self.credentials['username'], self.credentials['email'], self.credentials['password'])
                self.client = APIClient()
                self.tests=TestTool()


        # This function verify if login function works for good credentials"

        def test_login_valid_credentials_ok(self):
                # Act
                response = self.client.post('/rest-auth/login/', self.credentials)

                # Asert
                self.assertEqual(response.status_code, status.HTTP_200_OK, FAILED + repr(response.content))
                self.assertTrue('key' in response.json(), FAILED + repr(response.content))
                self.assertTrue(len(response.json()['key']) == KEY_LENGTH, FAILED + repr(response.content))

        # This function has a list with specification of fields.

        def test_generate_login_credentials(self):
                list_credentials_info=[
                        [[self.credentials['username'],"[a-z]",4,150],"username"],
                        [[self.credentials['password'],"[A-Za-z0-9@#$%^&*]",8,150],"password"] #I choose arbitrarily a minimum and a maximum length
                ]
                copy_credentials=self.credentials
                for inp in list_credentials_info:
                        list_inputs_generate=self.tests.entityField(inp[0]+["read"])
                        # iteration through the list of generated inputs
                        self.credentials=copy_credentials
                        for generate in list_inputs_generate:
                                self.credentials[inp[-1]]=generate[0]
                                if generate[1]==ValidationStatus.Valid:

                                        response = self.client.post('/rest-auth/login/', self.credentials)
                                        # Asert
                                        self.assertEqual(response.status_code, status.HTTP_200_OK, FAILED + repr(response.content))
                                        self.assertTrue('key' in response.json(), FAILED + repr(response.content))
                                        self.assertTrue(len(response.json()['key']) == KEY_LENGTH, FAILED + repr(response.content))
                                else:
                                        response = self.client.post('/rest-auth/login/', self.credentials)
                                        # Asert
                                        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST, FAILED + repr(response.content))
                                        self.assertFalse('key' in response.json(), FAILED + repr(response.content))
#Test Class for company

class CompanyTest(TestCase):
        
        def setUp(self):
                """
                Creates a new company with valid credentials
                """

                self.credentials = {
                'username':     'testuser123',
                'company_id':     '76',
                'company_name':        'testcompany',
                'vat_id':       'testid',
                'is_supplier':  '0',
                'is_client':    '1',
                'address':      'testaddress',
                'country_id':   '10',
                'contry':       'testcountry',
                'registration_number':  '192837'
                }

                self.client=APIClient()
                self.tests=TestTool()
        

        def test_company_valid_credentials_ok(self):
                # Act
                response = self.client.post('/rest-auth/company/', self.credentials)

                # Asert
                self.assertEqual(response.status_code, status.HTTP_200_OK, FAILED + repr(response.content))
                self.assertTrue('key' in response.json(), FAILED + repr(response.content))
                self.assertTrue(len(response.json()['key']) == KEY_LENGTH, FAILED + repr(response.content))

        def test_generate_company_credentials(self):
                list_credentials_info=[
                        [[self.credentials['user'],"[a-z]",4,150],"user"],
                        [[self.credentials['company_id'],"[0-9]",1,8],"company_id"],
                        [[self.credentials['company_name'],"[a-z]",4,250],"company_name"],
                        [[self.credentials['vat_id'],"[a-z]",4,150],"vat_id"],
                        [[self.credentials['is_supplier'],"[0-1]",1,1],"is_supplier"],
                        [[self.credentials['is_client'],"[0-1]",1,1],"is_client"],
                        [[self.credentials['address'],"[a-z0-9]",4,150],"address"],
                        [[self.credentials['country_id'],"[0-9]",1,8],"country_id"],
                        [[self.credentials['country'],"[a-z]",4,150],"country"],
                        [[self.credentials['registration_number'],"[0-9]",1,8],"registration_number"]
                ]
                copy_credentials=self.credentials
                for inp in list_credentials_info:
                        list_inputs_generate=self.tests.entityField(inp[0]+["read"])

                        self.credentials=copy_credentials
                        for generate in list_inputs_generate:
                                self.credentials[inp[-1]]=generate[0]
                                if generate[1]==ValidationStatus.Valid:

                                        response=self.client.post('/rest-auth/company/', self.credentials)
                                        self.assertEqual(response.status_code, status.HTTP_200_OK, FAILED + repr(response.content))
                                        self.assertTrue('key' in response.json(), FAILED + repr(response.content))
                                        self.assertTrue(len(response.json()['key']) == KEY_LENGTH, FAILED + repr(response.content))
                                else:
                                        response = self.client.post('/rest-auth/company/', self.credentials)
                                        # Asert
                                        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST, FAILED + repr(response.content))
                                        self.assertFalse('key' in response.json(), FAILED + repr(response.content))
