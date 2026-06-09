import { StepItem } from "@/components/screen/doc/page";

export const ApiSteps: StepItem[] = [
  {
    number: 1,
    label: "API Reference",
    heading: "Understand the integration API documentation",
    description:
      "The API reference explains how external projects can connect with EMS-RBAC for authentication, user management, organizations, roles, members, and invitations.",
    route: { method: "GET", path: "" },
    checklist: [
      "Review the available integration categories before implementation",
      "Use the docs to understand request requirements and expected responses",
      "Check the authentication requirement for each API group",
      "Use the reference while building frontend and backend integration flows",
      "Reload the API reference when backend contracts are updated",
    ],
  },
  {
    number: 2,
    label: "Auth Keys",
    heading: "Understand publishable, secret, and bearer keys",
    description:
      "EMS-RBAC uses a two-key integration model plus user JWT sessions. Public frontend calls use a publishable key, server-to-server calls use a secret service API key, and logged-in user operations use a bearer token.",
    route: { method: "GET", path: "" },
    checklist: [
      "Use the publishable key for browser-safe public authentication flows",
      "Use the secret service key only from your backend server",
      "Use a bearer token when the API action belongs to a logged-in user session",
      "Choose the correct key type before testing or integrating an API",
      "Never expose secret keys in frontend code or public repositories",
    ],
  },
  {
    number: 3,
    label: "Authentication APIs",
    heading: "Integrate sign-up, sign-in, OTP, sessions, and passwords",
    description:
      "Client auth endpoints let an external app create accounts, authenticate users, verify OTP codes, refresh sessions, sign out, and manage password flows through EMS-RBAC.",
    route: { method: "POST", path: "" },
    checklist: [
      "Create new user accounts from your external application",
      "Authenticate users and receive session data",
      "Verify OTP codes and resend verification codes when needed",
      "Refresh active sessions without forcing users to sign in again",
      "Support forgot-password and reset-password flows",
      "Fetch the current authenticated user profile",
      "List, revoke, and manage active user sessions",
    ],
  },
  {
    number: 4,
    label: "User APIs",
    heading: "Create, find, inspect, and update users",
    description:
      "User integration endpoints expose the user management features needed by external products, including listing users, creating users, finding by email, viewing profiles, and updating status.",
    route: { method: "GET", path: "" },
    checklist: [
      "List users available to the integration",
      "Create user accounts from your backend workflow",
      "Find users by email address when connecting existing records",
      "Inspect a user's profile and account state",
      "Update supported user status fields",
      "Use the service API key for backend-managed user actions",
    ],
  },
  {
    number: 5,
    label: "Organization APIs",
    heading: "Manage tenant organizations from your app",
    description:
      "Organization endpoints let your external product create and manage tenant workspaces while keeping each organization's users, roles, and members isolated.",
    route: { method: "GET", path: "" },
    checklist: [
      "List tenant organizations connected to your integration",
      "Create new tenant workspaces from your product",
      "Fetch organization details for dashboards and access checks",
      "Update organization metadata when supported",
      "Use destructive organization actions only for controlled purge workflows",
      "Use organization identifiers when working with roles, members, and invitations",
    ],
  },
  {
    number: 6,
    label: "Roles APIs",
    heading: "Read and manage organization roles",
    description:
      "Role endpoints expose organization-scoped RBAC roles so external systems can create, list, update, and delete roles for each tenant.",
    route: { method: "GET", path: "" },
    checklist: [
      "List roles for a selected organization",
      "Create custom roles for product-specific access levels",
      "Update role names or descriptions when needed",
      "Remove roles that are no longer assigned or required",
      "Assign role identifiers when creating members or invitations",
    ],
  },
  {
    number: 7,
    label: "Members APIs",
    heading: "Add, list, update, and remove organization members",
    description:
      "Member endpoints connect users to organizations. They are used to list current members, add a user to an organization, update role assignment, and remove access.",
    route: { method: "GET", path: "" },
    checklist: [
      "List members inside an organization",
      "Add an existing user to an organization when supported",
      "Update role assignment or membership data",
      "Remove members when access should be revoked",
      "Use member APIs when your app needs organization-level access control",
    ],
  },
  {
    number: 8,
    label: "Invitation APIs",
    heading: "Invite users and support invitation acceptance",
    description:
      "Invitation endpoints let your backend send organization invites and let your frontend validate and accept invitation tokens from email links.",
    route: { method: "POST", path: "" },
    checklist: [
      "Send invitation emails from your backend workflow",
      "Include invitee details, target role, and expiry settings",
      "Validate invitation tokens before showing an acceptance form",
      "Collect profile and password details during acceptance",
      "After acceptance, activate the user as a member of the target organization",
    ],
  },
];
