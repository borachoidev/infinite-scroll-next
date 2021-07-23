import Head from "next/head";
interface Props {
  title: string;
  contentTitle?: string;
  url?: string;
  type?: string;
  image: string;
  description?: string;
}

const Meta = ({ metaTag }: { metaTag: Props }) => {
  return (
    <Head>
      <title>{metaTag.title}</title>
      <meta property="og:title" content={metaTag.contentTitle} />
      <meta property="og:url" content={metaTag.url} />
      <meta property="og:type" content={metaTag.type} />
      <meta property="og:image" content={metaTag.image} />
      <meta property="og:description" content={metaTag.description} />
    </Head>
  );
};

export default Meta;
