import { StepItem } from "@/components/screen/doc/page";
import EmailImage from "../../../assets/configure/email.png";
import PhoneImage from "../../../assets/configure/phone.png";
import UserNameImage from "../../../assets/configure/username.png";
import RolePermissionImage from "../../../assets/configure/role-permission.png";
import MFAImage from "../../../assets/configure/mfa.png";
import PasswordImage from "../../../assets/configure/password.png";


export const ConfigureSteps: StepItem[] = [
  {
    number: 1,
    label: "Email Authentication",
    heading: "Configure sign-up and sign-in via email",
    description:
      "Toggle whether users can register and sign in using their email address. You can also require email verification at sign-up and choose between OTP codes and magic verification links.",
    route: { method: "GET", path: "/dashboard/configure" },
    image: EmailImage,
    checklist: [
      "Navigate to Configure in the sidebar",
      "Under the Email tab, toggle 'Sign-up with email' to allow email registration",
      "Enable 'Email verification at sign-up' (Recommended) to require OTP confirmation",
      "Toggle 'Sign-in with email' and choose sign-in methods: OTP code or verification link",
      "Click 'Save Changes' to apply — or 'Reset' to revert unsaved edits",
    ],
  },
  {
    number: 2,
    label: "Phone Authentication",
    heading: "Configure phone number sign-in",
    description:
      "Allow users to register and authenticate using their phone number via SMS OTP. Toggle phone sign-up and sign-in independently.",
    route: { method: "GET", path: "/dashboard/configure#phone" },
    image: PhoneImage,
    checklist: [
      "Click the Phone tab in the Configure page",
      "Toggle 'Sign-up with phone' to allow phone-based registration",
      "Toggle 'Sign-in with phone' to allow OTP-based phone login",
      "Save Changes to persist the configuration",
    ],
  },
  {
    number: 3,
    label: "Username Authentication",
    heading: "Enable username-based sign-in",
    description:
      "Allow users to sign in using a username instead of or in addition to email. Configure whether usernames are required at sign-up.",
    route: { method: "GET", path: "/dashboard/configure#username" },
    image: UserNameImage,
    checklist: [
      "Click the Username tab",
      "Toggle 'Sign-in with username' on",
      "Decide if username is required during sign-up",
      "Save Changes",
    ],
  },
  {
    number: 4,
    label: "Password Policy",
    heading: "Set password requirements",
    description:
      "Define minimum length, complexity requirements, and whether to enforce password resets. Strong policies protect your organization from credential attacks.",
    route: { method: "GET", path: "/dashboard/configure#password" },
    image: PasswordImage,
    checklist: [
      "Click the Password tab",
      "Set minimum password length and complexity rules",
      "Optionally require password resets at intervals",
      "Save Changes",
    ],
  },
  {
    number: 5,
    label: "MFA",
    heading: "Enable Multi-Factor Authentication",
    description:
      "Require users to complete a second verification step after password login. Supported factors include TOTP authenticator apps and SMS OTP.",
    route: { method: "GET", path: "/dashboard/configure#mfa" },
    image: MFAImage,
    checklist: [
      "Click the MFA tab",
      "Toggle MFA enforcement for users in your organization",
      "Choose supported factors: TOTP app, SMS OTP",
      "Optionally set MFA as mandatory or optional per user",
      "Save Changes",
    ],
  },
  {
    number: 6,
    label: "Role-Permissions",
    heading: "Map roles to permission sets",
    description:
      "Configure which permissions each role carries. Role-Permissions bindings control what actions members can perform within your application.",
    route: { method: "GET", path: "/dashboard/configure#role-permissions" },
    image: RolePermissionImage,
    checklist: [
      "Click the Role-Permissions tab",
      "Select a role from the list",
      "Toggle on or off individual permissions for that role",
      "Changes take effect for all members assigned to the role",
      "Save Changes",
    ],
  },
];