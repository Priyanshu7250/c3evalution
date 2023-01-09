import Head from "next/head";
import Link from "next/link";

export default function Projects({ picture }) {
  console.log(picture.items);
  return (
    <div>
      <Head>
        <title>Priyanshu Project</title>
        <meta name="description" content="mine Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          width: "100%",
          padding: "14px 0px",
          display: "flex",
         
          margin: "auto",
          gap: "20px",
        }}
      >
        {picture.items.map((mine) => (
          <div
            key={mine.id}
            style={{
              backgroundColor: "blue",
              width: "480px",
              padding: "17px",
              display: "flex",
              justifyContent: "space-between",
              margin: "auto",
            }}
          >
            <div>
              <Link href={mine.html_url}>
                <h3>{mine.name}</h3>
              </Link>
              
              <h6>{mine.description || "No description"}</h6>
              <p>Stars: {mine.stargazers_count}</p>
              <p>Forks: {mine.forks_count}</p>
            </div>


            <div>
              <h1
                style={{
                  marginTop: "100px",
                  color: mine.bhasa == "JavaScript" ? "grey" : "orange",
                }}
              >
                {mine.bhasa}
              </h1>
            </div>

          </div>
        ))}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  let res = await fetch(
    `https://api.github.com/search/repositories?q=user:priyanshu7250+fork:true&sort=updated&per_page=10&type=Repositories`
  );
  let data = await res.json();
  return {
    props: {
      picture: data,
    },
  };
}
