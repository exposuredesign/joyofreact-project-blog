import React from "react";

import BlogHero from "@/components/BlogHero";
import { loadBlogPost } from "@/helpers/file-helpers";
import { BLOG_TITLE } from "@/constants";
import { MDXRemote } from "next-mdx-remote/rsc";
import COMPONENT_MAP from "@/helpers/mdx-components";

import styles from "./postSlug.module.css";

async function BlogPost({ params }) {
  const { content, frontmatter } = await loadBlogPost(params.postSlug);
  //console.log(blogPost);
  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={content} components={COMPONENT_MAP} />
      </div>
    </article>
  );
}

export async function generateMetadata({ params }) {
  const { frontmatter } = await loadBlogPost(params.postSlug);
  return {
    title: `${frontmatter.title} | ${BLOG_TITLE}`,
    description: frontmatter.abstract,
  };
}

export default BlogPost;
