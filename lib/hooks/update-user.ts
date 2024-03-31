import { supabase } from "lib/utils/supabase";

export interface UpdateUserPayload {
  name?: string;
  email?: string;
  bio?: string;
  url?: string;
  twitter_username?: string;
  company?: string;
  location?: string;
  interests?: string[];
  display_local_time?: boolean;
  timezone?: string;
  github_sponsors_url?: string;
  linkedin_url?: string;
  discord_url?: string;
}

interface UseUpdateUserProps {
  data: UpdateUserPayload;
  params?: string;
}

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const updateUser = async ({ data, params }: UseUpdateUserProps) => {
  const sessionResponse = await supabase.auth.getSession();
  const sessionToken = sessionResponse?.data.session?.access_token;
  try {
    const res = await fetch(`${baseUrl}/auth/profile${params ? `/${params}` : ""}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionToken}`,
      },
      method: "PATCH",
      body: JSON.stringify({ ...data }),
    });

    if (res.status === 200) {
      const purgeResponse = await fetch(`/api/purge-user-profile`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionToken}`,
        },
        method: "POST",
      });

      if (purgeResponse.status !== 202) {
        // eslint-disable-next-line no-console
        console.error("Failed to purge user profile cache");
      }

      return res.json();
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
};

export { updateUser };
