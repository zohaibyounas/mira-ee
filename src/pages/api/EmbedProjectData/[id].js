import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const getServicesDirectory = (language) => {
    // console.log(language)
  return path.join(process.cwd(), `src/locales/${language || 'de'}/embedded-projects`);
};

export async function getServiceData(id, language) {
  const fullPath = path.join(getServicesDirectory(language), `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark().use(html).process(matterResult.content);
  return {
    id,
    contentHtml: processedContent.toString(),
    ...matterResult.data,
  };
}


export default async function handler(req, res) {
  const { id, language } = req.query; // Retrieve id and language from query params

  try {
    const serviceData = await getServiceData(id, language || 'en');
    res.status(200).json(serviceData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching service data' });
  }
}