import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/Link";
import Experience from "../components/Experience";


export default function Home({ picture }) {
  console.log(picture);
  return (
    <div className={styles.container}>
      <Head>
        <title>Priyanshu Portfolio</title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main
        style={{
          backgroundColor: "teal",
          width: "45%",
          height: "400px",
          textAlign: "center",
          padding: "14px 0px",
          marginTop: "30px",
        }}
      >
        
        <div style={{ margin: "auto", width: "60%" }}>
          <Image
            src={picture.avatar_url}
            alt="avatar"
            width={200}
            height={200}
            style={{ borderRadius: "20px" }}
          />
        </div>
        <h4>{picture.name}</h4>
        <Link href="https://github.com/priyanshu7250">
          <h3>@{picture.login}</h3>
        </Link>
        <div style={{ margin: "10px" }}>
          Full-stack Developer | FOSS | JavaScript | Typescript | NodeJS | Github
          | ReactJS | HTML | CSS | Chakra-UI | MUI
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
          }}
        >

          <Link href="https://drive.google.com/file/d/1Z3Lx3iwvCk23KzAw3wyanRXneL3IWVKO/view">
            <button>RESUME</button>
          </Link>
          <Link href="https://github.com/priyanshu7250">
            <button>FOLLOW</button>
          </Link>
        </div>
      </main>

      <div style={{ width: "30%", marginTop: "30px" }}>
        <Experience />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  let res = await fetch(`https://api.github.com/users/priyanshu7250`);
  let data = await res.json();
  return {
    props: {
      picture: data,
    },
  };
}
