from django.contrib.auth.models import Group, Permission
import random
import string


def createNewGroup():
    group_name = ""
    while not group_name:
        group_name = input("What is the new group's name? ")
    group_name = group_name.title()
    new_group, created = Group.objects.get_or_create(name=group_name)
    if created:
        print(f"New group named {new_group} created successfully!")
    else:
        print(
            f"We couldn't create a group with name {group_name}. So, it seems {group_name} has already been declared as a group name.")
    return


def code_generator(size=16, chars=string.ascii_uppercase + string.ascii_lowercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))


def isAdmin(user):
    user_groups_queryset = user.groups.all()
    cur_user_groups = [group.name for group in list(user_groups_queryset)]
    if "Admin" in cur_user_groups:
        return True
    return False


def isSubscriber(user):
    user_groups_queryset = user.groups.all()
    cur_user_groups = [group.name for group in list(user_groups_queryset)]
    if "Subscriber" in cur_user_groups:
        return True
    return False
