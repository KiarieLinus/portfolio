export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-11-06";

export const dataset = assertValue(
  process.env.SANITY_STUDIO_API_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.SANITY_STUDIO_API_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

export const useCdn = false;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
