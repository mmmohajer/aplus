from rest_framework import permissions


class IsAdminOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        if request.user:
            user_groups_queryset = request.user.groups.all()
            cur_user_groups = [group.name for group in list(user_groups_queryset)]
            if "Admin" in cur_user_groups:
                return True
        return False


class FullDjangoModelPermissions(permissions.DjangoModelPermissions):
    def __init__(self):
        self.perms_map["GET"] = ['%(app_label)s.view_%(model_name)s']
