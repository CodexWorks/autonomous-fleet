from flask import session

#class UserSession():
#    def __init__(self, session):
#        self.session = session

#    def clearSessionData(self):
#        self.session["logged_in"] = False
#        if self.session.get("uid"):
#            del self.session["uid"]
#        if self.session.get("secret"):
#            del self.session["secret"]
#        if self.session.get("access_token"):
#            del self.session["access_token"]
#        if self.session.get("user"):
#            del self.session["user"]
#        if self.session.get("user_id"):
#            del self.session["user_id"]
#        if self.session.get("gauth_id"):
#            del self.session["gauth_id"]
#        if self.session.get("auth_provider"):
#            del self.session["auth_provider"]