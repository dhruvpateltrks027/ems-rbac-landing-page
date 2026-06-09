import { StepItem } from "@/components/screen/doc/page";
import CreateRoleImage from "../../../assets/role/create-role.png";
import GetRoleImage from "../../../assets/role/get-role.png";

export const RoleSteps: StepItem[] = [
  {
    number: 1,
    label: "List Roles",
    heading: "View all roles in your organization",
    description:
      "The Roles page lists every role defined for the currently selected organization. Each role shows its name, description, and the number of members assigned to it.",
    route: { method: "GET", path: "/dashboard/roles" },
    image: GetRoleImage,
    checklist: [
      "Open Roles from the sidebar",
      "Review all roles: name badge, description, and member count",
      "Default roles like Admin, Super Admin are pre-created",
      "Click the delete icon to remove a custom role (only if no members are assigned)",
    ],
  },
  {
    number: 2,
    label: "Create Role",
    heading: "Add a new role to the organization",
    description:
      "Define a custom role with a name and optional description. Once created, the role can be assigned to members during invitation or from the member management page.",
    route: {
      method: "POST",
      path: "/api/v1/client/organizations/{organizationId}/roles",
    },
    image: CreateRoleImage,
    checklist: [
      "Click '+ Add Role' in the top-right corner",
      "Enter a Role Name (e.g. Instructor, Auditor, External Student)",
      "Add an optional Description for clarity",
      "Click 'Create Role' — the role appears immediately in the list",
      "Assign this role when creating or inviting members",
    ],
  },
];