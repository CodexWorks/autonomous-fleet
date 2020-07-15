from django.test import TestCase
from rest_framework.test import APIClient
from django.contrib.auth import get_user_model

from http import HTTPStatus

# TODO - move in a constants config
FAILED = "Test failed, response: "
KEY_LENGTH = 40

class LoginTest(TestCase):

    def setUp(self):
        """
        Creates a new user with valid credentials
        """

        self.credentials = {
            'username':     'testuser11',
            'password':     'testpass1234',
            'email':        'testuser11@gmail.com'
        }

        user_model = get_user_model()
        user = user_model.objects.create_user(self.credentials['username'], self.credentials['email'], self.credentials['password'])
        self.client = APIClient()

    def test_login_valid_credentials_ok(self):
        # Act
        response = self.client.post('/rest-auth/login/', self.credentials)

        # Asert
        self.assertEqual(response.status_code, HTTPStatus.OK, FAILED + repr(response.content))
        self.assertTrue('key' in response.json(), FAILED + repr(response.content))
        self.assertTrue(len(response.json()['key']) == KEY_LENGTH, FAILED + repr(response.content))

    def test_login_invalid_password_fail(self):
        # Setup
        self.credentials['password'] = 'invalid'

        # Act
        response = self.client.post('/rest-auth/login/', self.credentials)

        # Asert
        self.assertEqual(response.status_code, HTTPStatus.BAD_REQUEST, FAILED + repr(response.content))
        self.assertFalse('key' in response.json(), FAILED + repr(response.content))

