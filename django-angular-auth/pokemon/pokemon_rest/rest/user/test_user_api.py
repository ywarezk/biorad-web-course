from rest_framework.test import APITestCase
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
import json

class UserAPITest(APITestCase):
    def test_login_failed(self):
        resp = self.client.post('/api/v1.0/user/login/', {
            'username': 'lital',
            'password': '1q2w3e4r5t'
        })
        self.assertEqual(resp.status_code, 400)

    def test_login_success(self):
        user = User()
        user.username = 'erez'
        user.email = 'erez@biorad.com'
        user.set_password('1q2w3e4r5t')
        user.save()

        token = Token.objects.get(user=user)
        resp = self.client.post('/api/v1.0/user/login/', data={
            'username': 'erez',
            'password': '1q2w3e4r5t'
        });
        self.assertTrue('token' in json.loads(resp.content))
        self.assertEqual(json.loads(resp.content)['token'], token.key)




