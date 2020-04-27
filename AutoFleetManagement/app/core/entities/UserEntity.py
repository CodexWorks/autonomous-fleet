class UserEntity(object):
    def __init__(self, username, email):
        self.username = username
        self.email = email

    def to_dict(self):
        user = {
            'username': self.username,
            'email': self.email
        }
        return user

    def __repr__(self):
        return 'User(username={}, email={})'.format(self.username, self.email)

