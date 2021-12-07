type Role = { admin: string; user: string };

type Metadata = { title: string; postURL: string; type?: 'partially' | 'without access' };

export type { Role, Metadata };
