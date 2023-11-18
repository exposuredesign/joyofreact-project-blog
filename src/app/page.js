import React from "react";
import { BLOG_TITLE } from "@/constants";
import BlogSummaryCard from "@/components/BlogSummaryCard";

import { getBlogPostList } from "@/helpers/file-helpers";

import styles from "./homepage.module.css";

async function Home() {
  const blogPosts = await getBlogPostList();
  console.log(blogPosts);
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>

      {blogPosts.map(({ slug, title, abstract, publishedOn }) => {
        return (
          <BlogSummaryCard
            key={slug}
            slug={slug}
            title={title}
            abstract={abstract}
            publishedOn={publishedOn}
          />
        );
      })}
    </div>
  );
}

export const metadata = {
  title: BLOG_TITLE,
  description: "A wonderful blog about JavaScript",
};

export default Home;
