from app.core.entities.UserEntity import UserEntity
from app.core.fireO.User import User
from app.data_access.user.UserFirestoreAccess import UserFirestoreAccess

class UserService(object):

    def createUser(username, email):
        try:
            user = UserEntity(username=username, email=email)
            userFO = User(user.username, user.email)
            userKey = UserFirestoreAccess.saveUser(userFO)
            user = UserFirestoreAccess.getUserByKey(userKey)
            if user:
                return user.key
            return None
        except Exception as exp:
            return None
