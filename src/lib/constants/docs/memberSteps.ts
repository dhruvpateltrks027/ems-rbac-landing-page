import { StepItem } from "@/components/screen/doc/page";
import GetMemberImage from "../../../assets/member/get-member.png";
import CreateMemberImage from "../../../assets/member/create-member.png";
import InviteMemberImage from "../../../assets/member/invite-member.png";

export const MemberSteps: StepItem[] = [
  {
    number: 1,
    label: "List Members",
    heading: "See every member in the organization",
    description:
      "The Members page shows all users belonging to the currently selected organization, their assigned roles, and membership status.",
    route: { method: "GET", path: "/dashboard/members" },
    image: GetMemberImage,
    checklist: [
      "Open Members from the sidebar",
      "Review the table: member name, role badge, status, and date joined",
      "Filter by role using the 'All Roles' dropdown",
      "Search by name, email, or role using the search bar",
      "Click ··· to copy user ID, view profile, change role, lock, ban, or remove",
    ],
  },
  {
    number: 2,
    label: "Create Member",
    heading: "Create a new member with full credentials",
    description:
      "Directly create a new user account and add them to the organization in one step. Unlike an invitation, the account is created immediately with the credentials you provide.",
    route: { method: "POST", path: "/api/members/create" },
    image: CreateMemberImage,
    checklist: [
      "Click '+ Create Member' in the top-right",
      "Fill in first name, last name, email, username, and phone number",
      "Set a password for the new member",
      "Select a role from the dropdown",
      "Click 'Create Member' — they are added as an active member",
    ],
  },
  {
    number: 3,
    label: "Invite Member",
    heading: "Send an organization invitation by email",
    description:
      "Invite an external person to join the organization. They receive an email with an invitation link. You control the role they will receive and how long the invitation remains valid.",
    route: { method: "POST", path: "/api/members/invite" },
    image: InviteMemberImage,
    checklist: [
      "Click 'Invite Member' in the top-right",
      "Enter the invitee's first name, last name, and email address",
      "Choose a role from the Role dropdown",
      "Set the Expiry Days for the invitation link (default 30)",
      "Click 'Send Invite' — the invitation email is sent immediately",
      "Track pending invitations from the member list (status: Pending)",
    ],
  },
];