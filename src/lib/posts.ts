import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const remarkHtmlOptions = { sanitize: false } as const;

const postsDir = path.join(process.cwd(), "src/content/posts");

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  date: string;
  updated?: string;
  readTime: string;
  emoji: string;
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));
  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(postsDir, file), "utf-8");
    const { data } = matter(raw);
    return { slug, ...data } as PostMeta;
  });
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export interface FaqItem {
  question: string;
  answer: string;
}

function extractFaq(content: string): FaqItem[] {
  const faq: FaqItem[] = [];
  const lines = content.replace(/\r\n/g, "\n").split("\n");
  let i = 0;
  while (i < lines.length) {
    const qMatch = /^###\s+Q\d*\.?\s*(.+)/.exec(lines[i]);
    if (qMatch) {
      const question = qMatch[1].trim();
      const answerLines: string[] = [];
      i++;
      while (i < lines.length && !/^#{2,3}\s/.test(lines[i])) {
        answerLines.push(lines[i]);
        i++;
      }
      const answer = answerLines
        .join(" ")
        .replace(/\*\*A:\*\*/g, "")
        .replace(/\s+/g, " ")
        .trim();
      if (question && answer) faq.push({ question, answer });
    } else {
      i++;
    }
  }
  return faq;
}

export async function getPostBySlug(slug: string) {
  const raw = fs.readFileSync(path.join(postsDir, `${slug}.md`), "utf-8");
  const { data, content } = matter(raw);
  const result = await remark().use(html, remarkHtmlOptions).process(content);
  return {
    meta: { slug, ...data } as PostMeta,
    contentHtml: result.toString(),
    faq: extractFaq(content),
  };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
