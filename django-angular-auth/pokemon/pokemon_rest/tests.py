from django.test import TestCase
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

class TestSignals(TestCase):
    def test_create_token(self):
        """
        tests that a token is created when we create a user
        :return:
        """
        self.assertEqual(Token.objects.count(), 0)

        user = User()
        user.username = 'lital'
        user.email = 'lital@biorad.com'
        user.set_password('1q2w3e4r5t')
        user.save()

        self.assertEqual(Token.objects.count(), 1)
