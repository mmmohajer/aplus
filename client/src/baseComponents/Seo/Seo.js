import Head from 'next/head';

const Seo = ({ title, keywords, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      {children}
    </>
  );
};

Seo.defaultProps = {
  title: 'APlus',
  description:
    'A reliable legal counsel/legal representative dually qualified by the Law Society of Ontario (LSO)  and the College of Immigration & Citizenship Consultants (CICC / ICCRC)  who makes sure to get the best possible outcome with your immigration matter to my best knowledge and ability. Fully bilingual in English & Farsi. My associates and I try our best to bring success to your immigration matter in all the related categories from beginning to the Appeals.',
  keywords: 'Immigration, Canada, Translation, VISA, Immigrant, APlus'
};

export default Seo;
