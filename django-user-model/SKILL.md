---
name: django-user-model
description: Build a secure custom Django user model with UUID identity, mobile login and optional Iranian identity verification and family profiles.
---

# Custom Django user model

## Architecture
Create accounts and configure AUTH_USER_MODEL = 'accounts.User' before the first migration. Use AbstractBaseUser, PermissionsMixin and BaseUserManager for custom identity, or AbstractUser if sufficient. For existing databases, never swap user model without a migration plan and backup. Reference users with settings.AUTH_USER_MODEL and get_user_model().

Use UUIDField(primary_key=True, default=uuid.uuid4, editable=False). Keep national_id optional unless required, canonical ASCII digits, unique when present; never expose it publicly. For mobile-first apps use a unique verified canonical mobile identity. For family apps distinguish verified login identity from shared caregiver contact numbers; use a separate unique verified LoginIdentity linked to exactly one active principal. Managed profiles and caregiver relations are separate domain objects. Never choose the oldest account when identity is ambiguous: reject and offer authorized recovery.

## Fields and manager
Select only necessary fields: UUID, first_name, last_name, verified mobile, optional birth date, optional national ID, is_active, is_staff, date_joined, updated_at, optional avatar. Separate business roles from is_staff (admin access). Do not fabricate dates of birth; derive age using local date. Track verification timestamps and invalidate on identity change. Referral and family fields are optional domain features. Manager normalizes identifiers, validates fields, sets password or unusable password, saves using self._db and enforces superuser/staff flags. Use database constraints and atomic updates. Never expose password hashes, raw OTP, national ID or private contact in logs/serializers.

## Integration
Use django-otp-auth and django-accounts where available. Optional Shahkar requires explicit consent and a provider adapter; SMS possession is not national identity verification. English code/comments/gettext IDs; Persian in locale resources. Mock all paid services.

## Tests
Test UUID, constraints, normalization, missing fields, unusable passwords, superuser flags, inactive users, protected fields, verified identity changes, shared caregiver contacts, ambiguous identity rejection, family permissions and concurrent creation. Keep tests in accounts/tests/. Use synthetic data. No private source copied.
