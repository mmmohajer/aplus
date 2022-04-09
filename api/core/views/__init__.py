from . import profile_view, general_view, user_view

ProtectedCRUDViewSet = general_view.ProtectedCRUDViewSet

ProfileViewSet = profile_view.ProfileViewSet

ActivateUserViewSet = user_view.ActivateUserViewSet.as_view()
ResendActivationEmailViewSet = user_view.ResendActivationEmailViewSet.as_view()
