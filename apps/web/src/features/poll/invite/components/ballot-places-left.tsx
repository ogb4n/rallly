"use client";

import { cn } from "@rallly/ui";
import { Trans } from "@/i18n/client";

export function BallotPlacesLeft({
  placesLeft,
  className,
}: {
  placesLeft: number | null | undefined;
  className?: string;
}) {
  if (placesLeft === null || placesLeft === undefined) {
    return null;
  }

  return (
    <span
      data-testid="ballot-places-left"
      className={cn(
        "shrink-0 rounded-full px-2 py-0.5 font-medium text-xs",
        placesLeft === 0
          ? "bg-gray-200 text-gray-700 dark:bg-white/10 dark:text-gray-300"
          : "bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-300",
        className,
      )}
    >
      {placesLeft === 0 ? (
        <Trans i18nKey="ballotOptionFull" defaults="Full" />
      ) : (
        <Trans
          i18nKey="ballotPlacesLeft"
          defaults="{count, plural, one {# place left} other {# places left}}"
          values={{ count: placesLeft }}
        />
      )}
    </span>
  );
}
