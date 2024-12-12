import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const getServicesDirectory = (language) => {
    // console.log(language)
  return path.join(process.cwd(), `src/locales/${language || 'de'}/digital-services`);
};


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


export default async function handler(req, res) {
  const { language } = req.query; // Retrieve language from query params

  try {
    // Fetch all services based on the provided language, defaulting to 'en'
    const allServices = await getSortedServicesData(language || 'en');
    
    // Respond with the services data as JSON
    res.status(200).json(allServices);
  } catch (error) {
    // If an error occurs, send a 500 error with a message
    console.error(error); // For debugging
    res.status(500).json({ message: 'Error fetching service list' });
  }
}
