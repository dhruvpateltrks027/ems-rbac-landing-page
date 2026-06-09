import { StepItem } from "@/components/screen/doc/page";

export const WebhookSteps: StepItem[] = [
  {
    number: 1,
    label: "Set Webhook URL",
    heading: "Enter your backend webhook endpoint",
    description:
      "Provide the URL of your project's endpoint where EMS-RBAC will POST event payloads. Events like user creation, membership changes, and organization updates are delivered here in real time.",
    route: { method: "POST", path: "/dashboard/webhook" },
    checklist: [
      "Navigate to Webhook in the sidebar",
      "Enter your backend URL in the Webhook URL field (e.g. https://api.yourproject.com/api/webhooks)",
      "Enter your Frontend URL — used for invitation email links",
      "Your frontend must implement the /invitations/accept route to handle user invitations and password setup",
      "Click 'Save configuration' to activate",
    ],
  },
  {
    number: 2,
    label: "Generate Secret",
    heading: "Create a webhook signing secret",
    description:
      "Generate a secret that EMS-RBAC will use to sign every webhook payload. Verify the HMAC-SHA256 signature on your server before processing any event.",
    route: { method: "POST", path: "/dashboard/webhook#secret" },
    checklist: [
      "Click 'Generate webhook secret'",
      "Copy the value immediately — it is shown only once",
      "Store it as WEBHOOK_SECRET in your environment variables",
      "On each incoming webhook, verify the webhook-signature header against the secret",
    ],
  },
  {
    number: 3,
    label: "Events Delivered",
    heading: "Understand the event types you'll receive",
    description:
      "EMS-RBAC fires webhooks for all major lifecycle events. Each payload includes webhook-id, webhook-timestamp, and a HMAC-SHA256 webhook-signature for verification.",
    route: { method: "POST", path: "your-webhook-url" },
    checklist: [
      "user.created — fired when a new user registers or is created",
      "user.updated — fired when a user's profile is changed",
      "user.deleted — fired when a user account is removed",
      "organizationMembership.created — user joins an organization",
      "organizationMembership.updated — member role is changed",
      "organizationMembership.deleted — member is removed from an org",
      "organization.created / organization.updated / organization.deleted",
    ],
  },
  {
    number: 4,
    label: "Handle Invitations",
    heading: "Implement the invitation acceptance flow",
    description:
      "When you invite a user, they receive an email link pointing to your frontend. Your /invitations/accept page must extract the token, validate it, and submit the acceptance form.",
    route: { method: "POST", path: "/api/v1/client/invitations/accept" },
    checklist: [
      "User receives email: {frontendUrl}/invitations/accept?token=...",
      "Your page extracts the token query parameter",
      "Send GET /api/v1/client/invitations/validate?token={token} to fetch invite details",
      "Display a set-password form to the user",
      "POST /api/v1/client/invitations/accept with body: { token, firstName, lastName, password }",
      "User is now an active member of the organization",
    ],
  },
];