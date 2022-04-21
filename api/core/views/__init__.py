from . import profile_view, general_view, user_view

ProtectedCRUDViewSet = general_view.ProtectedCRUDViewSet

ProfileViewSet = profile_view.ProfileViewSet

ActivateUserViewSet = user_view.ActivateUserViewSet.as_view()
ResendActivationEmailViewSet = user_view.ResendActivationEmailViewSet.as_view()
SendForgotPasswordViewSet = user_view.SendForgotPasswordViewSet.as_view()
ResetPasswordViewSet = user_view.ResetPasswordViewSet.as_view()
UserDeleteViewSet = user_view.UserDeleteViewSet.as_view()
