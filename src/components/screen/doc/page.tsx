// import React from "react";
// import LoginImage from "../../../assets/images/login.png";
// import SignupImage from "../../../assets/images/signup.png";
// import VerifyImage from "../../../assets/images/verification.png";
// import OrgCreateImage from "../../../assets/org/add_org.png";
// import OrgListImage from "../../../assets/org/image.png";
// import AddUserImage from "../../../assets/user/add-user.png";
// import GetUserImage from "../../../assets/user/get-user.png";
// import InviteUserImage from "../../../assets/user/invite-user.png";
// import ViewUserDetailsImage from "../../../assets/user/view-user-details.png";
// import GetMemberImage from "../../../assets/member/get-member.png";
// import CreateMemberImage from "../../../assets/member/create-member.png";
// import InviteMemberImage from "../../../assets/member/invite-member.png";

// const steps = [
//   {
//     number: 1,
//     label: "Create Account",
//     heading: "Sign up for an account",
//     description:
//       "Open the signup page and fill in your details. This creates the first admin user for your RBAC organization.",
//     route: { method: "POST", path: "/auth/sign-up" },
//     checklist: [
//       "Enter first name, last name, and email address",
//       "Choose a strong password for your account",
//       'Click "Create account" — a verification email is sent instantly',
//       "This account becomes the root admin for your organization",
//     ],
//     image: SignupImage,
//     imageAlt: "Sign up page preview",
//     reverse: false,
//   },
//    {
//     number: 2,
//     label: "Sign In",
//     heading: "Sign in to your dashboard",
//     description:
//       "Once verified, head to the sign-in page. Enter your credentials and you'll be redirected to the RBAC admin dashboard.",
//     route: { method: "POST", path: "/auth/sign-in" },
//     checklist: [
//       "Navigate to /auth/sign-in",
//       "Enter the verified email address and password",
//       'Click "Continue" to authenticate',
//       "Tokens are saved to localStorage automatically",
//       "You'll be redirected to the admin dashboard",
//     ],
//     image: LoginImage,
//     imageAlt: "Sign in page preview",
//     reverse: false,
//   },
//   {
//     number: 3,
//     label: "Verify Email",
//     heading: "Confirm your email address",
//     description:
//       "Check your inbox for a 6-digit OTP code. Enter it on the verification screen to activate your account before signing in.",
//     route: { method: "POST", path: "/auth/verify-email" },
//     checklist: [
//       "Check your inbox for an email from Trks RBAC",
//       "Enter the 6-digit OTP code from the email",
//       'Click "Verify" — the account becomes active',
//       "Use 'Resend code' if the email doesn't arrive within 2 minutes",
//     ],
//     image: VerifyImage,
//     imageAlt: "Email verification page preview",
//     reverse: true,
//   },

// ];

// const orgSteps = [
//   {
//     number: 1,
//     label: "Create organization",
//     heading: "Add a new organization",
//     description:
//       "Go to the Organizations page and create a new tenant workspace for your team.",
//     route: { method: "POST", path: "/dashboard/organizations" },
//     checklist: [
//       "Open the Organizations page in the dashboard",
//       "Click Add Organization",
//       "Enter a name and optional slug for the organization",
//       "Submit to create the organization and assign it a tenant ID",
//     ],
//     image: OrgCreateImage,
//     imageAlt: "Create organization page preview",
//     reverse: false,
//   },
//   {
//     number: 2,
//     label: "Manage members",
//     heading: "Assign users and roles",
//     description:
//       "Invite or assign users to the organization, then set their membership role.",
//     route: { method: "POST", path: "/dashboard/members" },
//     checklist: [
//       "Choose an existing user or invite a new member",
//       "Assign them to the correct organization",
//       "Select the proper role for their access",
//       "Track pending invitations and resend when needed",
//     ],
//     image: OrgListImage,
//     imageAlt: "Organization members preview",
//     reverse: true,
//   },
// ];

// const userSteps = [
//   {
//     number: 1,
//     label: "List Users",
//     heading: "View all users in your tenant",
//     description:
//       "The Users Management page lists every user registered under your admin account. You can search by name or email and see each user's status at a glance.",
//     route: { method: "GET", path: "/dashboard/users" },
//     checklist: [
//       "Navigate to Users in the sidebar",
//       "Browse the table showing name, status, email, and join date",
//       "Use the search bar to filter by name or email",
//       "Click the ··· actions menu on any row to manage that user",
//     ],
//     image: GetUserImage,
//     imageAlt: "Users Management list page",
//   },
//   {
//     number: 2,
//     label: "Create User",
//     heading: "Add a new user account directly",
//     description:
//       "Create a fully provisioned user account without going through an invitation flow. Fill in credentials, assign an organization, and optionally set a role — the account is active immediately.",
//     route: { method: "POST", path: "/api/users/create" },
//     checklist: [
//       "Click the '+ Create User' button in the top-right",
//       "Enter first name, last name, email, phone number, and username",
//       "Set a password for the new account",
//       "Select an organization from the dropdown",
//       "Optionally assign a role, then click 'Create User'",
//     ],
//     image: AddUserImage,
//     imageAlt: "Create User modal",
//   },
//   {
//     number: 3,
//     label: "Invite User",
//     heading: "Send an invitation to an external user",
//     description:
//       "Invite a user by email. They receive a link to accept the invitation, join the specified organization, and activate their account — without you needing to set a password for them.",
//     route: { method: "POST", path: "/api/users/invite" },
//     checklist: [
//       "Click 'Invite User' in the top-right",
//       "Enter the invitee's first name, last name, and email",
//       "Choose the target organization and assign a role",
//       "Set invitation expiry days (default 30)",
//       "Click 'Send Invite' — an email is dispatched instantly",
//     ],
//     image: InviteUserImage,
//     imageAlt: "Invite User modal",
//   },
//   {
//     number: 4,
//     label: "View User Details",
//     heading: "Inspect and edit a user's full profile",
//     description:
//       "Drill into any user to see their personal information, email addresses, password status, and organization memberships. You can update profile fields and save changes directly from this page.",
//     route: { method: "GET", path: "/dashboard/users/:id" },
//     checklist: [
//       "Click the ··· menu on a user row and select 'View profile'",
//       "Edit first name, last name, or phone number in the Profile tab",
//       "Click 'Save changes' to persist updates",
//       "Switch to the Organizations tab to see all memberships",
//       "Use the Actions button in the top-right to lock, ban, or delete the user",
//     ],
//     image: ViewUserDetailsImage,
//     imageAlt: "User detail profile page",
//   },
// ];

// const memberSteps = [
//   {
//     number: 1,
//     label: "List Members",
//     heading: "See every member in the organization",
//     description:
//       "The Members page shows all users belonging to the currently selected organization, their assigned roles, and membership status. Use the actions menu to manage each member individually.",
//     route: { method: "GET", path: "/dashboard/members" },
//     checklist: [
//       "Open Members from the sidebar",
//       "Review the table: member name, role badge, status, and date joined",
//       "Filter by role using the 'All Roles' dropdown",
//       "Search by name, email, or role using the search bar",
//       "Click ··· to copy user ID, view profile, change role, lock, ban, or remove",
//     ],
//     image: GetMemberImage,
//     imageAlt: "Members list page with actions menu",
//   },
//   {
//     number: 2,
//     label: "Create Member",
//     heading: "Create a new member with full credentials",
//     description:
//       "Directly create a new user account and add them to the organization in one step. Unlike an invitation, the account is created immediately with the credentials you provide.",
//     route: { method: "POST", path: "/api/members/create" },
//     checklist: [
//       "Click '+ Create Member' in the top-right",
//       "Fill in first name, last name, email, username, and phone number",
//       "Set a password for the new member",
//       "Select a role from the dropdown",
//       "Click 'Create Member' — they are added as an active member",
//     ],
//     image: CreateMemberImage,
//     imageAlt: "Create Member modal",
//   },
//   {
//     number: 3,
//     label: "Invite Member",
//     heading: "Send an organization invitation by email",
//     description:
//       "Invite an external person to join the organization. They receive an email with an invitation link. You control the role they will receive and how long the invitation remains valid.",
//     route: { method: "POST", path: "/api/members/invite" },
//     checklist: [
//       "Click 'Invite Member' in the top-right",
//       "Enter the invitee's first name, last name, and email address",
//       "Choose a role from the Role dropdown",
//       "Set the Expiry Days for the invitation link (default 30)",
//       "Click 'Send Invite' — the invitation email is sent immediately",
//       "Track pending invitations from the member list (status: Pending)",
//     ],
//     image: InviteMemberImage,
//     imageAlt: "Invite Member modal",
//   },
// ];

// const routes = [
//   { method: "POST", path: "/auth/sign-up" },
//   { method: "POST", path: "/auth/verify-email" },
//   { method: "GET", path: "/auth/sign-in" },
//   { method: "POST", path: "/auth/sign-in" },
// ];

// const methodColors: Record<string, string> = {
//   GET: "bg-blue-500/15 text-blue-400 border border-blue-500/30",
//   POST: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
//   PUT: "bg-amber-500/15 text-amber-400 border border-amber-500/30",
//   DELETE: "bg-red-500/15 text-red-400 border border-red-500/30",
// };

// export default function AuthStepsSection() {
//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-950">
//       <div className="mx-auto max-w-6xl px-4 py-20">
//         {/* ── Page Header ── */}
//         <div className="mb-14">
//           <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-500 shadow-sm">
//             <span className="h-2 w-2 rounded-full bg-emerald-500" />
//             Authentication Flow
//           </div>

//           <h1 className="text-4xl font-semibold leading-tight text-slate-950">
//             Get started in 3 simple steps
//           </h1>
//           <p className="mt-3 max-w-xl text-base leading-7 text-slate-500">
//             Follow these steps to create your RBAC account, verify your email,
//             and access the dashboard.
//           </p>
//         </div>

//         <hr className="mb-14 border-slate-200" />

//         {/* ── Steps ── */}
//         <div className="space-y-24">
//           {steps.map((step) => (
//             <div
//               key={step.number}
//               className="grid items-center gap-12 lg:grid-cols-[65%_35%]"
//             >

//               <div>
//                 {/* Step badge */}
//                 <div className="mb-5 flex items-center gap-3">
//                   <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
//                     {step.number}
//                   </span>

//                   <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//                     {step.label}
//                   </span>
//                 </div>

//                 {/* Heading */}
//                 <h2 className="text-2xl font-semibold text-slate-950">
//                   {step.heading}
//                 </h2>

//                 {/* Description */}
//                 <p className="mt-3 text-sm leading-7 text-slate-500">
//                   {step.description}
//                 </p>

//                 {/* Route */}
//                 <div className="mt-5 rounded-2xl border border-slate-800 bg-[#020817] p-4 shadow-xl">
//                   <div className="mb-3 flex items-center justify-between">
//                     <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
//                       Endpoint
//                     </span>

//                     <div className="h-2 w-2 rounded-full bg-emerald-400" />
//                   </div>

//                   <div className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-3">
//                     <span
//                       className={`rounded-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
//                         methodColors[step.route.method]
//                       }`}
//                     >
//                       {step.route.method}
//                     </span>

//                     <code className="truncate text-sm text-slate-300">
//                       {step.route.path}
//                     </code>
//                   </div>
//                 </div>

//                 {/* Checklist */}
//                 <ul className="mt-6 space-y-3">
//                   {step.checklist.map((item, i) => (
//                     <li
//                       key={i}
//                       className="flex items-start gap-3 text-sm text-slate-600"
//                     >
//                       <svg
//                         className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         strokeWidth={2.5}
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M4.5 12.75l6 6 9-13.5"
//                         />
//                       </svg>

//                       <span>{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Image side - Always 40% */}
//               <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
//                 <img
//                   src={step.image.src}
//                   alt={step.imageAlt}
//                   className="h-full w-full object-cover"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mx-auto max-w-6xl px-4 py-20">
//           <div className="mb-14">
//             <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-500 shadow-sm">
//               <span className="h-2 w-2 rounded-full bg-sky-500" />
//               Organization Docs
//             </div>

//             <h1 className="text-4xl font-semibold leading-tight text-slate-950">
//               Understand organization setup and user assignment.
//             </h1>
//             <p className="mt-3 max-w-xl text-base leading-7 text-slate-500">
//               Learn how to create tenants, invite members, and keep org access clear.
//             </p>
//           </div>

//           <hr className="mb-14 border-slate-200" />

//           <div className="space-y-24">
//             {orgSteps.map((step) => (
//               <div
//                 key={step.number}
//                 className="grid items-center gap-12 "
//               >
//                 <div>
//                   <div className="mb-5 flex items-center gap-3">
//                     <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
//                       {step.number}
//                     </span>
//                     <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//                       {step.label}
//                     </span>
//                   </div>

//                   <h2 className="text-2xl font-semibold text-slate-950">
//                     {step.heading}
//                   </h2>
//                   <p className="mt-3 text-sm leading-7 text-slate-500">
//                     {step.description}
//                   </p>

//                   <div className="mt-5 rounded-2xl border border-slate-800 bg-[#020817] p-4 shadow-xl">
//                     <div className="mb-3 flex items-center justify-between">
//                       <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
//                         Endpoint
//                       </span>
//                       <div className="h-2 w-2 rounded-full bg-sky-400" />
//                     </div>
//                     <div className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-3">
//                       <span
//                         className={`rounded-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
//                           methodColors[step.route.method]
//                         }`}
//                       >
//                         {step.route.method}
//                       </span>
//                       <code className="truncate text-sm text-slate-300">
//                         {step.route.path}
//                       </code>
//                     </div>
//                   </div>

//                   <ul className="mt-6 space-y-3">
//                     {step.checklist.map((item, i) => (
//                       <li
//                         key={i}
//                         className="flex items-start gap-3 text-sm text-slate-600"
//                       >
//                         <svg
//                           className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                           strokeWidth={2.5}
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M4.5 12.75l6 6 9-13.5"
//                           />
//                         </svg>
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
//                   <img
//                     src={step.image.src}
//                     alt={step.imageAlt}
//                     className="h-full w-full object-cover"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//           <div className="mx-auto max-w-6xl px-4 py-20">
//         <div className="mb-14">
//           <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-500 shadow-sm">
//             <span className="h-2 w-2 rounded-full bg-sky-500" />
//             Users Management
//           </div>
//           <h1 className="text-4xl font-semibold leading-tight text-slate-950">
//             Manage users across your platform.
//           </h1>
//           <p className="mt-3 max-w-xl text-base leading-7 text-slate-500">
//             Create, invite, and inspect individual user accounts from the Users dashboard.
//           </p>
//         </div>

//         <hr className="mb-14 border-slate-200" />

//         <div className="space-y-12">
//           {userSteps.map((step) => (
//             <div
//               key={step.number}
//               className="grid items-center gap-12"
//             >
//               <div>
//                 <div className="mb-5 flex items-center gap-3">
//                   <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
//                     {step.number}
//                   </span>
//                   <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//                     {step.label}
//                   </span>
//                 </div>

//                 <h2 className="text-2xl font-semibold text-slate-950">{step.heading}</h2>
//                 <p className="mt-3 text-sm leading-7 text-slate-500">{step.description}</p>

//                 <div className="mt-5 rounded-2xl border border-slate-800 bg-[#020817] p-4 shadow-xl">
//                   <div className="mb-3 flex items-center justify-between">
//                     <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
//                       Endpoint
//                     </span>
//                     <div className="h-2 w-2 rounded-full bg-sky-400" />
//                   </div>
//                   <div className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-3">
//                     <span
//                       className={`rounded-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
//                         methodColors[step.route.method]
//                       }`}
//                     >
//                       {step.route.method}
//                     </span>
//                     <code className="truncate text-sm text-slate-300">{step.route.path}</code>
//                   </div>
//                 </div>

//                 <ul className="mt-6 space-y-3">
//                   {step.checklist.map((item, i) => (
//                     <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
//                       <svg
//                         className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         strokeWidth={2.5}
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
//                       </svg>
//                       <span>{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
//                 <img
//                   src={step.image.src}
//                   alt={step.imageAlt}
//                   className="h-full w-full object-cover"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="mx-auto max-w-6xl px-4">
//         <hr className="border-slate-200" />
//       </div>

//       <div className="mx-auto max-w-6xl px-4 py-20">
//         <div className="mb-14">
//           <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-500 shadow-sm">
//             <span className="h-2 w-2 rounded-full bg-violet-500" />
//             Members Management
//           </div>
//           <h1 className="text-4xl font-semibold leading-tight text-slate-950">
//             Manage organization members and roles.
//           </h1>
//           <p className="mt-3 max-w-xl text-base leading-7 text-slate-500">
//             Add members directly or invite them by email, assign roles, and control access within each organization.
//           </p>
//         </div>

//         <hr className="mb-14 border-slate-200" />

//         <div className="space-y-24">
//           {memberSteps.map((step) => (
//             <div
//               key={step.number}
//               className="grid items-center gap-12 "
//             >
//               <div>
//                 <div className="mb-5 flex items-center gap-3">
//                   <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
//                     {step.number}
//                   </span>
//                   <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//                     {step.label}
//                   </span>
//                 </div>

//                 <h2 className="text-2xl font-semibold text-slate-950">{step.heading}</h2>
//                 <p className="mt-3 text-sm leading-7 text-slate-500">{step.description}</p>

//                 <div className="mt-5 rounded-2xl border border-slate-800 bg-[#020817] p-4 shadow-xl">
//                   <div className="mb-3 flex items-center justify-between">
//                     <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
//                       Endpoint
//                     </span>
//                     <div className="h-2 w-2 rounded-full bg-violet-400" />
//                   </div>
//                   <div className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-3">
//                     <span
//                       className={`rounded-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
//                         methodColors[step.route.method]
//                       }`}
//                     >
//                       {step.route.method}
//                     </span>
//                     <code className="truncate text-sm text-slate-300">{step.route.path}</code>
//                   </div>
//                 </div>

//                 <ul className="mt-6 space-y-3">
//                   {step.checklist.map((item, i) => (
//                     <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
//                       <svg
//                         className="mt-0.5 h-4 w-4 flex-shrink-0 text-violet-500"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         strokeWidth={2.5}
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
//                       </svg>
//                       <span>{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
//                 <img
//                   src={step.image.src}
//                   alt={step.imageAlt}
//                   className="h-full w-full object-cover"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// }


"use client";
import React, { useState } from "react";
import type { StaticImageData } from "next/image";
import { AuthSteps } from "@/lib/constants/docs/authSteps";
import { OrgSteps } from "@/lib/constants/docs/orgSteps";
import { UserSteps } from "@/lib/constants/docs/userSteps";
import { MemberSteps } from "@/lib/constants/docs/memberSteps";
import { RoleSteps } from "@/lib/constants/docs/roleSteps";
import { ConfigureSteps } from "@/lib/constants/docs/configureSteps";
import { WebhookSteps } from "@/lib/constants/docs/webhookSteps";
import { ServiceApiKeySteps } from "@/lib/constants/docs/serviceApiKeySteps";

export type StepItem = {
  number: number;
  label: string;
  heading: string;
  description: string;
  route: { method: string; path: string };
  checklist: string[];
  image?: StaticImageData;
};

const methodColors: Record<string, string> = {
  GET: "bg-blue-500/15 text-blue-400 border border-blue-500/30",
  POST: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
  PUT: "bg-amber-500/15 text-amber-400 border border-amber-500/30",
  PATCH: "bg-amber-500/15 text-amber-400 border border-amber-500/30",
  DELETE: "bg-red-500/15 text-red-400 border border-red-500/30",
};

function RouteBox({
  method,
  path,
  dotColor = "bg-emerald-400",
}: {
  method: string;
  path: string;
  dotColor?: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-[#020817] p-4 shadow-xl">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
          Endpoint
        </span>
        <div className={`h-2 w-2 rounded-full ${dotColor}`} />
      </div>
      <div className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-3">
        <span
          className={`rounded-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${methodColors[method]}`}
        >
          {method}
        </span>
        <code className="truncate text-sm text-slate-300">{path}</code>
      </div>
    </div>
  );
}

function Checklist({
  items,
  iconColor = "text-emerald-500",
}: {
  items: string[];
  iconColor?: string;
}) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
          <svg
            className={`mt-0.5 h-4 w-4 flex-shrink-0 ${iconColor}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionHeader({
  badge,
  badgeColor,
  title,
  subtitle,
}: {
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-7 space-y-4">
      <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-500 shadow-sm">
        <span className={`h-2 w-2 rounded-full ${badgeColor}`} />
        {badge}
      </div>
      <h1 className="text-4xl font-semibold leading-tight text-slate-950">
        {title}
      </h1>
      <p className="max-w-xl text-base leading-7 text-slate-500">{subtitle}</p>
    </div>
  );
}

const sectionColors: Record<
  string,
  { dot: string; icon: string; badge: string }
> = {
  emerald: {
    dot: "bg-emerald-400",
    icon: "text-emerald-500",
    badge: "bg-emerald-500",
  },
  sky: { dot: "bg-sky-400", icon: "text-sky-500", badge: "bg-sky-500" },
  violet: {
    dot: "bg-violet-400",
    icon: "text-violet-500",
    badge: "bg-violet-500",
  },
  rose: { dot: "bg-rose-400", icon: "text-rose-500", badge: "bg-rose-500" },
  amber: {
    dot: "bg-amber-400",
    icon: "text-amber-500",
    badge: "bg-amber-500",
  },
  indigo: {
    dot: "bg-indigo-400",
    icon: "text-indigo-500",
    badge: "bg-indigo-500",
  },
  teal: { dot: "bg-teal-400", icon: "text-teal-500", badge: "bg-teal-500" },
};

function ImageCard({ image }: { image: StaticImageData }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <img
        src={image.src}
        alt={image.src}
        className="h-full w-full object-cover"
      />
    </div>
  );
}


function StepMeta({
  step,
  stepIndex,
  c,
}: {
  step: StepItem;
  stepIndex: number;
  c: { dot: string; icon: string; badge: string };
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        {/* ✅ FIX: use stepIndex + 1 so numbering is always 1, 2, 3... per section */}
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
          {stepIndex + 1}
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          {step.label}
        </span>
      </div>
      <h2 className="text-2xl font-semibold text-slate-950">{step.heading}</h2>
      <p className="text-sm leading-7 text-slate-500">{step.description}</p>
      <RouteBox
        method={step.route.method}
        path={step.route.path}
        dotColor={c.dot}
      />
      <Checklist items={step.checklist} iconColor={c.icon} />
    </div>
  );
}

function StepSection({
  steps,
  color,
  showGrid = false,
}: {
  steps: StepItem[];
  color: keyof typeof sectionColors;
  showGrid?: boolean;
}) {
  const c = sectionColors[color];
  return (
    <div className="space-y-10">
      {steps.map((step, index) => (
        <div key={`${color}-step-${index}`}>
          {showGrid ? (
            <div className="grid items-start gap-12 lg:grid-cols-[65%_35%]">
              <div>
                <StepMeta step={step} stepIndex={index} c={c} />
              </div>
              {step.image && <ImageCard image={step.image} />}
            </div>
          ) : (
            <div className="flex flex-col gap-12">
              <StepMeta step={step} stepIndex={index} c={c} />
              {step.image && <ImageCard image={step.image} />}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}


function SectionDivider() {
  return (
    <div className="flex items-center gap-4 py-4">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="flex gap-1.5">
        <span className="h-1 w-1 rounded-full bg-slate-300" />
        <span className="h-1 w-1 rounded-full bg-slate-300" />
        <span className="h-1 w-1 rounded-full bg-slate-300" />
      </div>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </div>
  );
}

export default function AuthStepsSection() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-28 space-y-20">

        {/* ─── Authentication ─── */}
        <section>
          <SectionHeader
            badge="Authentication Flow"
            badgeColor="bg-emerald-500"
            title="Get started in 3 simple steps"
            subtitle="Follow these steps to create your RBAC account, verify your email, and access the dashboard."
          />
          <hr className="mb-8 border-slate-200" />
          <StepSection steps={AuthSteps} color="emerald" showGrid={true} />
        </section>

        <SectionDivider />

        {/* ─── Organization ─── */}
        <section className="space-y-14">
          <SectionHeader
            badge="Organization Docs"
            badgeColor="bg-sky-500"
            title="Understand organization setup and user assignment."
            subtitle="Learn how to create tenants, invite members, and keep org access clear."
          />
          <hr className="mb-8 border-slate-200" />
          <StepSection steps={OrgSteps} color="sky" showGrid={false} />
        </section>

        <SectionDivider />

        {/* ─── Users ─── */}
        <section>
          <SectionHeader
            badge="Users Management"
            badgeColor="bg-sky-500"
            title="Manage users across your platform."
            subtitle="Create, invite, and inspect individual user accounts from the Users dashboard."
          />
          <hr className="mb-8 border-slate-200" />
          <StepSection steps={UserSteps} color="sky" showGrid={false} />
        </section>

        <SectionDivider />

        {/* ─── Members ─── */}
        <section>
          <SectionHeader
            badge="Members Management"
            badgeColor="bg-violet-500"
            title="Manage organization members and roles."
            subtitle="Add members directly or invite them by email, assign roles, and control access within each organization."
          />
          <hr className="mb-8 border-slate-200" />
          <StepSection steps={MemberSteps} color="violet" showGrid={false} />
        </section>

        <SectionDivider />

        {/* ─── Roles ─── */}
        <section>
          <SectionHeader
            badge="Roles Management"
            badgeColor="bg-rose-500"
            title="Define and manage roles within your organization."
            subtitle="Create custom roles, assign them to members, and control what each role can do through Role-Permissions configuration."
          />
          <hr className="mb-8 border-slate-200" />
          <StepSection steps={RoleSteps} color="rose" showGrid={false} />
        </section>

        <SectionDivider />

        {/* ─── Configure ─── */}
        <section>
          <SectionHeader
            badge="Configure"
            badgeColor="bg-amber-500"
            title="Customize authentication for your application."
            subtitle="Toggle sign-up and sign-in methods, enforce email verification, enable MFA, and map role-permissions — all from the Configure dashboard."
          />
          <hr className="mb-8 border-slate-200" />
          <StepSection steps={ConfigureSteps} color="amber" showGrid={false} />
        </section>

        <SectionDivider />

        {/* ─── Webhook ─── */}
        <section>
          <SectionHeader
            badge="Webhook"
            badgeColor="bg-indigo-500"
            title="Connect EMS-RBAC to your backend in real time."
            subtitle="Configure a webhook URL to receive lifecycle events, generate a signing secret, and implement the invitation acceptance flow in your frontend."
          />
          <hr className="mb-8 border-slate-200" />
          <StepSection steps={WebhookSteps} color="indigo" showGrid={false} />
        </section>

        <SectionDivider />

        {/* ─── Service API Key ─── */}
        <section>
          <SectionHeader
            badge="Service API Key"
            badgeColor="bg-teal-500"
            title="Authenticate server-to-server requests."
            subtitle="The Service API Key is required for all client integration endpoints. Set it in your environment and send it as the X-Service-Api-Key header."
          />
          <hr className="mb-8 border-slate-200" />
          <StepSection steps={ServiceApiKeySteps} color="teal" showGrid={false} />
        </section>

      </div>
    </div>
  );
}