export const roles = ["MASTER_ADMIN", "ADMIN"] as const;

export type Role = (typeof roles)[number];
