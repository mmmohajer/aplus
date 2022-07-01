from . import profile_view, general_view, user_view

ProtectedCRUDViewSet = general_view.ProtectedCRUDViewSet

ProfileViewSet = profile_view.ProfileViewSet

AddUserToGroup = user_view.AddUserToGroup.as_view()
ActivateUserViewSet = user_view.ActivateUserViewSet.as_view()
ResendActivationEmailViewSet = user_view.ResendActivationEmailViewSet.as_view()
SendForgotPasswordViewSet = user_view.SendForgotPasswordViewSet.as_view()
ResetPasswordViewSet = user_view.ResetPasswordViewSet.as_view()
UserDeleteViewSet = user_view.UserDeleteViewSet.as_view()
AuthenticateUserViewSet = user_view.AuthenticateUserViewSet.as_view()
GoogleAuthViewSet = user_view.GoogleAuthViewSet.as_view()
GoogleAuthHandleTokenViewSet = user_view.GoogleAuthHandleTokenViewSet.as_view()
MicrosoftAuthViewSet = user_view.MicrosoftAuthViewSet.as_view()
MicrosoftAuthHandleTokenViewSet = user_view.MicrosoftAuthHandleTokenViewSet.as_view()
FacebookAuthViewSet = user_view.FacebookAuthViewSet.as_view()
FacebookAuthHandleTokenViewSet = user_view.FacebookAuthHandleTokenViewSet.as_view()
