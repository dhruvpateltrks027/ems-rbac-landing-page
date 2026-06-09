import { StepItem } from "@/components/screen/doc/page";

export const ServiceApiKeySteps: StepItem[] = [
  {
    number: 1,
    label: "What Is the Service API Key",
    heading: "Server-to-server authentication key",
    description:
      "The Service API Key is generated once when your EMS-RBAC account is created. Client projects (e.g. TRK-RBAC) use it to call EMS-RBAC server-to-server. Every client integration endpoint requires this key.",
    route: { method: "GET", path: "/dashboard/service-api-key" },
    checklist: [
      "Navigate to Service API Key in the sidebar",
      "The key is displayed masked (copy still works)",
      "Set it as AUTH_SERVICE_API_KEY in your project's .env file",
      "Send it in every client integration request as the X-Service-Api-Key header",
      "All /api/v1/client/... endpoints require this header",
    ],
  },
  {
    number: 2,
    label: "Rotate Key",
    heading: "Generate a new API key",
    description:
      "You can generate a new Service API Key at any time — for example, when rotating credentials or if a key is compromised. Previous keys remain valid until you remove them, giving you zero-downtime rotation.",
    route: { method: "POST", path: "/dashboard/service-api-key#generate" },
    checklist: [
      "Click 'Generate new API key'",
      "Copy the new key immediately and update AUTH_SERVICE_API_KEY in your environment",
      "Previous keys continue to work until explicitly revoked",
      "Deploy your updated environment before removing the old key",
      "Remove the old key once all services are using the new one",
    ],
  },
];