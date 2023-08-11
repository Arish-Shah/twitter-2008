import type { UsernameAvailableResponseType } from "@/types";

export async function getUsernameAvailable(username: string) {
  const response = await fetch("/api/username-available?username=" + username);
  return response.json() as Promise<UsernameAvailableResponseType>;
}
