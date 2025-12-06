export interface BlogLink {
  title: string;
  path: string;
  label?: string;
}

export interface BlogSectionLink {
  title: string;
  links: BlogLink[];
}
