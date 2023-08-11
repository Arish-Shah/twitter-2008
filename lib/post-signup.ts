import type { SignupBodyType } from "@/types";

export async function postSignup(body: SignupBodyType) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify(body),
  });
  return response.json();
}
