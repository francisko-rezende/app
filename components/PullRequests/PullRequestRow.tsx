import { GitMergeIcon, GitPullRequestClosedIcon, GitPullRequestIcon } from "@primer/octicons-react";
import Link from "next/link";
import AvatarHoverCard from "components/atoms/Avatar/avatar-hover-card";
import { TableCell, TableRow } from "components/shared/Table";

interface PullRequestRowProps {
  pullRequest: DbRepoPREvents;
  repoId: number;
}

function getPullRequestStateIcon(
  state: DbRepoPREvents["pr_state"],
  isDraft: DbRepoPREvents["pr_is_draft"],
  isMerged: DbRepoPREvents["pr_is_merged"]
) {
  switch (true) {
    case state === "open" && !isDraft:
      return <GitPullRequestIcon aria-label="open pull request" size={24} className="text-green-600" />;
    case state === "open" && isDraft:
      return <GitPullRequestIcon size={24} aria-label="draft pull request" className="text-slate-600" />;
    case state === "closed" && !isMerged:
      return <GitPullRequestClosedIcon size={24} aria-label="closed pull request" className="text-red-600" />;
    case state === "closed" && isMerged:
      return <GitMergeIcon size={24} aria-label="merged pull request" className="text-purple-600 h-8 w-8" />;
  }
}

function getPullRequestUrl(prNumber: number, repoName: string) {
  return `https://github.com/${repoName}/pull/${prNumber}`;
}

function getRepoUrl(repoName: string) {
  return `https://github.com/${repoName}`;
}

export const PullRequestRow = ({ pullRequest, repoId }: PullRequestRowProps) => {
  return (
    <TableRow>
      <TableCell>
        {getPullRequestStateIcon(pullRequest.pr_state, pullRequest.pr_is_draft, pullRequest.pr_is_merged)}
      </TableCell>
      <TableCell>
        {/* TODO pass in repo info to get the repo number ID */}
        <AvatarHoverCard contributor={pullRequest.pr_author_login} repositories={[repoId]} size="medium" />
      </TableCell>
      <TableCell>
        <Link
          href={getPullRequestUrl(pullRequest.pr_number, pullRequest.repo_name)}
          className="text-orange-700 underline hover:no-underline"
        >
          {pullRequest.pr_number}
        </Link>
      </TableCell>
      <TableCell>
        <time dateTime={pullRequest.pr_updated_at}>{new Date(pullRequest.pr_updated_at).toLocaleDateString()}</time>
      </TableCell>
      <TableCell>
        <time dateTime={pullRequest.pr_closed_at}>{new Date(pullRequest.pr_closed_at).toLocaleDateString()}</time>
      </TableCell>
      <TableCell className="truncate max-w-xs" title={pullRequest.pr_title}>
        {pullRequest.pr_title}
      </TableCell>
      <TableCell className="truncate max-w-xs">
        <Link href={getRepoUrl(pullRequest.repo_name)} className="text-orange-700 underline hover:no-underline">
          {pullRequest.repo_name}
        </Link>
      </TableCell>
      <TableCell>{pullRequest.pr_comments}</TableCell>
      <TableCell className="text-green-800 before:content-['+']">{pullRequest.pr_additions}</TableCell>
      <TableCell className="text-red-800 before:content-['-']">{pullRequest.pr_deletions}</TableCell>
      <TableCell>{pullRequest.pr_changed_files}</TableCell>
      <TableCell>{pullRequest.pr_commits}</TableCell>
      <TableCell>
        <time dateTime={pullRequest.pr_created_at}>{new Date(pullRequest.pr_created_at).toLocaleDateString()}</time>
      </TableCell>
    </TableRow>
  );
};
