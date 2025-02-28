import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.Explorer({
      sortFn: (a, b) => {
        if (a?.file?.slug && /^(\w+)\/\1$/.test(a.file.slug.replaceAll(/-/g,''))) {
          return -1;
        }
        if (b?.file?.slug && /^(\w+)\/\1$/.test(b.file.slug.replaceAll(/-/g,''))) {
          return 1;
        }
        if ((!a.file && !b.file) || (a.file && b.file)) {
          return a.displayName.localeCompare(b.displayName, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        }
    
        if (a.file && !b.file) {
          return -1
        } else {
          return 1
        }
      },
    }),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.Explorer({
      sortFn: (a, b) => {
        if (a?.file?.slug && /^(\w+)\/\1$/.test(a.file.slug.replaceAll(/-/g,''))) {
          return -1;
        }
        if (b?.file?.slug && /^(\w+)\/\1$/.test(b.file.slug.replaceAll(/-/g,''))) {
          return 1;
        }
        if ((!a.file && !b.file) || (a.file && b.file)) {
          return a.displayName.localeCompare(b.displayName, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        }
    
        if (a.file && !b.file) {
          return -1
        } else {
          return 1
        }
      },
    }),
  ],
  right: [],
}
