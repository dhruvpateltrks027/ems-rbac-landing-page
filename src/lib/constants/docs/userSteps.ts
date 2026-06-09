import { StepItem } from "@/components/screen/doc/page";
import AddUserImage from "../../../assets/user/add-user.png";
import GetUserImage from "../../../assets/user/get-user.png";
import InviteUserImage from "../../../assets/user/invite-user.png";
import ViewUserDetailsImage from "../../../assets/user/view-user-details.png";

export const UserSteps: StepItem[] = [
  {
    number: 1,
    label: "List Users",
    heading: "View all users in your tenant",
    description:
      "The Users Management page lists every user registered under your admin account. You can search by name or email and see each user's status at a glance.",
    route: { method: "GET", path: "/dashboard/users" },
    image: GetUserImage,
    checklist: [
      "Navigate to Users in the sidebar",
      "Browse the table showing name, status, email, and join date",
      "Use the search bar to filter by name or email",
      "Click the ··· actions menu on any row to manage that user",
    ],
  },
  {
    number: 2,
    label: "Create User",
    heading: "Add a new user account directly",
    description:
      "Create a fully provisioned user account without going through an invitation flow. Fill in credentials, assign an organization, and optionally set a role — the account is active immediately.",
    route: { method: "POST", path: "/api/users/create" },
    image: AddUserImage,
    checklist: [
      "Click the '+ Create User' button in the top-right",
      "Enter first name, last name, email, phone number, and username",
      "Set a password for the new account",
      "Select an organization from the dropdown",
      "Optionally assign a role, then click 'Create User'",
    ],
  },
  {
    number: 3,
    label: "Invite User",
    heading: "Send an invitation to an external user",
    description:
      "Invite a user by email. They receive a link to accept the invitation, join the specified organization, and activate their account — without you needing to set a password for them.",
    route: { method: "POST", path: "/api/users/invite" },
    image: InviteUserImage,
    checklist: [
      "Click 'Invite User' in the top-right",
      "Enter the invitee's first name, last name, and email",
      "Choose the target organization and assign a role",
      "Set invitation expiry days (default 30)",
      "Click 'Send Invite' — an email is dispatched instantly",
    ],
  },
  {
    number: 4,
    label: "View User Details",
    heading: "Inspect and edit a user's full profile",
    description:
      "Drill into any user to see their personal information, email addresses, password status, and organization memberships. You can update profile fields and save changes directly from this page.",
    route: { method: "GET", path: "/dashboard/users/:id" },
    image: ViewUserDetailsImage,
    checklist: [
      "Click the ··· menu on a user row and select 'View profile'",
      "Edit first name, last name, or phone number in the Profile tab",
      "Click 'Save changes' to persist updates",
      "Switch to the Organizations tab to see all memberships",
      "Use the Actions button in the top-right to lock, ban, or delete the user",
    ],
  },
];