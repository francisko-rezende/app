import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useAsync } from "react-use";
import AuthSection from "components/molecules/AuthSection/auth-section";
import HeaderLogo from "components/molecules/HeaderLogo/header-logo";

import useSession from "lib/hooks/useSession";
import useSupabaseAuth from "lib/hooks/useSupabaseAuth";
import { useFetchUser } from "lib/hooks/useFetchUser";
import OnboardingButton from "components/molecules/OnboardingButton/onboarding-button";
import Tooltip from "components/atoms/Tooltip/tooltip";
import { useMediaQuery } from "lib/hooks/useMediaQuery";
import { getAllFeatureFlags } from "lib/utils/server/feature-flags";

const TopNav = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const { user } = useSupabaseAuth();
  const { onboarded } = useSession();

  return (
    <header className="top-nav-container w-full sm:fixed top-0 left-0 z-50 py-0.5 bg-light-slate-2 border-b px-2">
      <div className="flex gap-2 justify-between items-center mx-auto px-2">
        <div className="flex gap-3 md:gap-8 items-center">
          <HeaderLogo responsive={true} withBg={false} textIsBlack />
          <Nav className="flex" />
          {user && onboarded === false && (
            <div className="relative lg:hidden">
              <Tooltip content="Complete the onboarding" defaultOpen={!isLargeScreen}>
                <OnboardingButton ariaLabel="Complete the onboarding" />
              </Tooltip>
            </div>
          )}
        </div>
        <AuthSection />
      </div>
    </header>
  );
};

const Nav = ({ className }: { className?: string }) => {
  const { user } = useSupabaseAuth();
  const { data: gitHubUser } = useFetchUser(user?.user_metadata.user_name);
  const state = useAsync(async () => {
    const featureFlags = await getAllFeatureFlags(Number(user?.user_metadata.sub));
    return featureFlags["star_search"];
  }, [user]);
  const userInterest = gitHubUser?.interests.split(",")[0] || "javascript";
  const router = useRouter();

  const explorePageUrlPattern = /^(\/explore\/topic).*\/(dashboard|reports|contributors|activity).*/g;

  return (
    <nav className={className} aria-label="top navigation">
      <ul className="flex items-center gap-3 md:gap-8 mb-1 ml-2 sm:m-0 w-full sm:w-auto">
        {user ? (
          <li>
            <Link
              className={`font-medium text-sm text-slate-700 hover:text-orange-500 transition-all ${getActiveStyle(
                router.asPath.startsWith("/workspaces/") || router.asPath.includes("/pages")
              )}`}
              href={"/workspaces"}
            >
              Workspace
            </Link>
          </li>
        ) : null}
        <li className="hidden lg:inline">
          <Link
            className={`tracking-tight font-medium text-slate-700 text-sm hover:text-orange-500 transition-all ${getActiveStyle(
              explorePageUrlPattern.test(router.asPath)
            )}`}
            href={`/explore/topic/${userInterest}/dashboard/filter/recent`}
          >
            Explore
          </Link>
        </li>
        <li className="hidden lg:inline">
          <Link
            className={`tracking-tight font-medium text-sm text-slate-700 hover:text-orange-500 transition-all ${getActiveStyle(
              router.pathname === "/feed"
            )}`}
            href={"/feed"}
          >
            Highlights
          </Link>
        </li>
        {state.value && (
          <li className="hidden lg:inline">
            <Link
              className={`tracking-tight font-medium text-sm text-slate-700 hover:text-orange-500 flex gap-2 items-center transition-all ${getActiveStyle(
                router.pathname === "/starsearch"
              )}`}
              href={"/starsearch"}
            >
              <img src="/assets/star-search-logo.svg" alt="Star Search logo" className="w-5 h-5" />
              <p className="mt-0.5">StarSearch</p>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

function getActiveStyle(isActive: boolean) {
  return isActive ? "!text-orange-600" : "";
}

export default TopNav;
