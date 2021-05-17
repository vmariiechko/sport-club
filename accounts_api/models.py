from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


class MemberAccountManager(BaseUserManager):

    def crete_user(self, email, first_name, last_name, phone, password, **other_fields):

        if not email:
            raise ValueError("The email address must be provided")

        email = self.normalize_email(email)
        user = self.model(email=email, first_name=first_name,
                          last_name=last_name, phone=phone, **other_fields)
        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, email, first_name, last_name, phone, password, **other_fields):

        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError("The is_staff field must be True for the superuser")
        if other_fields.get('is_superuser') is not True:
            raise ValueError("The is_superuser field must be True for the superuser")

        return self.crete_user(email, first_name, last_name, phone, password, **other_fields)


class Member(AbstractBaseUser, PermissionsMixin):

    email = models.EmailField(verbose_name='email address', unique=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    phone = models.CharField(max_length=50)
    registration_date = models.DateTimeField(default=timezone.now)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    objects = MemberAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'phone']

    def __str__(self):
        return self.email
