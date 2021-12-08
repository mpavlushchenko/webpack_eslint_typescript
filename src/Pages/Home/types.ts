type Role = { admin: string; user: string };

type Metadata = { id: number; created: string; title: string; postURL: string; type?: 'partially' | 'without access' };

export type { Role, Metadata };
