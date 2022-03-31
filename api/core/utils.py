from django.contrib.auth.models import Group, Permission


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
