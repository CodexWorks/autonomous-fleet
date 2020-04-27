from app.core.fireO.User import User

class UserFirestoreAccess:
    @classmethod
    def saveUser(self, User):
        User.save()
        return User.key

    @classmethod
    def getUserByKey(self, key):
        user = User.collection.get(key)
        return user

    @classmethod
    def getUserByEmail(self, email):
        users = User.collection.filter('email', '==', email).get()
        return users