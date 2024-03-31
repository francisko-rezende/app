import { purgeCache } from "@netlify/functions";
import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).json({
      message: "Method not allowed",
    });
  }

  const supabaseServerClient = createPagesServerClient({
    req,
    res,
  });

  try {
    const {
      data: { session },
    } = await supabaseServerClient.auth.getSession();

    if (session) {
      const username = session.user.user_metadata.user_name;
      const userProfileCacheTag = `user-profile-${username}`;

      await purgeCache({
        tags: [userProfileCacheTag],
        siteID: process.env.NETLIFY_SITE_ID,
      });

      res.status(202).json({
        message: `Cache for user profile ${username} purged successfully`,
      });
    } else {
      res.status(401).json({
        message: "Unauthorized",
      });
    }
  } catch (error) {
    // log to Sentry

    res.status(500).json({
      message: "Internal server error",
    });
  }
}
