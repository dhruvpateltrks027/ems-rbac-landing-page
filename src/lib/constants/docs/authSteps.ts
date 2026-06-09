import { StepItem } from "@/components/screen/doc/page";
import LoginImage from "../../../assets/images/login.png";
import SignupImage from "../../../assets/images/signup.png";
import VerifyImage from "../../../assets/images/verification.png";

export const AuthSteps: StepItem[] = [
  {
    number: 1,
    label: "Create Account",
    heading: "Sign up for an account",
    description:
      "Open the signup page and fill in your details. This creates the first admin user for your RBAC organization.",
    route: { method: "POST", path: "/auth/sign-up" },
    image: SignupImage,
    checklist: [
      "Enter first name, last name, and email address",
      "Choose a strong password for your account",
      'Click "Create account" — a verification email is sent instantly',
      "This account becomes the root admin for your organization",
    ],
  },
  {
    number: 2,
    label: "Sign In",
    heading: "Sign in to your dashboard",
    description:
      "Once verified, head to the sign-in page. Enter your credentials and you'll be redirected to the RBAC admin dashboard.",
    route: { method: "POST", path: "/auth/sign-in" },
    image: LoginImage,
    checklist: [
      "Navigate to /auth/sign-in",
      "Enter the verified email address and password",
      'Click "Continue" to authenticate',
      "Tokens are saved to localStorage automatically",
      "You'll be redirected to the admin dashboard",
    ],
  },
  {
    number: 3,
    label: "Verify Email",
    heading: "Confirm your email address",
    description:
      "Check your inbox for a 6-digit OTP code. Enter it on the verification screen to activate your account before signing in.",
    route: { method: "POST", path: "/auth/verify-email" },
    image: VerifyImage,
    checklist: [
      "Check your inbox for an email from Trks RBAC",
      "Enter the 6-digit OTP code from the email",
      'Click "Verify" — the account becomes active',
      "Use 'Resend code' if the email doesn't arrive within 2 minutes",
    ],
  },
];
