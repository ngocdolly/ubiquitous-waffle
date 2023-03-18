# Generated by Django 3.2 on 2021-08-31 00:22

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('snsApp', '0014_rename_userid_post_user'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Friend',
            new_name='Follower',
        ),
        migrations.RenameField(
            model_name='follower',
            old_name='friend',
            new_name='follower',
        ),
    ]
