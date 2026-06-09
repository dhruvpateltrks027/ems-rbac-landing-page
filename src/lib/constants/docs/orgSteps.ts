import { StepItem } from "@/components/screen/doc/page";
import OrgCreateImage from "../../../assets/org/add_org.png";
import OrgListImage from "../../../assets/org/image.png";

export const OrgSteps: StepItem[] = [
  {
    number: 1,
    label: "Create Organization",
    heading: "Add a new organization",
    description:
      "Go to the Organizations page and create a new tenant workspace for your team.",
    route: { method: "POST", path: "/dashboard/organizations" },
    image: OrgCreateImage,
    checklist: [
      "Open the Organizations page in the dashboard",
      "Click Add Organization",
      "Enter a name and optional slug for the organization",
      "Submit to create the organization and assign it a tenant ID",
    ],
  },
  {
    number: 2,
    label: "Get Organizations",
    heading: "View your organizations",
    description:
      "Retrieve and manage all organizations available in your workspace from a single dashboard.",
    route: { method: "GET", path: "/dashboard/organizations" },
    image: OrgListImage,
    checklist: [
      "View all available organizations",
      "Search and filter organizations",
      "Access organization details",
      "Manage members and permissions",
    ],
  },
];
