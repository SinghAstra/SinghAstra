export interface ArchiveLink {
  title: string;
  path: string;
  label?: string;
}

export interface ArchiveSectionLink {
  title: string;
  links: ArchiveLink[];
}
