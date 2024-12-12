import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Function to get the path for the service files based on the selected language
const getServicesDirectory = (language) => {
  return path.join(process.cwd(), `src/locales/${language || 'de'}/embedded-services`);
};

// Function to get all services data sorted by id
export function getSortedServicesData(language) {
  // console.log("getSortedServicesData",language)
  const servicesDirectory = getServicesDirectory(language);

  // Get file names under the correct directory based on the language
  const fileNames = fs.readdirSync(servicesDirectory);
  const allData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    // Construct the full path dynamically for the language
    const fullPath = path.join(servicesDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  // Sort posts by id or other sorting criteria
  return allData.sort((a, b) => {
    if (a.id > b.id) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Function to get featured services based on a list of ids
export function getFeaturedServicesData(ids, language) {
  const servicesDirectory = getServicesDirectory(language);
  const fileNames = fs.readdirSync(servicesDirectory);
  const allData = [];

  fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    // Only fetch services that are in the provided ids list
    if (ids.includes(id)) {
      const fullPath = path.join(servicesDirectory, `${id}.md`);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const matterResult = matter(fileContents);

      allData.push({
        id,
        ...matterResult.data,
      });
    }
  });

  // Sort posts by id or other sorting criteria
  return allData.sort((a, b) => {
    if (a.id > b.id) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Function to get all service ids (for dynamic routing)
export function getAllServicesIds(language) {
  const servicesDirectory = getServicesDirectory(language);
  const fileNames = fs.readdirSync(servicesDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

// Function to fetch specific service data based on its id
export async function getServiceData(id, language) {
  // console.log("getServiceData",language)
  const fullPath = path.join(getServicesDirectory(language), `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the metadata section of the markdown file
  const matterResult = matter(fileContents);

  // Use remark to convert markdown content into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  // Combine the metadata with contentHtml and return
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
