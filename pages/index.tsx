import Link from "next/link";
import Head from "next/head";
import Nav from "~/components/Nav";
import { GetStaticProps } from "next";

type Props = {
  personalProjects: {
    year: number;
    name: string;
    url: string;
  }[];
  blogs: string[];
};

const Home = ({ personalProjects, blogs }: Props): JSX.Element => (
  <>
    <Head>
      <title>macoshita.me</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <article>
      <header>
        <h2>About</h2>
      </header>
      <p>Takahiro Yamakoshi (@macoshita)</p>
      <ul>
        <li>
          <a href="https://twitter.com/macoshita">Twitter</a>
        </li>
        <li>
          <a href="https://fb.com/takahiro.yamakoshi">Facebook</a>
        </li>
        <li>
          <a href="https://github.com/macoshita">GitHub</a>
        </li>
        <li>
          <a href="https://qiita.com/macoshita">Qiita</a>
        </li>
      </ul>
    </article>
    <article>
      <header>
        <h2>Personal Projects</h2>
      </header>
      <ul>
        {personalProjects.map(project => (
          <li key={project.url}>
            <a href={project.url}>
              {project.year} - {project.name}
            </a>
          </li>
        ))}
      </ul>
    </article>
    <article>
      <header>
        <h2>Blog</h2>
      </header>
      <ul>
        {blogs.map(blog => (
          <li key={blog}>
            <Link href="/blog/[slug]" as={blog}>
              <a>{blog}</a>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  </>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const fs = await import("fs");
  const path = await import("path");
  const blogs = fs
    .readdirSync("./blog")
    .map(file => `/blog/${path.parse(file).name}`)
    .sort()
    .reverse();

  return {
    props: {
      personalProjects: [
        {
          year: 2018,
          name: "かなあそび",
          url: "https://macoshita.github.io/play-kana-input"
        },
        {
          year: 2017,
          name: "AR りんごひろい for Pepper",
          url: "https://youtu.be/dT5IBdxcRbg"
        },
        {
          year: 2015,
          name: "折り返し翻訳",
          url: "https://orikaeshi.com"
        }
      ],
      blogs
    }
  };
};

export default Home;
