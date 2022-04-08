from . import profile_view, general_view, test_mail_view

ProtectedCRUDViewSet = general_view.ProtectedCRUDViewSet

ProfileViewSet = profile_view.ProfileViewSet

SayHello = test_mail_view.SayHello.as_view()
