export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 225;
  const cleanContent = content
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/[\#*`_~\[\](){}>|-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!cleanContent) return 1;

  return Math.max(1, Math.ceil(cleanContent.split(" ").length / wordsPerMinute));
}

export function formatDate(
  dateString: string,
  style: "long" | "short" = "long",
): string {
  const date = new Date(`${dateString}T00:00:00Z`);

  return new Intl.DateTimeFormat("en-GB", {
    day: style === "long" ? "numeric" : undefined,
    month: style === "long" ? "long" : "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
