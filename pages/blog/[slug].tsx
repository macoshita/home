import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import Header from "~/components/Header";

type Props = {
  title: string;
  html: string;
};

const Post = ({ title, html }: Props): JSX.Element => {
  console.log(html);
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <article>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (typeof params?.slug !== "string") {
    return {
      props: {
        title: "404",
        html: ""
      }
    };
  }
  const { attributes, html } = await import(`~/blog/${params.slug}.md`);

  return {
    props: {
      title: attributes.title,
      html
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const fs = await import("fs");
  const path = await import("path");
  const paths = fs.readdirSync("./blog").map(file => {
    return {
      params: { slug: path.parse(file).name }
    };
  });

  return {
    paths,
    fallback: false
  };
};

export default Post;
