import type { PageMetaProps } from './PageMeta.types';

const PageMeta = ({ title, description }: PageMetaProps) => (
  <>
    <title>{`${title} — Nebiora.studio`}</title>
    <meta name="description" content={description} />
  </>
);

export default PageMeta;
